--EX 12:

-- a. subcereri sincronizate în care intervin cel puțin 3 tabele 
--Afisati pentru fiecare proprietate: numele proprietatii formatat (prima litera mare), numele complet al gazdei cu majuscule, pretul pe noapte, data la care a fost adaugata proprietatea formatata (DD/MM/YYYY), numarul de zile de cand proprietatea este pe platforma, o coloana care indica daca pretul este peste sau sub media proprietatilor de acelasi tip, si numarul de recenzii cu rating mai mare de 3
-- A+E
--subcereri sincronizate
--2 functii siruri
--CASE
--ORDER BY
select p.nume_proprietate,
       initcap(p.tip_proprietate) as tip,
       upper(u.nume
             || ' '
             || u.prenume) as nume_complet,
       p.pret_noapte,
       to_char(
          p.data_creare,
          'yyyy/mm/dd'
       ) as data_creare,
       floor(months_between(
          trunc(sysdate),
          p.data_creare
       ) / 12) as ani_aparitie,
       case
          when p.pret_noapte >= (
             select avg(p2.pret_noapte)
               from proprietate p2
              where p.tip_proprietate = p2.tip_proprietate
          ) then
             'peste_medie'
          else
             'sub_medie'
       end as medie_pret,
       (
          select count(*)
            from recenzie rec
            join rezervare rez
          on rez.rezervare_id = rec.rezervare_id
           where p.proprietate_id = rez.proprietate_id
             and rec.rating >= 3
       ) as nr_recenzii_peste_3
  from proprietate p
  join utilizator u
on u.utilizator_id = p.gazda_id
 order by p.tip_proprietate,
          p.pret_noapte desc;

--Afisati gazdele care au incasat mai mult decat media --incasarilor tuturor gazdelor, impreuna cu numarul de --proprietati si totalul incasat
--B+C
--subcerere neisncronizata in FROM, WHERE
--functii siruri de caractere


select upper(gazda_totale.nume
             || ' '
             || gazda_totale.prenume),
       gazda_totale.total_incasat,
       gazda_totale.nr_proprietati
  from (
   select u.nume,
          u.prenume,
          u.utilizator_id,
          sum(rez.pret) as total_incasat,
          count(distinct p.proprietate_id) as nr_proprietati
     from utilizator u
     join proprietate p
   on p.gazda_id = u.utilizator_id
     join rezervare rez
   on rez.proprietate_id = p.proprietate_id
    group by u.utilizator_id,
             u.nume,
             u.prenume
) gazda_totale
 where gazda_totale.total_incasat > (
   select avg(total)
     from (
      select sum(rez.pret) as total
        from proprietate p
        join rezervare rez
      on p.proprietate_id = rez.proprietate_id
       group by p.gazda_id
   )
);


-- Afisati pentru fiecare client: numele complet cu majuscule, tipul de client decodat in functie de numarul de rezervari (1 rezervare = Client nou, 2 rezervari = Client regulat, altfel = Client fidel), suma totala cheltuita (cu 0 in loc de NULL) si un tag de membership (VIP daca a cheltuit mai mult decat media tuturor clientilor, altfel Standard), ordonat dupa suma cheltuita descrescator
--F+D
--WITH block
--decode
--nvl
--order by
--case
with rezervari_clienti as (
   select u.nume,
          u.prenume,
          count(*) as total_rezervari,
          sum(rez.pret) as suma_cheltuita
     from utilizator u
     join rezervare rez
   on rez.client_id = u.utilizator_id
    group by u.utilizator_id,
             u.nume,
             u.prenume
)
select upper(rezervari_clienti.nume
             || ' '
             || rezervari_clienti.prenume) as nume_complet,
       decode(
          rezervari_clienti.total_rezervari,
          1,
          'Client nou',
          2,
          'Client regulat',
          'Client fidel'
       ) as tip_client,
       nvl(
          rezervari_clienti.suma_cheltuita,
          0
       ) as suma_cheltuita,
       case
          when suma_cheltuita > (
             select avg(col)
               from (
                select sum(rez.pret) as col
                  from rezervare rez
                  join utilizator u
                on u.utilizator_id = rez.client_id
                 group by rez.client_id
             )
          ) then
             'VIP'
          else
             'Standard'
       end as membership_tag
  from rezervari_clienti
 order by rezervari_clienti.suma_cheltuita desc;


--  Afisati gazdele care au proprietati cu mai multe facilitati decat media facilitatilor per proprietate, impreuna cu numele gazdei, numele proprietatii, numarul de facilitati si rating-ul mediu al recenziilor acelei proprietati
--group by
--left join
--count+avg--functii agregate
--upper

select upper(u.nume
             || ' '
             || u.prenume) as nume_gazda,
       p.nume_proprietate,
       count(pf.facilitate_id) as nr_facilitati,
       nvl(
          round(
             avg(rec.rating),
             2
          ),
          0
       ) as rating_mediu
  from utilizator u
  join proprietate p
on p.gazda_id = u.utilizator_id
  join proprietate_facilitate pf
on pf.proprietate_id = p.proprietate_id
  left join rezervare rez
on rez.proprietate_id = p.proprietate_id
  left join recenzie rec
on rec.rezervare_id = rez.rezervare_id
 group by p.proprietate_id,
          u.utilizator_id,
          u.nume,
          u.prenume,
          p.nume_proprietate
having count(pf.facilitate_id) > (
   select avg(cnt)
     from (
      select count(facilitate_id) as cnt
        from proprietate_facilitate
       group by proprietate_id
   )
);

---Afisati proprietatile disponibile in urmatoarele 3 luni, impreuna cu numele gazdei, pretul special (0 daca nu are) si statusul schimbat, ordonate dupa pret
--functii de siruri
--decode, nvl
--order by
select initcap(p.nume_proprietate) as nume_proprietate,
       upper(u.nume
             || ' '
             || u.prenume) as nume_gazda,
       p.tip_proprietate,
       to_char(
          d.data_disponibilitate_start,
          'DD/MM/YYYY'
       ) as data_start,
       to_char(
          d.data_disponibilitate_end,
          'DD/MM/YYYY'
       ) as data_end,
       nvl(
          d.pret_special,
          0
       ) as pret_special,
       decode(
          d.status_disponibilitate,
          'disponibil',
          'Disponibil',
          'indisponibil',
          'Ocupat'
       ) as status
  from disponibilitate d
  join proprietate p
on p.proprietate_id = d.proprietate_id
  join utilizator u
on u.utilizator_id = p.gazda_id
 where d.data_disponibilitate_start <= add_months(
      sysdate,
      3
   )
   and d.status_disponibilitate = 'disponibil'
 order by nvl(
   d.pret_special,
   0
) asc;
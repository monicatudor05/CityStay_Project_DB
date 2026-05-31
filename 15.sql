-- outer join
select u.nume
       || ' '
       || u.prenume as nume_complet,
       u.email,
       u.telefon,
       r.rezervare_id,
       p.nume_proprietate,
       p.tip_proprietate,
       r.data_checkin,
       r.data_checkout,
       pl.status_plata,
       pl.suma
  from utilizator u
  left join rezervare r
on r.client_id = u.utilizator_id
  left join proprietate p
on p.proprietate_id = r.rezervare_id
  left join plata pl
on pl.rezervare_id = r.rezervare_id;



-- divison operation
select u.nume
       || ' '
       || u.prenume as nume_complet,
       u.email,
       u.telefon
  from ultilizator u
 where not exists (
   select distinct pl.metoda_plata
     from plata pl
    where not exists (
      select p2.plata_id
        from plata p2
        join rezervare r
      on r.rezervare_id = p2.rezervare_id
       where r.client_id = u.utilizator_id
         and p2.metoda_plata = pl.metoda_plata
   )
);

-- analiza top-n

select *
  from (
   select p.proprietate_id,
          p.nume_proprietate,
          p.tip_proprietate,
          count(r.rezervare_id) as nr_rezervari
     from proprietate p
     left join rezervare r
   on r.proprietate_id = p.proprietate_id
    group by p.proprietate_id,
             p.nume_proprietate,
             p.tip_proprietate,
             p.pret_noapte
    order by nr_rezervari desc
)
 where rownum <= 4;
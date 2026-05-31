--neoptimizat
explain plan
   for
select p.proprietate_id,
       p.nume_proprietate,
       p.tip_proprietate,
       upper(u.prenume
             || ' '
             || u.nume) as gazda,
       count(distinct rez.rezervare_id) as nr_rezervari,
       sum(pl.suma),
       round(
          avg(pl.suma),
          2
       ) as venit_total,
       count(distinct pf.facilitate_id) as nr_facilitati,
       rank()
       over(partition by p.tip_proprietate
            order by sum(pl.suma) desc
       ) as rank_tip
  from proprietate p
  join utilizator u
on u.utilizator_id = p.gazda_id
  left join rezervare rez
on rez.proprietate_id = p.proprietate_id
  left join plata pl
on pl.rezervare_id = rez.rezervare_id
  left join recenzie rec
on rec.rezervare_id = rez.rezervare_id
  left join proprietate_facilitate pf
on pf.proprietate_id = p.proprietate_id
 where p.pret_noapte > (
   select avg(pret_noapte)
     from proprietate
)
 group by p.proprietate_id,
          p.nume_proprietate,
          p.tip_proprietate,
          u.nume,
          u.prenume
having sum(pl.suma) > 0
 order by venit_total desc;
select *
  from table ( dbms_xplan.display );



--optimizat
create index idx_prop_gazda on
   proprietate (
      gazda_id
   );

create index idx_prop_pret on
   proprietate (
      pret_noapte
   );

create index idx_rez_prop on
   rezervare (
      proprietate_id
   );

create index idx_plata_rez_status on
   plata (
      rezervare_id,
      status_plata
   );

create index idx_rec_rezervare on
   recenzie (
      rezervare_id
   );

create index idx_pf_prop on
   proprietate_facilitate (
      proprietate_id
   );
explain plan
   for
select /*+ 
    INDEX(p idx_prop_gazda)
    INDEX(rez idx_rez_prop)
    INDEX(pl idx_plata_rez_status)
    INDEX(rec idx_rec_rezervare)
    INDEX(pf idx_pf_prop)
    USE_NL(rez p)
    NO_MERGE(subq)
*/ p.proprietate_id,
       p.nume_proprietate,
       p.tip_proprietate,
       upper(u.prenume
             || ' '
             || u.nume) as gazda,
       count(distinct rez.rezervare_id) as nr_rezervari,
       sum(pl.suma) as venit_total,
       round(
          avg(pl.suma),
          2
       ) as medie_plata,
       count(distinct pf.facilitate_id) as nr_facilitati,
       rank()
       over(partition by p.tip_proprietate
            order by sum(pl.suma) desc
       ) as rank_tip
  from proprietate p
  join utilizator u
on u.utilizator_id = p.gazda_id
  left join rezervare rez
on rez.proprietate_id = p.proprietate_id
  left join plata pl
on pl.rezervare_id = rez.rezervare_id
   and pl.status_plata = 'confirmata'
  left join recenzie rec
on rec.rezervare_id = rez.rezervare_id
  left join proprietate_facilitate pf
on pf.proprietate_id = p.proprietate_id
 where p.pret_noapte > (
   select /*+ NO_MERGE */ avg(pret_noapte)
     from proprietate subq
)
 group by p.proprietate_id,
          p.nume_proprietate,
          p.tip_proprietate,
          u.nume,
          u.prenume
having sum(pl.suma) > 0
 order by venit_total desc;

select *
  from table ( dbms_xplan.display );
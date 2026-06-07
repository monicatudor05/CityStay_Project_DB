--DIRTY READ
-- Oracle foloseste implicit READ COMMITTED
   set transaction isolation level read committed;

--Sesiunea1(T1) -Paul incepe rezervarea

update disponibilitate
   set
   status_disponibilitate = 'indisponibil'
 where proprietate_id = 4;

--Paul a marcat proprietatea ca indisponibila, dar nu a faacut incaaa COMMIT




--Sesiunea(T2) -Elena cauta proprietati disponibile


select p.proprietate_id,
       p.nume_proprietate,
       d.disponibilitate_id,
       d.data_disponibilitate_start,
       d.data_disponibilitate_end,
       d.status_disponibilitate
  from proprietate p
  join disponibilitate d
on d.proprietate_id = p.proprietate_id
 where d.status_disponibilitate = 'disponibil';

 -- Intr-un sistem cu READ UNCOMMITED, Penthouse New York nu apare in rezultate
 --Elena crede ca proprietatea este indisponibila


 --Sesiunea1(T1) - Paul se razgandeste 
rollback;

 --Proprietates devine 'disponibil'
 --Elena a citit date false


 --Sesiunea(T2) - Elena cauta din nou

select p.proprietate_id,
       p.nume_proprietate,
       d.disponibilitate_id,
       d.data_disponibilitate_start,
       d.data_disponibilitate_end,
       d.status_disponibilitate
  from proprietate p
  join disponibilitate d
on d.proprietate_id = p.proprietate_id
 where d.status_disponibilitate = 'disponibil';
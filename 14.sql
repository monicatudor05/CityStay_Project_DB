create or replace view rezervari_complete as
   select r.rezervare_id,
          p.nume_proprietate,
          r.data_checkin,
          r.data_checkout,
          u.nume
          || ' '
          || u.prenume as client_fullname,
          r.nr_persoane,
          pl.status_plata,
          pl.suma
     from rezervare r
     join proprietate p
   on p.proprietate_id = r.proprietate_id
     join utilizator u
   on r.client_id = u.utilizator_id
     join plata pl
   on pl.rezervare_id = r.rezervare_id;
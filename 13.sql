-- EX 13
-- Filtreaza proprietatile care au rating > 4, apoi mareeste cu 10% pretul proprietatii
update proprietate
   set
   pret_noapte = pret_noapte * 1.10
 where proprietate_id in (
   select rez.proprietate_id
     from rezervare rez
     join recenzie rec
   on rec.rezervare_id = rez.rezervare_id
    group by rez.proprietate_id
   having avg(rec.rating) > 4
);


-- Sterge din wishlist proprietatile care nu au nicio rezervare

delete from wishlist
 where proprietate_id not in (
   select distinct proprietate_id
     from rezervare
);


--Sterge recenziile cu rating mai mic decat media ratingurilor tuturor recenziilor

delete from recenzie
 where rating < (
   select avg(rating)
     from recenzie
);
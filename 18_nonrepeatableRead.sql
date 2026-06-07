
-- SESIUNEA 1 (T1) - Paul

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Paul este activ, pregatit sa faca o rezervare


-- SESIUNEA 2 (T2) - Elena - Prima citire


SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

SELECT p.proprietate_id,
       p.nume_proprietate,
       d.disponibilitate_id,
       d.data_disponibilitate_start,
       d.data_disponibilitate_end,
       d.status_disponibilitate
FROM proprietate p
JOIN disponibilitate d
    ON d.proprietate_id = p.proprietate_id
WHERE d.status_disponibilitate = 'disponibil';
-- Penthouse New York apare disponibil


-- SESIUNEA 1 (T1) - Paul face rezervarea


UPDATE disponibilitate
SET status_disponibilitate = 'indisponibil'
WHERE proprietate_id = 1;

COMMIT;
-- Paul a confirmat


-- SESIUNEA 2 (T2) - Elena - A doua citire

SELECT p.proprietate_id,
       p.nume_proprietate,
       d.disponibilitate_id,
       d.data_disponibilitate_start,
       d.data_disponibilitate_end,
       d.status_disponibilitate
FROM proprietate p
JOIN disponibilitate d
    ON d.proprietate_id = p.proprietate_id
WHERE d.status_disponibilitate = 'disponibil';
-- Penthouse New York NU mai apare 

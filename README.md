#  Proiect Baze de Date- Airbnb type


## 1.Descrierea modelului real, a utilitatii acestuia si a regulilor de functionare
 CityStay reprezinta o aplicaatie web de tip Airbnb, utilizata pentru rezervarea apartamentelor pe o perioada determinata, fiind disponibila la nivel global. Platforma faciliteaza interactiunea intre utilizatori care pot avea roluri diferite, respectiv gazda si oaspete, un utilizator avand posibilitatea de a indeplini simultan ambele roluri.

Pentru utilizarea aplicatiei, fiecare utilizator va trebui sa-si creeze un cont, completand informatii precum prenumele, numele, emailul, numarul de telefon, o parola, data nasterii si o poza de profil autentica. In plus, fiecarui utilizator i se atribuie automat un identificator unic la inregistrare pe platforma.

 Utilizatorii care au rol de gazda pot pubica anunturi pentru proprieteti disponibile pentru inchiriere. La fiecare publicatie a unui utilizator - gazda, este necesara completarea datelor despre spatiul dat spre inchiriere. Fiecare proprietate are atasata automat identificatorul gazdei, iar proprietarul trebuie sa publice numele proprietetii, descrierea apartamentului, tipul acestuia(apartament/casa/penthouse etc), numarul maxim de persoane acceptate, numarul de camere(dormitoare, bai, paturi etc) si pretul pe noapte, care poate varia in functie de disponibilitate sau de perioada. Este obligatorie completarea facilitatilor disponibile pentru apartament. Pentru postarea unui astfel de anunt sunt necesare un set de poze clare si autentice care sa reflecte in mod real proprietatea.

Utilizatorii care au rol de oaspete pot efectua rezervari pentru proprietati disponibile. Fiecare rezervare este identificata printr-un id unic si este asociata atat unui utilizator, cat si unei proprietati. In cadrul unei rezervari, utilizatorul trebuie sa specifice data sosirii, data plecarii si numarul de persoane, iar in urma acestor informatii se calculeaza automat pretul total al sederii.

In urma unei rezervari se efectueaza o plata care este identificata printr-un id unic, iar totalul/suma platii este calculata pe baza proprietatii pe care a ales-o utilizatorul oaspete. Utilizatorul are dreptul de a-si alege metoda platii. In urma tranzactiei, se completeaza si statusul platii.

Platforma permite, de asemenea, adaugarea de recenzii pentru proprietati, insa doar de catre utilizatori care au efectuat anterior o rezervare pentru acea proprietate, asigurand astfel autenticitatea feedback-ului oferit

Orice persoana inregistrata pe platforma CityStay are posibilitatea de a-si crea un Wishlist in care poate salva proprietati pentru rezervari viitoare.

In ceea ce priveste regulile de functionare ale sistemului, un utilizator poate avea unul sau maia multe roluri, o proprietate apartine unui singur utilizator, iar un utilizator poate efectua mai multe rezervari. Fiecare rezervare este asociaata unei singure proprieteti, iar renziile pot fi aduagate exclusiv in urma unei rezervari efectuate in trecut. In plus, un utilizator poate adauga mai multe proprietati in cadrul wishlist-ului personal.


## 2.Prezentarea constrangerilor(reguli, restrictii) impuse asupra modelului.

- Un utilizator poate avea unul sau doua roluri pe platforma(gazda/oaspete)
- O proprietate trebuie sa fie detinuta de un singur utilizator. 
- Este obligatoriu ca o proprietate sa fie insotita de un set de poze care sa reflecte realitatea
- O rezervare trebuie sa corespunda unei singure prroprrietatati si unui singur utilizator
- Recenziie pentru o proprietate pot fi postate doar in urma efectuarii unei rezervari efectuate in trecut.
- O proprietate nu poate fi data spre inchiriere daca nu este disponibila pe perioada solicitata de oaspete
- Wishlist-ul unui utilizator poate contine niciuna sau mai multe proprietati
- O plata este efectuata doar in urma unei rezervari

## 3.Descrierea entitatilor, incluzand precizarea cheii primare.
#### Utilizator:
- persoana care detine un cont pe platforma web CityStay
- poate avea unul sau doua roluri(gazda/oaspete)
- cheie primara: **utilizator_id**

#### Proprietate:
- spatiul de inchiriat pentru utilizatorii de tip oaspete
- cheie primara: **proprietate_id**

#### Rezervare:
- rezervarea unei proprietati de catre un utilizator
- cheie primara: **rezervare_id**

#### Facilitati:
- lista totala a facilitatilor
- cheie primara: **facilitate_id**

## 4.Descrierea relatiilor, incluzand precizarea cardinalitatii acestora

- **Utilizator-Proprietate**: one-to-many

    Un utilizator poate sa aiba niciuna sau mai multe proprietati
    
    O proprietate trebuie sa fie **obligatoriu** detinuta de un utilizator
---
- **Proprietate-Rezervare**: one-to-many

    O proprietate poate sa aiba niciuna sau mai multe rezervari in timp

    O rezervare trebuie sa fie asociata obligatoriu unei singure proprietati
---
- **Rezervare-Plata**: one-to-many

    O rezervare poate sa aiba una sau mai multe plati(in posibilitatea esuarii unei plati)

    O plata este asociata unei singure plati
---
- **Rezervare-Recenzie**: one-to-one

    O rezervare poate avea ce mult o recenzie

    O recenzie trebuie sa fie asociata obligatoriu unei plati

---
- **Utilizator-Rol**: many-to-many

    Un utilizator poate avea unul sau doua roluri pe platforma web CityStay(gazda/oaspete)

    Un rol poate fi atribuit niciunuia sau mai multor utilizatori
---
- **Proprietate-Facilitate**: many-to-many

    O proprietate poate sa aiba una sau mai multe faciliatati

    O facilitate poate sa apartina niciuneia sau mai multor proprietati
---
- **Proprietate-Imagine_proprietate**: one-to-many

    O proprietate trebuie sa aiba minim o imagine disponibila

    O imagine trebuie sa fie asociata obligatoriu unei singure proprietati

---

- **Utilizator-Rezervare**: one-to-many

    Un utilizator poate sa aiba niciuna sau mai multe rezervari

    O rezervare este efectuata de un singur utilizator 

---
- **Proprietate-Disponibilitate**: one-to-many

    O proprietate poate sa aiba niciuna sau mai multe inregistrari de disponibilitate

    O inregistrare de disponibilitate trebuie sa fie asociata obligatoriu unei singure proprietati
---
- **Utilizator-Proprietate(Wishlist)**: many-to-many

    Un utilizator poate sa aiba in wishlist niciuna sau mai multe proprietati salvate

    O proprietate poate sa apara in wishlist-ul niciunuia sau mai multor utilizatori

    Aceasta relatie este implementata prin entitatea de asociere **Wishlist**

---

## 5.Descrierea atributelor, incluzand tipul de date si eventualele constrangeri, valori implicite, valori posibile ale atributelor

### Utilizator:

|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|utilizator_id|NUMBER(30)|PK|1|SEQUENCE(se incrementeaza cu 1 la fiecare adaugare de utilizator)
|prenume|VARCHAR(50)| |Jane| NOT NULL
|nume|VARCHAR(50)| |Doe| NOT NULL
|email|VARCHAR(50)| |janedoe@gmail.com| NOT NULL
|telefon|VARCHAR(20)| +40 O712348728| |NOT NULL
|parola_hash|VARCHAR(225)| | Password!@.|NOT NULL
|data_nasterii|DATE| |10.12.1999|NOT NULL
|poza_profil|VARCHAR(225)| | img.jpg|NOT NULL
|data_creare|TIMESTAMP| | 12.12.2015


## Proprietate:
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|proprietate_id|NUMBER(30)|PK|1/2/3|SEQUENCE(se incrementeaza cu 1)
|gazda_id|NUMBER(30)|FK|1/2/3| gazda_id = utilizator_id
|nume_proprietate|VARCHAR(225)| |Penthouse London|
|descriere|TEXT/CLOB| |
|tip_proprietate|VARCHAR(100)| | penthouse/apartment/house/mansion| NOT NULL 
|nr_maxim_persoane|NUMBER(50)| | NOT NULL(trebuie sa fie >=1 si <=30)
|nr_dormitoare|NUMBER(50)| |NOT NULL(trebuie sa fie >=1 si <=30)
|nr_bai|NUMBER(50)| |NOT NULL(trebuie sa fie >=1 si <=30)
|nr_paturi|NUMBER(100)| |NOT NULL(trebuie sa fie >=1 si <=30)
|pret_noapte|DECIMAL(10,2)| | NOT NULL(trebuie sa fie >0)
|data_creare|DATETIME/TIMESTAMP| | DEFAULT CURRENT_TIMESTAMP

## Rezervare:
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|rezervare_id|NUMBER(30)|PK| |
|proprietate_id|NUMBER(30)|FK| |
|client_id|NUMBER(30)|FK| |
|data_checkin|DATE| |
|data_checkout|DATE| |
|nr_persoane|NUMBER(50)| |
|pret| DECIMAL(10,2)| |


## Plata:
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|plata_id|NUMBER(30)|PK| |
|rezervare_id|NUMBER(30)|FK| |
|suma|DECIMAL(10,2)| |
|data_plata|DATETIME| |
|status_plata| VARCHAR(50)| |Confirmata\In asteptare\Refuzata
|metoda_plata| VARCHAR(50)| |Card\PayPal\Klarna

## Recenzie:
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|recenzie_id|NUMBER(30)|PK| |
|rezervare_id|NUMBER(30)|FK| |
|comentariu|TEXT/CLOB| |
|rating|INT| |
|data_recenzie|DATETIME| |


## Facilitate:
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|facilitate_id|NUMBER(30)|PK| |
|nume_facilitate|VARCHAR(255)| |Wi-fi


## Imagini_Proprietate
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|imagine_id|NUMBER(30)|PK| |
|proprietate_id|NUMBER(30)|FK|
|url_imagine|VARCHAR(255)| |http://...
|este_principala|BOOLEAN| |DA\NU
|data_upload|DATETIME|


## Disponibilitate
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|disponibilitate_id|NUMBER(30)|PK|
|proprietate_id|NUMBER(30)|FK|
|data_disponibila|DATE|
|status_disponibilitate|VARCHAR(50)| |Disponibil\Indisponibil |
|pret_special|DECIMAL(10,2)| 

## 6.Realizarea diagramei entitate-relatie corespunzatoare descrierii de la punctele 3-5

![ERD](images/diagram_erd3.svg)


## 7.Realizarea diagramei conceptuale corespunzatoare diagramei entitate-relatie proiectate la punctul 6.

![Conceptual Diagram](images/conceptual_diagram.svg)

## 8.Enumerarea schemelor relationale corespunzatoare diagramei conceptuale proiectate la punctul 7.

- **UTILIZATOR**(utilizator_id **PK**)
- **ROL**(rol_id **PK**)
- **UTILIZATOR_ROL**(utilizator_id **PK, FK**, rol_id **PK, FK**)
- **PROPRIETATE**(proprietate_id **PK**, gazda_id **FK**)
- **FACILITATE**(facilitate_id **PK**)
- **PROPRIETATE_FACILITATE**(proprietate_id **PK,FK**, facilitate_id **PK, FK**)
- **DISPONIBILITATE**(disponibilitate_id **PK**)
- **IMAGINI_PROPRIETATE**(imagine_id **PK**, proprietate_id **FK**)
- **REZERVARE**(rezervare_id **PK**, proprietate_id **FK**, client_id **FK**)
- **PLATA**(plata_id **PK**, rezervare_id **FK**)
- **RECENZIE**(recenzie_id **PK**, rezervare_id **FK**)
- **WISHLIST**(utilizator_id **PK, FK**, proprietate_id **PK, FK**)


## 9. Realizarea normalizarii pana la forma normala 3(FN1-FN3).

## **Non-FN1->FN1**

**PROPRIETATE**(proprietate_id, gazda_id, nume_proprietate, descriere, tip_proprietate, nr_maxim_persoane, nr_dormitoare, nr_bai, nr_paturi, pret_noapte, data_creare, facilitati)

***facilitati*** -> este un atribut multiplu(ex:"wifi, piscina, parcare") --> **nu este FN1**

### Aducere in FN1:



**PROPRIETATE**(proprietate_id, gazda_id,nume_proprietate, descriere, tip_proprietate, nr_maxim_persoane, nr_dormitoare, nr_bai, nr_paturi, pret_noapte, data_creare)

**FACILITATE**(facilitate_id, nume_facilitate)
**PROPRIETATE_FACILITATE**(proprietate_id, facilitate_id)

---

## **Non-FN2->FN2**


**REZERVARE-PERSOANA**(rezervare_id, proprietate_id,  client_id, nume_client, prenume_client,email_client, telefon_client,  data_checkin, data_checkout, nr_persoane, pret)

F={
*rezervare_id* ->( proprietate_id, client_id, data_checkin, data_checkout, nr_persoane, pret),

*client_id* -> (nume_client, prenume_client, email_client, telefon_client)
}

***nume, prenume, email, telefon*** depind doar de client_id -> dependenta partiala -> **nu este FN2**


### Aducere in FN2

**UTILIZATOR**(utilizator_id, prenume, nume, email, telefon, parola_hash, data_nasterii, poza_profil, data_creare)

**REZERVARE**(rezervare_id, proprietate_id, client_id, data_checkin, data_checkout, nr_persoane, pret)


## Non-FN3->FN3


**PLATA**(plata_id, rezervare_id, suma, data_plata, status_plata, metoda_plata, email_client, nume_client, prenume_client)

plata_id -> rezervare_id -> client_id(*email_client, nume_client, prenume_client*)

*email_client, nume_client, prenume_client* descriu **client**, nu **plata** -> **dependenta tranzitiva** -> **Non-FN3**

### Aducere in FN3:

**UTILIZATOR**(utiliazator_id, prenume, nume, email, telefon, parola_hash, data_nasterii, poza_profil, data_creare)

**REZERVARE**(rezervare_id, proprietate_id, client_id, data_checkin, data_checkout, nr_persoane, pret)

**PLATA**(plata_id, rezervare_id, suma, data_plata, status_plata, metoda_plata)

---

## 10.Crearea unei secvente ce va fi utilizata in inserarea inregistrarilor in tabele(ex. 11)
```sql
CREATE SEQUENCE seq_utilizator START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_rol START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_proprietate START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_facilitate START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_imagine START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_disponibilitate START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_rezervare START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_plata START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE seq_recenzie START WITH 1 INCREMENT BY 1;
```

## 11.Crearea tabelelor in SQL si inserarea de date coerente in fiecare dintre acestea 

[Crearea tabelelor .txt](creareTabele.txt)

[Inserare date .txt](inserareDate.txt)

[Creare tabele + inserare date .sql](tables.sql)

### Oracle - screenshots
[Creare Sequence](screenhots/screenshot1.png)

[Creare tabel Utilizator](screenhots/screenshot4.png)

[Creare tabel Proprietate](screenhots/screenshot5.png)

[Creare tabel Proprietate, Proprietate_Facilitate](screenhots/screenshot6.png)

[Creare tabel Disponibilitate,Rezervare](screenhots/screenshot7.png)

[Creare tabel Recenzie/ Wishlist](screenhots/screenshot8.png)

[Inserare date Utilizator](screenhots/screenshot9.png)


[Inserare date Utilizator_Rol](screenhots/screenshot10.png)


[Inserare date Proprietate](screenhots/screenshot11.png)


[Inserare date Faciliate](screenhots/screenshot12.png)


[Inserare date Proprietate_Faciliate](screenhots/screenshot13.png)



[Inserare date Imagini_Proprietate](screenhots/screenshot14.png)


[Inserare date Disponibilitate](screenhots/screenshot15.png)


[Inserare date Rezervare](screenhots/screenshot16.png)


[Inserare date Plata](screenhots/screenshot17.png)


[Inserare date Recenzie](screenhots/screenshot18.png)


[Inserare date Wishlist](screenhots/screenshot19.png)


## 12.Formulati in limbaj natural si implementati 5 cereri SQL complexe

[SQL file](12.sql)

### Cerere 1

```sql
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

```
[Screenshot rulare](screenshots/screenshot20.png)


### Cerere 2
```sql
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

```

[Screenshot rulare](screenshots/screenshot22.png)


### Cerere 3

```sql

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


```

[Screenshot rulare](screenshots/screenhot24.png)


### Cerere 4

```sql
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

```
[Screenshot rulare](screenshots/screenshot25.png)


### Cerere 5

```sql
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

```

[Screenshot rulare](screenshots/screenshot30.png)


## 13. Implementarea a 3 operații de actualizare si de suprimare a datelor utilizand subcereri

[SQL file](13.sql)

### 1.
```sql
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

```

[Screenshot rulare](screenshots/screenshot27.png)

### 2.

```sql
-- Sterge din wishlist proprietatile care nu au nicio rezervare

delete from wishlist
 where proprietate_id not in (
   select distinct proprietate_id
     from rezervare
);

```
[Screenshot rulare](screenshots/screenshot28.png)

### 3.
```sql
--Sterge recenziile cu rating mai mic decat media ratingurilor tuturor recenziilor

delete from recenzie
 where rating < (
   select avg(rating)
     from recenzie
);
```
[Screenshot rulare](screenshots/screenshot29.png)


## 14.Crearea unei vizualizari complexe. Dati un exemplu de operatie LMD permisa pe vizualizarea respectiva si un exemplu de operatie LMD nepermisa.


### Vizualizare complexa

```sql
create or replace view rezervari_complete as
select r.rezervare_id,
       p.nume_proprietate,
       r.data_checkin,
       r.data_checkout,
       u.nume
       || " "
       || u.prenume as client_fullname,
       pl.status_plata,
       pl.suma
  from rezervare r
  join proprietate p
on p.proprietate_id = r.proprietate_id
  join utilizator u
on r.client_id = u.utilizator_id
  join plata pl
on pl.rezervare_id = r.rezervare_id;
```



 Am creat un VIEW numit **rezervari_complete**, unde am unit mai multe tabele `rezervare`, `utilizator`, `plata` si `proprietate`

 ### Operatie LMD permisa

 Deoarece `rezervare_id` (primary key a tabelului `rezervare`) este prezenta in **VIEW**, tabelul `rezervare` este ***key-preserved***, deci putem face UPDATE pe coloanele sale: 

 ```sql
UPDATE rezervari_complete
SET data_checkout='2026-06-01'
WHERE rezervare_id = 1;
 ```

 ### Operatie LMD nepermisa

 Tabelul `plata` **nu este key-preserved**, deoarece plata_id nu apare in VIEW. Prin urmare, nu putem face UPDATE pe colaonele tabelului `plata`

 ```sql
 UPDATE rezervari_complete
 SET status_plata='in asteptare'
 WHERE rezervare_id=1;
 ```


 ## 15. Formulati in limbaj natural si implementati in SQL: o cerere ce utilizeaza operatia outer-join pe minimum 4 tabele, o cerere ce utilizeaza operatia divison si o cerere care implementeaza analiza top-n

 ### **OUTER-JOIN**
 Afisati pentru toti utilizatorii, rezervarile lor, proprietatile pe care le-au rezervat si statusul platii

 ```sql
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
 ```

 ### **Divison operation** (NOT EXISTS)

Afiseaza utilizatorii care au folosit toate metodele de plata (Card/PayPal/Klarna)

```sql
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
```

### **Analiza top-n**
Afiseaza primele 4 proprietati cu cele mai multe rezervari

```sql
select * from (
    select p.proprietate_id, p.nume_proprietate, p.tip_proprietate, count(r.rezervare_id) as nr_rezervari
    from proprietate p 
    left join rezervare r on r.proprietate_id=p.proprietate_id
    group by p.proprietate_id, p.nume_proprietate, p.tip_proprietate, p.pret_noapte
    order by nr_rezervari desc
)
where rownum<=4;
```

## 16.Prezentarea planului de executie a unei cereri complexe, optimizare/compare plan alternativ folosind hint-uri si obiecte specifice optimizarii cererilor(spre exemplu indecsi)

### Cerere complexa neoptimizata
Sa se afiseze proprietatile cu cel mai mare venit, grupandu-le dupa categoria locuintei 

```sql
explain plan for
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
 select * from table(dbms_xplan.display);
```




```sql
"PLAN_TABLE_OUTPUT"
"Plan hash value: 74289743"
" "
"----------------------------------------------------------------------------------------------------"
"| Id  | Operation                            | Name        | Rows  | Bytes | Cost (%CPU)| Time     |"
"----------------------------------------------------------------------------------------------------"
"|   0 | SELECT STATEMENT                     |             |     3 |   249 |    15  (20)| 00:00:01 |"
"|   1 |  SORT ORDER BY                       |             |     3 |   249 |    15  (20)| 00:00:01 |"
"|   2 |   WINDOW SORT                        |             |     3 |   249 |    15  (20)| 00:00:01 |"
"|*  3 |    FILTER                            |             |       |       |            |          |"
"|   4 |     HASH GROUP BY                    |             |     3 |   249 |    15  (20)| 00:00:01 |"
"|*  5 |      HASH JOIN OUTER                 |             |     3 |   249 |    10   (0)| 00:00:01 |"
"|*  6 |       HASH JOIN OUTER                |             |     3 |   222 |     8   (0)| 00:00:01 |"
"|*  7 |        HASH JOIN OUTER               |             |     3 |   213 |     6   (0)| 00:00:01 |"
"|   8 |         NESTED LOOPS OUTER           |             |     2 |   130 |     4   (0)| 00:00:01 |"
"|   9 |          NESTED LOOPS                |             |     1 |    59 |     3   (0)| 00:00:01 |"
"|* 10 |           TABLE ACCESS FULL          | PROPRIETATE |     1 |    41 |     2   (0)| 00:00:01 |"
"|  11 |            SORT AGGREGATE            |             |     1 |     5 |            |          |"
"|  12 |             TABLE ACCESS FULL        | PROPRIETATE |    27 |   135 |     2   (0)| 00:00:01 |"
"|  13 |           TABLE ACCESS BY INDEX ROWID| UTILIZATOR  |     1 |    18 |     1   (0)| 00:00:01 |"
"|* 14 |            INDEX UNIQUE SCAN         | SYS_C009504 |     1 |       |     0   (0)| 00:00:01 |"
"|* 15 |          INDEX RANGE SCAN            | SYS_C009529 |     1 |     6 |     1   (0)| 00:00:01 |"
"|  16 |         TABLE ACCESS FULL            | REZERVARE   |    26 |   156 |     2   (0)| 00:00:01 |"
"|  17 |        TABLE ACCESS FULL             | RECENZIE    |    18 |    54 |     2   (0)| 00:00:01 |"
"|  18 |       TABLE ACCESS FULL              | PLATA       |    30 |   270 |     2   (0)| 00:00:01 |"
"----------------------------------------------------------------------------------------------------"
" "
"Predicate Information (identified by operation id):"
"---------------------------------------------------"
" "
"   3 - filter(SUM(""PL"".""SUMA"")>0)"
"   5 - access(""PL"".""REZERVARE_ID""(+)=""REZ"".""REZERVARE_ID"")"
"   6 - access(""REC"".""REZERVARE_ID""(+)=""REZ"".""REZERVARE_ID"")"
"   7 - access(""REZ"".""PROPRIETATE_ID""(+)=""P"".""PROPRIETATE_ID"")"
"  10 - filter(""P"".""PRET_NOAPTE""> (SELECT SUM(""PRET_NOAPTE"")/COUNT(""PRET_NOAPTE"") FROM "
"              ""PROPRIETATE"" ""PROPRIETATE""))"
"  14 - access(""U"".""UTILIZATOR_ID""=""P"".""GAZDA_ID"")"
"  15 - access(""PF"".""PROPRIETATE_ID""(+)=""P"".""PROPRIETATE_ID"")"
" "
"Note"
"-----"
"   - this is an adaptive plan"

```
Observam ca acest query selection nu este atat de optimizat, insa sunt cateva imbunatatiri pe care Oracle le-a facut automat.
- tabelul `PROPRIETATE` este scanat de 2 ori, o data la **step 10** pentru filtrarea WHERE pret_noapte > AVG din quey-ul principal si o data la **step 12** pentru subquery unde vreau sa calculez AVG(pret_noapte)
- **step 16**: tabelul `REZERVARE` ete scanat integral, aici putem optimiza cu ajutorrul index-ului **idx_rez_prop**
- **step 18**: tabelul `PLATA` este scanat integral chuar daca noi am impus conditia `status_plata = 'confirmata'`

- **step 17**: tabelul RECENZIE este scanat scanat integral pentru a gasi recenziile asociate fiecarei rezervari, putem optimiza cu index-ul **idx_rec_rezervare**


### Hint-uri pentru optimizare:
- `/*+ INDEX(...)*/`
        
        Folosim indecsii pentru a elimina scanarea integrala a unui tabel. Cu ajutorul acestora, Oracle nu scaneaza tot tabelul, ci foloseste structura index-ului pentru a trece direct la randurile relevante
- `/*+ USE_NL(...)*/`

        NESTED LOOPS JOIN este mai eficient cand tabela exterioara are putine randuri, ceea ce este cazul nostru deoarece dupa filtrul WHERE pret_noapte > AVG raman doar o parte din proprietati

- `/*+ NO_MERGE(...)*/`

        Fara acest hint, Oracle a puteaa recalcula AVG(pret_noapte) pentru fiecaare rand din query-ul prncipal. Cu NO_MERGE, Oracle calculeaza media o singura data, retine rezulatul si il foloseste pentru toate comparatiile


### Cerere complexa optimizata

```sql
CREATE INDEX idx_prop_gazda 
    ON proprietate(gazda_id);

CREATE INDEX idx_prop_pret 
    ON proprietate(pret_noapte);

CREATE INDEX idx_rez_prop 
    ON rezervare(proprietate_id);

CREATE INDEX idx_plata_rez_status 
    ON plata(rezervare_id, status_plata);

CREATE INDEX idx_rec_rezervare 
    ON recenzie(rezervare_id);

CREATE INDEX idx_pf_prop 
    ON proprietate_facilitate(proprietate_id);
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
```

```sql
"PLAN_TABLE_OUTPUT"
"Plan hash value: 1713740388"
" "
"------------------------------------------------------------------------------------------------------------------"
"| Id  | Operation                                    | Name              | Rows  | Bytes | Cost (%CPU)| Time     |"
"------------------------------------------------------------------------------------------------------------------"
"|   0 | SELECT STATEMENT                             |                   |     3 |   249 |    10  (30)| 00:00:01 |"
"|   1 |  SORT ORDER BY                               |                   |     3 |   249 |    10  (30)| 00:00:01 |"
"|   2 |   WINDOW SORT                                |                   |     3 |   249 |    10  (30)| 00:00:01 |"
"|*  3 |    FILTER                                    |                   |       |       |            |          |"
"|   4 |     HASH GROUP BY                            |                   |     3 |   249 |    10  (30)| 00:00:01 |"
"|*  5 |      HASH JOIN OUTER                         |                   |     3 |   249 |     6   (0)| 00:00:01 |"
"|*  6 |       HASH JOIN OUTER                        |                   |     2 |   154 |     5   (0)| 00:00:01 |"
"|   7 |        NESTED LOOPS OUTER                    |                   |     2 |   136 |     3   (0)| 00:00:01 |"
"|   8 |         NESTED LOOPS OUTER                   |                   |     2 |   130 |     3   (0)| 00:00:01 |"
"|   9 |          NESTED LOOPS                        |                   |     1 |    59 |     2   (0)| 00:00:01 |"
"|  10 |           TABLE ACCESS BY INDEX ROWID BATCHED| PROPRIETATE       |     1 |    41 |     1   (0)| 00:00:01 |"
"|* 11 |            INDEX RANGE SCAN                  | IDX_PROP_PRET     |     1 |       |     1   (0)| 00:00:01 |"
"|  12 |             SORT AGGREGATE                   |                   |     1 |     5 |            |          |"
"|  13 |              INDEX FULL SCAN                 | IDX_PROP_PRET     |    27 |   135 |     1   (0)| 00:00:01 |"
"|  14 |           TABLE ACCESS BY INDEX ROWID        | UTILIZATOR        |     1 |    18 |     1   (0)| 00:00:01 |"
"|* 15 |            INDEX UNIQUE SCAN                 | SYS_C009504       |     1 |       |     0   (0)| 00:00:01 |"
"|  16 |          TABLE ACCESS BY INDEX ROWID BATCHED | REZERVARE         |     1 |     6 |     1   (0)| 00:00:01 |"
"|* 17 |           INDEX RANGE SCAN                   | IDX_REZ_PROP      |     1 |       |     0   (0)| 00:00:01 |"
"|* 18 |         INDEX RANGE SCAN                     | IDX_REC_REZERVARE |     1 |     3 |     0   (0)| 00:00:01 |"
"|  19 |        TABLE ACCESS FULL                     | PLATA             |    30 |   270 |     2   (0)| 00:00:01 |"
"|  20 |       INDEX FULL SCAN                        | SYS_C009529       |    30 |   180 |     1   (0)| 00:00:01 |"
"------------------------------------------------------------------------------------------------------------------"
" "
"Predicate Information (identified by operation id):"
"---------------------------------------------------"
" "
"   3 - filter(SUM(""PL"".""SUMA"")>0)"
"   5 - access(""PF"".""PROPRIETATE_ID""(+)=""P"".""PROPRIETATE_ID"")"
"   6 - access(""PL"".""REZERVARE_ID""(+)=""REZ"".""REZERVARE_ID"")"
"  11 - access(""P"".""PRET_NOAPTE""> (SELECT SUM(""PRET_NOAPTE"")/COUNT(""PRET_NOAPTE"") FROM ""PROPRIETATE"" "
"              ""PROPRIETATE""))"
"  15 - access(""U"".""UTILIZATOR_ID""=""P"".""GAZDA_ID"")"
"  17 - access(""REZ"".""PROPRIETATE_ID""(+)=""P"".""PROPRIETATE_ID"")"
"  18 - access(""REC"".""REZERVARE_ID""(+)=""REZ"".""REZERVARE_ID"")"
" "
"Note"
"-----"
"   - this is an adaptive plan"

```


**Observatie**: 
In urma crearii indecsilor si aplicarii hint-urilor, planul de executie s-a imbunatatit vizibil. Costul a scazut de la 15 la 10.
Tabelele `PROPRIETATE`, `REZERVARE`, `RECENZIE` nu mai sunt scanate integral. Singurul tabel care ramane cu `TABLE ACCESS FULL` este `PLATA`, Oracle ignora index-ul **idx_plata_rez_status**, probabil pentru setul mic de date, costul scanarii integrale este similar cu cel al folosirii index-ului.


## 17.Realizarea normalizarii BCNF, FN4, FN5. Aplicarea denormalizarii, justificand necesitatea acesteia

### 1.Forma Normala Boyce Codd (BCNF)

#### **Non-BCNF**

`propietate`(proprietate_id, gazda_id, nume_proprietate, tip_proprietate, pret_noapte, facilitate1, facilitate1_id, facilitate2, facilitate2_id, facilitate3, facilitate3_id ..)

#### Exemplu 1 de violare BCNF

proprietate_id -> facilitate1_id, facilitate2_id, facilitate3_id, ...
facilitate1_id -> facilitate1_id
facilitate2_id -> facilitate2_id ...

Aceasta structura voleaza **BCNF** `facilitate1_id` nu este **superkey** in `proprietate`, dar determina `facilitate1`. Orice determinant trebuie sa fie **superkey**

#### Exemplu 2 de violare BCNF

|proprietate_id|facilitate1_id|facilitate1|facilitate2_id|facilitate2|
|--------------|---------------|-----------|-------------|--------------|
|1|1|wifi|2|cosmetice|
|2|1|wifi|3|balcon|
|2|1|wifi|4|piscina|

- Update anomaly: daca vrem sa redenumim `wifi` in `Wi-fi`, trebuie updatata fiecare coloana
- Insert anomaly: nu putem adauga alta facilitate fara a o asocia cu o proprietate


#### Descompunere in BCNF

`facilitate(facilitate_id, nume_faciliatate)`

`proprietate(proprietate_id, nume_proprietate, tip_proprietate...)`

`proprietate_facilitate(proprietate_id, facilitate_id)`

Acum `facilitate_id `-> `nume_facilitate` deoarece `facilitate_id` este **primary key** a tabelei `facilitate`


### 2. A Patra Forma Normala(FN4)

#### Non-FN4

`proprietate_imagini_facilitate(proprietate_id, url_imagine, facilitate_id)`

|proprietate_id|url_imagine|facilitate_id|
|---------|--------|---------|
|1|img1.jpg|1(wifi)|
|1|imag1.jpg|2(piscina)|
|1|imag2.jpg||1(wifi)|
|1|imag2.jpg|2(piscina)|


proprietate_id -> url_imagine (independenta)
proprietate_id -> facilitate_id (independenta)


#### Exemplu de violare FN5

Tabela `proprietate_imagini_facilitate(proprietate_id, url_imagine, facilitate_id)`
violeaza **FN4** deoarece contine doua **dependente multivaloare independente**

#### Descompunere in FN4

`proprietate(proprietate_id, ..)`

`imagini_proprietate(imagine_id, url_imagine, propietate_id)`

`proprietate_facilitate(facilitate_id, proprietate_id)`

Prin aceasta descompunere:

**proprietate_id** -> **url_imagine** este izolata in tabela `imagini_proprietate`

**proprietate_id** -> **facilitate_id** este izolata in tabela `proprietate_facilitate`

### 3. **A Cincea Forma Normala(FN5)**

#### **Non-FN5**

`proprietate_facilitate_recenzie(proprietate_id, facilitate_id, recenzie_id)`

|proprietate_id|facilitate_id|recenzie_id|
|--------|---------|---------|
|1|1(wifi)|1|
|1|2(piscina)|2|
|2|1(wifi)|5|
|2|3(jacuzzi)|5|

#### Exemplu violare in FN5

Daca descompunem in 3 tabele tabela `proprietate_facilitate_recenzie(proprietate_id, facilitate_id, recenzie_id)` si le reunim(tabela1 x tabela2 x tabela3)

**tabela 1**:(proprietate_id, facilitate_id) 

**tabela 2**:(proprietate_id, recenzie_id) 

**tabela 3**:(facilitate_id, recenzie_id)


|proprietate_id|facilitate_id|recenzie_id|
|--------|---------|---------|
|1|1(wifi)|1|
|1|2(piscina)|2|
|2|1(wifi)|5|
|2|2(piscina)|5|
|1|1(wifi)|5|
|1|2(piscina)|5|

Au aparut tupluri care initial nu existau(ex: ultimele 2 randuri)

#### Descompunere in FN5

`proprietate_facilitate(proprietate_id, facilitate_id)`

`rezervare(rezervare_id, proprietate_id)`

`recenzie(recenzie_id, proprietate_id)`

Acum fiecare tabel stocheaza **o singura realatie binara**, asigurandu-ne ca la reuniunea lor(prin **JOIN**) nu vor mai aparea tupluri inexistente initial




## 18.Exemplificarea isolation levels prin exemple de tranzactii care se executa in paralel de concurenta, evidentiind efectele diferitelor niveluri de izolare asupra concurentei si integritatii datelor

Cautam toate proprietatile care sunt disponibile

```sql
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
```
```sql
"PROPRIETATE_ID"	"NUME_PROPRIETATE"	"DISPONIBILITATE_ID"	"DATA_DISPONIBILITATE_START"	"DATA_DISPONIBILITATE_END"	"STATUS_DISPONIBILITATE"
1	"Penthouse New York"	1	12/05/26	27/06/26	"disponibil"
3	"Apartament Amsterdam"	3	11/01/26	04/07/26	"disponibil"
5	"Penthouse Madrid"	5	12/09/26	28/12/26	"disponibil"
6	"Holiday House Greece-Mykonos"	6	12/05/26	27/06/26	"disponibil"
7	"Holiday house - Italy"	7	01/05/26	31/05/26	"disponibil"
8	"Apartament Berlin"	8	01/06/26	15/06/26	"disponibil"
9	"Penthouse Londra"	9	20/05/26	20/06/26	"disponibil"
11	"Apartament Roma"	11	15/05/26	01/06/26	"disponibil"
12	"Holiday house - Turkey"	12	10/06/26	10/07/26	"disponibil"
13	"Penthouse Miami"	13	01/08/26	31/08/26	"disponibil"
14	"Apartament Budapest"	14	25/05/26	25/06/26	"disponibil"
16	"Apartament Bucuresti"	16	15/07/26	15/08/26	"disponibil"
17	"Penthouse Milano"	17	10/05/26	30/05/26	"disponibil"
18	"Apartament Oxford"	18	20/06/26	20/07/26	"disponibil"
19	"House Londra"	19	01/09/26	30/09/26	"disponibil"
20	"Penthouse Japonia-Tokyo"	20	01/05/26	20/05/26	"disponibil"
21	"Apartament Japonia-Osaka"	21	01/10/26	31/10/26	"disponibil"
22	"Mansion Abu Dhabi"	22	05/06/26	05/07/26	"disponibil"
23	"Apartament Edinburgh - Scotia"	23	01/07/26	01/08/26	"disponibil"
24	"Penthouse Santa Monica"	24	28/05/26	28/06/26	"disponibil"
25	"Apartament Boston"	25	10/08/26	10/09/26	"disponibil"
26	"Holiday House - Amalfi Coast"	26	15/06/26	15/07/26	"disponibil"
27	"Apartament Dubai"	27	15/09/26	15/10/26	"disponibil"

```


### Dirty Read(READ UNCOMITTED)

Scenariu: Paul(utilizator_id=4) incepe sa rezerve Penthouse New York, iar Elena(utilizator_id=6) cauta proprietati disponibile in acelasi moment

```sql
--DIRTY READ
-- Oracle foloseste implicit READ COMMITTED
   set transaction isolation level read committed;

--Sesiunea1(T1) Paul incepe rezervarea

update disponibilitate
   set
   status_disponibilitate = 'indisponibil'
 where proprietate_id = 4;

--Paul a marcat proprietatea ca indisponibila, dar nu a facut inca COMMIT




--Sesiunea(T2) Elena cauta proprietati disponibile


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


 --Sesiunea1(T1)  Paul se razgandeste 
rollback;

 --Proprietates devine 'disponibil'
 --Elena a citit date false


 --Sesiunea(T2)  Elena cauta din nou

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
```

### Non-Repeatable Read -READ COMMIT

Scenariu: Elena cauta proprietati disponibile pentru a face o rezervare. In timp ce Elena analizeaza rezultatele, Paul  rezerva Penthouse New York si face COMMIT. Cand Elena reincearca cautarea pentru a verifica din nou disponibilitatea, Penthouse New York nu mai apare in rezultate (desi la prima cautare era disponibil.
Elena a vazut date diferite pentru acelasi query in cadrul aceleiasi sesiuni) 


```sql

-- Sesiunea 1(T1)  Paul

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Paul este activ, pregatit sa faca o rezervare


-- Sesiunea 2(T2) Elena citeste prima oara


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


-- Sesiunea 1(T1)  Paul face rezervarea


UPDATE disponibilitate
SET status_disponibilitate = 'indisponibil'
WHERE proprietate_id = 1;

COMMIT;
-- Paul a confirmat


-- Sesiunea 2(T2)  Elena citeste a doua oara

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
-- Penthouse New York nu mai apare disponibil
```



### Phantom Read - Repeatable Read

**Scenariu**: Elena numara proprietatile disponibile. Intre timp Paul adauga o disponibilitate noua si face COMMIT. Cand Elena ruleaza acealasi query din nou, apare un rand nou

```sql

-- Sesiunea 1(T1) / Paul

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Paul este activ, pregatit sa adauge o disponibilitate

-- Sesiunea 2(T2)  Elena face prima citire

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


-- Sesiunea 1(T1) Paul adauga o noua disponibilitate

INSERT INTO disponibilitate VALUES (
    seq_disponibilitate.nextval,
    2,
    to_date('2026-08-01','yyyy-mm-dd'),
    to_date('2026-08-31','yyyy-mm-dd'),
    'disponibil',
    500.00
);

COMMIT;
-- Paul a adaugat o disponibilitate noua

-- Sesiunea 2(T2)  Elena face a doua citire


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
-- A aparut un nou rand in proprietatile disponibile
```


### Serializable - Prevenire totala

Scenariu: Elena face o citire a proprietatilor disponibile folosind **SERIALIZABLE**. In acelasi timp, Paul incearca sa modifice datele si face COMMIT. Elena ruleaza acelasi query din nou si vede exact aceleasi date ca si la prima citire

```sql

-- Sesiunea 2(T2) / Elena


SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Prima citire
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

-- Sesiunea 1(T1)  Paul face modificari

-- Paul incearca sa modifice disponibilitatea
UPDATE disponibilitate
SET status_disponibilitate = 'indisponibil'
WHERE proprietate_id = 1;

COMMIT;

-- Paul insereaza o disponibilitate noua
INSERT INTO disponibilitate VALUES (
    seq_disponibilitate.nextval,
    2,
    to_date('2026-09-01','yyyy-mm-dd'),
    to_date('2026-09-30','yyyy-mm-dd'),
    'disponibil',
    600.00
);

COMMIT;

-- Sesiunea 2(T2)  Elena face cea de-a doua citire


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
--Vede exact aceleassi date ca prima oara
-- Penthouse New York inca apare
-- Randul nou inserat de Paul nu apare


COMMIT;
```

## 19. Justificarea necesitatii/utilitatii migrarii la o baza de date de tip NoSql. Identificarea scenariilor in care utilizarea unei baze de date NoSQL este mai avantajoasă decat a unei baze de date relationale. 

O baza de date tip `NoSql` ne permite mai multa flexibilitate, renuntand la structura rigida a tabelelor relationale.

### 1.Schema rigida
In Oracle, daca vrem sa adaugam la unele proprietati un nou camp/coloana trebuie sa modificam toata tabela

```sql
ALTER TABLE proprietate ADD reguli_proprietate CLOB;
--am adaugat un camp numit reguli_proprietate
```

Aceasta afecteaza toate proprietatile, chiar daca spre exemplu doar 5 au reguli pentru casa

```javascript
{numeProprietate:"", tipProprietate:"", reguli_casa:"fara animale de companie"}
{numeProprietate:"", tipProprietate:""}
//a doua proprietate nu are NULL, cum s-ar fi intamplat in Oracle
```
### JOIN-uri costisitoare

In MongoDB toate datele sunt intr-un **singur document**, nu avem nevoie de niciun **JOIN**


## Scenarii unde baza de date tip NoSql este mai avantajoasa

#### 1. Un utilizator filtreaza dupa pret, disponibilitate, facilitati, rating, tip

```sql
SELECT p.*, AVG(rec.rating)
FROM proprietate p
JOIN disponibilitate d on d.proprietate_id = p.proprietate_id
JOIN propriieatate_facilitate pf on pf.proprietate_id = p.proprietate_id
JOIN facilitate f on f.faciliate_id=pf.facilitate_id
JOIN rezervare rez on rez.proprietate_id=p.proprietate_id
JOIN recenzie rec on rec.rezervare_id=rez.rezervare_id
WHERE f.nume_facilitate in ('wifi', 'piscina') AND d.status_disponibilitate='disponibil'
GROUP BY p.proprietate_id;
```

```javascript
db.proprietati.find({
    "disponibilitate.status": "disponibil",
    "facilitati": { $all: ["wifi", "piscina"] },
    "pretNoapte": { $lte: 1000 }
})
```

Observam ca nu am folosit niciun JOIN


### 2. Profilul utilizatorului

Un utilizator are roluri diferite, rezervari etc.
In MongoDB toate aceste date se ppt afla intr-un singur document

```javascript
//exemplu de utilizator
{
        utilizatorId: "UTL001",
        prenume: "Maria",
        nume: "Pop",
        email: "mariapop@gmail.com",
        telefon: "+40745745678",
        parolaHash: "parola1!.*",
        dataNasterii: new Date("2000-12-04"),
        pozaProfil: "maria.jpg",
        dataCreare: new Date("2026-01-01"),
        roluri: ["gazda", "oaspete"]
    }

//exemplu de proprietate
    {
        proprietateId: "PROP002",
        gazdaId: "UTL002",
        numeProprietate: "Apartament Paris",
        descriere: "Apartament situat central langa Eiffel Tower",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 450.70,
        dataCreare: new Date("2020-03-08"),
        facilitati: ["wifi", "loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay3.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-04-01"),
            dataEnd: new Date("2026-06-25"),
            status: "indisponibil",
            pretSpecial: 1000.90
        }],
        rezervari: [
            {
                rezervareId: "REZ003",
                clientId: "UTL008",
                dataCheckin: new Date("2026-06-10"),
                dataCheckout: new Date("2026-06-17"),
                nrPersoane: 2,
                pret: 3154.90,
                plata: {
                    suma: 3154.90,
                    dataPlata: new Date("2026-06-05"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Apartament curat si bine pozitionat. Gazda foarte amabila si comunicativa.",
                    rating: 4,
                    dataRecenzie: new Date("2026-06-19")
                }
            }
        ],
        wishlist: ["UTL006"]
    }

```


### a) Structura bazei de date de tip NoSql

Cum arata un document MongoDB vs Oracle:
- Oracle: date separate in 6 tabele

```sql
proprietate(1, 1, 'Penthouse NY', 'penthouse', 500.99)
proprietate_facilitate(1, 1)  -- wifi
proprietate_facilitate(1, 2)  -- piscina
imagini_proprietate(1, 1, 'stay1.jpg', 1)
disponibilitate(1, 1, '2026-05-12', '2026-06-27', 'disponibil')
rezervare(1, 1, 4, '2026-05-15', '2026-05-20', 2504.95)
```
- MongoDB: toate datele intr-un singur document
```javascript
{
  "proprietateId": "PROP001",
  "numeProprietate": "Penthouse New York",
  "tipProprietate": "penthouse",
  "pretNoapte": 500.99,
  "facilitati": ["wifi", "piscina", "spa"],
  "imagini": [
    { "url": "stay1.jpg", "estePrincipala": true }
  ],
  "disponibilitate": [
    { "dataStart": "2026-05-12", "status": "disponibil" }
  ],
  "rezervari": [
    {
      "clientId": "UTL004",
      "pret": 2504.95,
      "recenzie": { "rating": 5, "comentariu": "Superb!" }
    }
  ]
}
```

### b) Prezentarea comenzilor pentru crearea bazei de date (spre exemplu a colectiilor intr-o baza de date de tip document) 


```sql

use('citystaymongodb');

// Crearea explicita a colectiilor cu validare
// Echivalent Oracle: CREATE TABLE utilizator (...)
db.createCollection("utilizatori", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["utilizatorId", "nume", "prenume", "email"],
            properties: {
                utilizatorId: {
                    bsonType: "string",
                    description: "ID unic utilizator — obligatoriu"
                },
                nume: {
                    bsonType: "string",
                    description: "Numele utilizatorului — obligatoriu"
                },
                prenume: {
                    bsonType: "string",
                    description: "Prenumele utilizatorului — obligatoriu"
                },
                email: {
                    bsonType: "string",
                    description: "Email utilizator — obligatoriu"
                },
                roluri: {
                    bsonType: "array",
                    description: "Rolurile utilizatorului"
                }
            }
        }
    }
});

db.createCollection("proprietati", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["proprietateId", "numeProprietate", "tipProprietate", "pretNoapte"],
            properties: {
                proprietateId: { bsonType: "string" },
                numeProprietate: { bsonType: "string" },
                tipProprietate: {
                    bsonType: "string",
                    enum: ["penthouse", "apartment", "house", "mansion"],
                    description: "Tipul proprietatii"
                },
                pretNoapte: {
                    bsonType: "double",
                    minimum: 0,
                    description: "trebuie sa fie > 0"
                }
            }
        }
    }
});


```



### c) Prezentarea comenzilor pentru inserarea, modificarea si stergerea documentelor sau inregistrarilor intr-o bază de date NoSQL

#### **MongoDB files**
[insert users](1_insertUsers.mongodb.js)

[insert properties](2_insertProperties.mongodb.js)

[update/delete](3_update.mongodb.js)



- **INSERT**

```javascript
//.insertMany() este pentru a adauga mai multe documente(utilizatori)
db.utilizatori.insertMany([
    {
        utilizatorId: "UTL001",
        prenume: "Maria",
        nume: "Pop",
        email: "mariapop@gmail.com",
        telefon: "+40745745678",
        parolaHash: "parola1!.*",
        dataNasterii: new Date("2000-12-04"),
        pozaProfil: "maria.jpg",
        dataCreare: new Date("2026-01-01"),
        roluri: ["gazda", "oaspete"]
    },
    {
        utilizatorId: "UTL002",
        prenume: "Davis",
        nume: "Benjamin",
        email: "davisbenji@gmail.com",
        telefon: "+4065456783",
        parolaHash: "davidthewinner000",
        dataNasterii: new Date("1998-05-20"),
        pozaProfil: "davidbenji.jpg",
        dataCreare: new Date("2026-01-01"),
        roluri: ["gazda"]
    }
]);

//.insertOne() adauga un singur document(in cazul nostru utilizator)
db.utilizatori.insertOne([
    {
        utilizatorId: "UTL001",
        prenume: "Maria",
        nume: "Pop",
        email: "mariapop@gmail.com",
        telefon: "+40745745678",
        parolaHash: "parola1!.*",
        dataNasterii: new Date("2000-12-04"),
        pozaProfil: "maria.jpg",
        dataCreare: new Date("2026-01-01"),
        roluri: ["gazda", "oaspete"]
    }]);
```
- **UPDATE**

```javascript
//updateMany() modifica mai multe documente(coloane iin Oracle)
db.proprietati.updateMany(
    { tipProprietate: "penthouse" },
    { $mul: { pretNoapte: 1.10 } }
);

//updateOne() pentru a modifica un singur document(coloana in Oracle)
db.proprietati.updateOne(
    { proprietateId: "PROP028" },
    { $set: { pretNoapte: 400.00 } }
);



```

- **DELETE**

```javascript
//deleteOne() pentru a sterge un singur document 
db.utilizatori.deleteOne(
    { utilizatorId: "UTL026" }
);

//deleteMany() sterge toate documentele (proprietatile) care au aaceste atribuite, au tipul proprietatii 'apartament' si pretul <200
db.proprietati.deleteMany(
    { 
        tipProprietate: "apartment",
        pretNoapte: { $lt: 200 }
    }
);
```

### d) Exemplificarea comenzilor pentru interogarea datelor, incluzand operatiuni de filtrare si sortare

[comenzi interogare date](4_lookup.mongodb.js)


```javascript

use('citystaymongodb');

db.proprietati.find();
//este echivalent cu SELECT * FROM PROPRIEATE;

db.proprietati.find({
    tipProprietate: "penthouse"
});
//este echivalent cu SELECT * FROM PROPRIETATE 
//WHERE tip_proprietate='penthouse';


db.proprietati.find({
    pretNoapte: {
        $gt:200 // gt = greater than
    }
});
//este echivalent cu SELECT * FROM PROPRIETATE 
//WHERE pret_noapte>500;


db.proprietate.find().sort({
    pretNoapte:-1
});

//ordoneaaza descrescator proprieatile dupa pret
//SELECT * FROM PROPRIETATE
//ORDER BY pret_noapte DESC;


db.proprietati.find({
    facilitati:{
        $in: ["wifi", "piscina"]
    }
});
//este echivalent cu
//SELECT * FROM PROPRIETATE P
//JOIN PROPRIETATE_FACILITATAE PF ON PF.PROPRIETATE_ID = P.PROPRIETATE_ID
//JOIN FACILITATE F ON F.FACILITATE_ID = PF.FACILITATE_ID
//WHERE F.NUME_FACILITATE in ('wifi', 'piscina');


db.proprietati.find({
    tipProprietate:"penthouse",
    pretNoapte:{
        $gt:600
    }
});
//este echivalent cu 
//SELECT * FROM PROPRIETATE
//WHERE tip_proprietate='penthouse' AND pret_noapte >600;


db.proprietati.find({
    $or:[
        {tipProprietate:"mansion"},
        {pretNoapte:{ $lt: 700}}
    ]
});
//este echivalent cu 
//SELECT * FROM PROPRIETATE
//WHERE tip_proprietate = 'mansion' OR pret_noapte < 700;


db.proprietati.find().sort({
    tipProprietate:1,
    pretNoapte:-1
});
//estee echivalent cu
//SELECT * FROM PROPRIETATE
//ORDER BY tip_proprietate ASC, pret_noapte DESC;
```


## 20. SQL Injection

**SQL Injection**(SQLi) este una dintre cele mai frecvente vulnerabilitati in aplicatiile care lucreaza cu baze de date. Apare atunci cand datele introduse de utilizator(cookie, formular etc.) sunt concatenate direct intr-o interogare SQL, fara a fi tratate ca niste simple valori. Astfel, un atacator poate injecta cod SQL propriu in baza de date.

### Cum functioneaza:

Presupunem un login implementat in JavaScript

```javascript

//cod vulnerabil
const email = req.body.email;
const parola = req.body.parola;

const query=`SELECT FROM utilizator WHERE email = '${email}' AND parola='${parola}';`
const result = await pool.query(query);
```

Daca atacatorul introduce in campul de email:

```sql
' OR '1'='1' --
```


Interogarea devine:
```sql
SELECT * FROM utilizator WHERE email = '' OR '1'='1';
```

Conditia `'1'='1'` este mereu adevarata, iar `--` comenteaza restul query-ului, astfel atacatorul **fara sa stie nicio parola** poate afla credentialele din baza de date.


### Tipuri de SQLi:

- **In-band**: atacatorul vede direct rezultatul
- **Blind SQLi**: aplicatia nu afiseaza direct rezultatul, insa atacatorul poate deduce informatii dupa comportament
- **Error-based**: atacatorul forteaza eroari care expun structura bazei de date(ex. Introduce mai multe sql coduri proprii unde deduce ce tip de baze de date este pentru a afla cum se marcheaza comentariul: `--`, `//`, `/**/`)


### Cum prevenim:

#### Folosim interogari parametrizate, adica valorile sunt trimise separat de query, deci baza de date le trateaza strict ca pe niste date

```javascript
//cod corect
const email = req.body.email;
const parola = req.body.parola;

const result = await pool.query(
    'SELECT * FROM utilizator WHERE email=$1 AND parola = $2',[email,parola]
);


```

Aici daca cineva insereaza ` ' OR '1'='1' --`, acest text este cautat literal ca un simplu email si nu se gaseste nimic, nu se mai executa ca un SQL query. 


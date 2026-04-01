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
|utilizator_id|NUMBER(20)|PK|678644|
|prenume|VARCHAR(50)| |Jane
|nume|VARCHAR(50)| |Doe|
|email|VARCHAR(50)| |janedoe@gmail.com|
|telefon|VARCHAR(20)| | 
|parola_hash|VARCHAR(225)| | Passworrd!@.
|data_nasterii|DATE| |10.12.1999
|poza_profil|VARCHAR(225)| | img.jpg
|data_creare|DATETIME| | 12.12.2015


## Proprietate:
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|proprietate_id|NUMBER(30)|PK|4567765
|gazda_id|NUMBER(30)|FK|5675678
|nume_proprietate|VARCHAR(225)| |Penthouse London|
|descriere|TEXT| |
|tip_proprietate|VARCHAR(100)| | Penthouse
|nr_maxim_persoane|NUMBER(50)| | 
|nr_dormitoare|NUMBER(50)| |
|nr_bai|NUMBER(50)| |
|nr_paturi|NUMBER(100)| |
|pret_noapte|DECIMAL(10,2)| |
|data_creare|DATETIME| |

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
|metoda_plata| VARCHAR(50)| |Card\PayPal

## Recenzie:
|atribut|tip de date|constrangeri|valori posibile/exemple|observatii|
|--------|-----------|------------|-----------------------|----------|
|recenzie_id|NUMBER(30)|PK| |
|rezervare_id|NUMBER(30)|FK| |
|comentariu|TEXT| |
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
|imagine_id|NUMBER(100)|PK| |
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

![ERD](images/diagram_erd.svg)


## 7.Realizarea diagramei conceptuale corespunzatoare diagramei entitate-relatie proiectate la punctul 6.

![Conceptual Diagram](images/conceptual_diagram.svg)






















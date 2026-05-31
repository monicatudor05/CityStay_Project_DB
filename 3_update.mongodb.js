
/* global use, db */

use('citystaymongodb');

// cresterea pretului cu 10%
// UPDATE proprietate
// SET pret_noapte = pret_noapte * 1.10
// WHERE tip_proprietate ='penthouse'

db.proprietati.updateMany(
    { tipProprietate: "penthouse" },
    { $mul: { pretNoapte: 1.10 } }
);
console.log("Pretul tuturor penthouse-urilor a fost crescut cu 10%");


//verificam

const penthouses = db.proprietati.find(
    { tipProprietate: "penthouse" },
    { numeProprietate: 1, pretNoapte: 1 }
).toArray();

console.log(penthouses);


//seteaza statusul platii 'confirmata' pentru toate rezervarile proprietatii cu id-ul 'PROP004'

// .$[] - every element of an array
db.proprietati.updateMany(
    {
        proprietateId: "PROP004"
    },
    {
        $set: { "rezervari.$[].plata.statusPlata": "confirmata" }
    }

);

console.log("Statusul platii pentru toate rezervarile proprietatii PROP004 a fost setat la 'confirmata'");

//adauga o facilitate noua la proprietatea cu id PROP004 si acualizeaza pretul pe noapte 

db.proprietati.updateOne(
    { proprietateId: "PROP004" },
    {
        $addToSet: { facilitati: "sauna" },
        $set: { pretNoapte: 5000.00 }
    }
);



console.log("Pretul pe noapte al proprietatii PROP004 a fost actualizat la 5000.00 si 'sauna' a fost adaugata la facilitati");

//verificam

const prop004 = db.proprietati.findOne(
    { proprietateId: "PROP004" },
    {
        numeProprietate: 1,
        pretNoapte: 1, facilitati: 1
    }
);

console.log("PROP004 dupa actualizare:", JSON.stringify(prop004));




//actualizarea raatingului unei recenzii specifice

db.proprietati.updateOne(
    {
        proprietateId: "PROP007"
    },
    {
        $set: {
            "rezervari.$[rez].recenzie.rating": 4
        }

    },
    {
        arrayFilters: [{
            "rez.rezervareId": "REZ010"
        }]
    }
);

console.log("Ratingul rezervarii REZ010 al proprietatii PROP007 a fost actualizat la 4");


//verificam

const prop007 = db.proprietati.findOne(
    { proprietateId: "PROP007" },
    {
        numeProprietate: 1,
        "rezervari.recenzie": 1
    }
);

console.log("PROP007 dupa actualizarea ratingului:", JSON.stringify(prop007));




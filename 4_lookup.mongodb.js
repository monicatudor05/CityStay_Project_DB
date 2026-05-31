use("citystaymongodb");


// $lookup - join
// join intre proprietati ssi utilizatori pentru a afisa proprietatea cu cu numele gazdei
//echivalent Oracle:
//select p.nume_proprietate, p.tip-proprietate, p.pret_noapte, u.nume ||' '|| u.prenume as gazda
//from proprietate p
//join utilizator u on u.utilizator_id = p.gazda_id

console.log(db.utilizatori.countDocuments());

const proprietataiCuGaza = db.proprietati.aggregate([
    {
        $lookup: {
            from: "utilizatori",
            localField: "gazdaId",
            foreignField: "utilizatorId",
            as: "gazda"
        }
    },
    {
        $unwind: "$gazda"
    },
    {
        $project: {
            _id: 0,
            numeProprietate: 1,
            tipProprietate: 1,
            pretNoapte: 1,
            numeGazda: {
                $concat: [
                    "$gazda.prenume", " ", "$gazda.nume"
                ]
            }
        }
    },
    {
        $sort: { pretNoapte: -1 }
    }
]).toArray();
console.log(JSON.stringify(proprietataiCuGaza, null, 2));


//pentru fiecare gazda sa calculam cate proprieatti are si cat venit a avut
// echivalent Oracle:
// select u.nume
// || ' '
// || u.prenume as gazda,
// count(distinct p.proprietate_id) as nr_proprietati,
// sum(r.pret) as venit
// from proprietate p
// join utilizator u
// on p.gazda_id = u.utilizator_id
// join rezervare r
// on p.proprietate_id = r.proprietate_id
// group by u.utilizator_id,
//    u.nume,
//    u.prenume
// order by venit desc;

const gazdeActive = db.proprietati.aggregate([
    {
        $match: {
            "rezervari": {
                $exists: true,
                $ne: []
            }
        }
    },
    {
        $unwind: "$rezervari"
    },
    {
        $group: {
            _id: "$gazdaId",
            nrProprietati: {
                $addToSet: "$proprietateId"
            },
            totalVenit: {
                $sum: "$rezervari.pret"
            }
        }
    },
    {
        $lookup: {
            from: "utilizatori",
            localField: "_id",
            foreignField: "utilizatorId",
            as: "gazda"
        }
    },
    {
        $unwind: "$gazda"
    },
    {
        $project: {
            _id: 0,
            nrProprietati: 1,
            totalVenit: 1,
            numeGazda: {
                $concat: [
                    "$gazda.prenume", " ", "$gazda.nume"
                ]
            }
        }
    },
    {
        $sort: {
            totalVenit: -1
        }
    }


]).toArray();


console.log(JSON.stringify(gazdeActive, null, 2));


//pentru fiecare tip de proprietate sa calculam ratingul mediu si numarul de recenzii
// SELECT p.tip_proprietate,
//        ROUND(AVG(rec.rating), 2) AS ratingMediu,
//        COUNT(rec.recenzie_id) AS nrRecenzii,
//        COUNT(DISTINCT p.proprietate_id) AS nrProprietati
// FROM proprietate p
// JOIN rezervare rez 
//     ON rez.proprietate_id = p.proprietate_id
// JOIN recenzie rec 
//     ON rec.rezervare_id = rez.rezervare_id
// GROUP BY p.tip_proprietate
// ORDER BY ratingMediu DESC;

const ratingMediuTip = db.proprietati.aggregate([
    {
        $unwind: "$rezervari"
    },
    {
        $match: {
            "rezervari.recenzie": {
                $ne: null
            }
        }
    },
    {
        $group: {
            _id: "$tipProprietate",
            ratingMediu: {
                $avg: "$rezervari.recenzie.rating"
            },
            nrRecenzii: {
                $sum: 1
            },
            nrProprietati: { $addToSet: "$proprietateId" }
        }
    },
    {
        $project: {
            _id: 0,
            tipProprietate: "$_id",
            ratingMediu: { $round: ["$ratingMediu", 2] },
            nrRecenzii: 1,
            nrProprietati: { $size: "$nrProprietati" }
        }
    },
    {
        $sort: {
            ratingMediu: -1
        }
    }
]).toArray();
console.log(JSON.stringify(ratingMediuTip, null, 2));



//pentru fiecare client afisati nr de rezervari si suma totala cheltuita
//Echivalent Oracle:
// SELECT u.prenume || ' ' || u.nume AS numeClient,
//        COUNT(*) AS nrRezervari,
//        ROUND(SUM(rez.pret), 2) AS sumaCheltuita
// FROM utilizator u
// JOIN rezervare rez
//     ON rez.client_id = u.utilizator_id
// GROUP BY u.utilizator_id, u.prenume, u.nume
// ORDER BY sumaCheltuita DESC;

const clentiCheltuieli = db.proprietati.aggregate([
    {
        $unwind: "$rezervari"
    },
    {
        $group: {
            _id: "$rezervari.clientId",
            nrRezervari: { $sum: 1 },
            sumaCheltuita: { $sum: "$rezervari.pret" }
        }
    },
    {
        $lookup: {
            from: "utilizatori",
            localField: "_id",
            foreignField: "utilizatorId",
            as: "client"
        }
    },
    {
        $unwind: "$client"
    },
    {
        $project: {
            _id: 0,
            nrRezervari: 1,
            sumaCheltuita: 1,
            numeClient: {
                $concat: [
                    "$client.prenume", " ", "$client.nume"
                ]
            }
        }
    },
    {
        $sort: {
            sumaCheltuita: -1
        }
    }

]).toArray();
console.log(JSON.stringify(clentiCheltuieli, null, 2));


//afisati toate propriietatile disponibile cu toate faciliitatile si media ratingului, sortate  dupa rating descrescator
//Echivalent Oracle:
// SELECT p.nume_proprietate,
//        p.tip_proprietate,
//        p.pret_noapte,
//        ROUND(AVG(rec.rating), 2) AS ratingMediu
// FROM proprietate p
// JOIN disponibilitate d
//     ON d.proprietate_id = p.proprietate_id
// LEFT JOIN rezervare rez
//     ON rez.proprietate_id = p.proprietate_id
// LEFT JOIN recenzie rec
//     ON rec.rezervare_id = rez.rezervare_id
// WHERE d.status_disponibilitate = 'disponibil'
// GROUP BY p.proprietate_id, p.nume_proprietate,
//          p.tip_proprietate, p.pret_noapte
// ORDER BY p.pret_noapte ASC;

const proprietatiFacilitate = db.proprietati.aggregate([
    {
        $match: {
            "disponibilitate.status": "disponibil"
        }
    },
    {
        $unwind: {
            path: "$rezervari",
            preserveNullAndEmptyArrays: true
        }

    },
    {
        $group: {
            _id: "$proprietateId",
            numeProprietate: { $first: "$numeProprietate" },
            tipProprietate: { $first: "$tipProprietate" },
            pretNoapte: { $first: "$pretNoapte" },
            facilitati: { $first: "$facilitati" },
            ratingMediu: { $avg: "$rezervari.recenzie.rating" }
        }
    },
    {
        $project: {
            _id: 0,
            numeProprietate: 1,
            tipProprietate: 1,
            pretNoapte: 1,
            facilitati: 1,
            ratingMediu: { $round: ["$ratingMediu", 2] }
        }
    }



]).toArray();
console.log(JSON.stringify(proprietatiFacilitate, null, 2));



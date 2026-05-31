/* global use, db */

use('citystaymongodb');
db.proprietati.drop();

db.proprietati.insertMany([

    {
        proprietateId: "PROP001",
        gazdaId: "UTL001",
        numeProprietate: "Penthouse New York",
        descriere: "Un apartament superb cu o vedere la Central Park impresionanta",
        tipProprietate: "penthouse",
        nrMaximPersoane: 4,
        nrDormitoare: 2,
        nrBai: 1,
        nrPaturi: 4,
        pretNoapte: 500.99,
        dataCreare: new Date("2026-01-01"),
        facilitati: ["wifi", "piscina", "spa"],
        imagini: [
            { url: "http://citystay.ro/img/stay1.jpg", estePrincipala: true },
            { url: "http://citystay.ro/img/stay2.jpg", estePrincipala: false }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-12"),
            dataEnd: new Date("2026-06-27"),
            status: "disponibil",
            pretSpecial: 600.90
        }],
        rezervari: [
            {
                rezervareId: "REZ001",
                clientId: "UTL004",
                dataCheckin: new Date("2026-05-15"),
                dataCheckout: new Date("2026-05-20"),
                nrPersoane: 2,
                pret: 2504.95,
                plata: {
                    suma: 2504.95,
                    dataPlata: new Date("2026-05-10"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Penthouse superb, vedere incredibila la Central Park! Vom reveni cu siguranta.",
                    rating: 5,
                    dataRecenzie: new Date("2026-05-22")
                }
            },
            {
                rezervareId: "REZ002",
                clientId: "UTL006",
                dataCheckin: new Date("2026-07-01"),
                dataCheckout: new Date("2026-07-08"),
                nrPersoane: 3,
                pret: 3506.93,
                plata: [
                    { suma: 3506.93, dataPlata: new Date("2026-06-25"), statusPlata: "refuzata", metodaPlata: "paypal" },
                    { suma: 3506.93, dataPlata: new Date("2026-06-26"), statusPlata: "confirmata", metodaPlata: "card" }
                ],
                recenzie: null
            }
        ],
        wishlist: ["UTL004"]
    },

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
    },

    {
        proprietateId: "PROP003",
        gazdaId: "UTL003",
        numeProprietate: "Apartament Amsterdam",
        descriere: "Apartament situat in inima orasului",
        tipProprietate: "apartment",
        nrMaximPersoane: 4,
        nrDormitoare: 2,
        nrBai: 2,
        nrPaturi: 4,
        pretNoapte: 300.70,
        dataCreare: new Date("2025-03-08"),
        facilitati: ["sala de sport", "loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay4.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-01-11"),
            dataEnd: new Date("2026-07-04"),
            status: "disponibil",
            pretSpecial: 2000.90
        }],
        rezervari: [
            {
                rezervareId: "REZ004",
                clientId: "UTL009",
                dataCheckin: new Date("2026-05-01"),
                dataCheckout: new Date("2026-05-10"),
                nrPersoane: 3,
                pret: 2706.30,
                plata: {
                    suma: 2706.30,
                    dataPlata: new Date("2026-04-25"),
                    statusPlata: "confirmata",
                    metodaPlata: "klarna"
                },
                recenzie: {
                    comentariu: "Amsterdam este un oras minunat iar apartamentul a fost perfect pentru sejurul nostru.",
                    rating: 5,
                    dataRecenzie: new Date("2026-05-12")
                }
            },
            {
                rezervareId: "REZ005",
                clientId: "UTL011",
                dataCheckin: new Date("2026-08-05"),
                dataCheckout: new Date("2026-08-12"),
                nrPersoane: 2,
                pret: 2104.90,
                plata: [
                    { suma: 2104.90, dataPlata: new Date("2026-07-30"), statusPlata: "refuzata", metodaPlata: "card" },
                    { suma: 2104.90, dataPlata: new Date("2026-07-31"), statusPlata: "confirmata", metodaPlata: "paypal" }
                ],
                recenzie: null
            }
        ],
        wishlist: ["UTL010"]
    },


    {
        proprietateId: "PROP004",
        gazdaId: "UTL005",
        numeProprietate: "Mansion Norvegia",
        descriere: "Un conac impresionant, intr-o zona linistita, in muntii Norvegiei",
        tipProprietate: "mansion",
        nrMaximPersoane: 10,
        nrDormitoare: 6,
        nrBai: 5,
        nrPaturi: 6,
        pretNoapte: 4700.90,
        dataCreare: new Date("2025-03-08"),
        facilitati: ["sala de sport", "jacuzzi"],
        imagini: [
            { url: "http://citystay.ro/img/stay5.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-09-12"),
            dataEnd: new Date("2026-10-27"),
            status: "indisponibil",
            pretSpecial: 9000.90
        }],
        rezervari: [
            {
                rezervareId: "REZ006",
                clientId: "UTL010",
                dataCheckin: new Date("2026-07-10"),
                dataCheckout: new Date("2026-07-20"),
                nrPersoane: 9,
                pret: 47009.00,
                plata: {
                    suma: 47009.00,
                    dataPlata: new Date("2026-07-05"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Conac impresionant, exact cum arata in poze. Recomandam pentru grupuri mari.",
                    rating: 5,
                    dataRecenzie: new Date("2026-07-22")
                }
            }
        ],
        wishlist: ["UTL008"]
    },


    {
        proprietateId: "PROP005",
        gazdaId: "UTL007",
        numeProprietate: "Penthouse Madrid",
        descriere: "Penthouse situat la periferia Madridului",
        tipProprietate: "penthouse",
        nrMaximPersoane: 5,
        nrDormitoare: 3,
        nrBai: 2,
        nrPaturi: 3,
        pretNoapte: 700.70,
        dataCreare: new Date("2024-12-09"),
        facilitati: ["wifi", "piscina", "loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay6.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-09-12"),
            dataEnd: new Date("2026-12-28"),
            status: "disponibil",
            pretSpecial: 2700.90
        }],
        rezervari: [
            {
                rezervareId: "REZ007",
                clientId: "UTL015",
                dataCheckin: new Date("2026-06-01"),
                dataCheckout: new Date("2026-06-08"),
                nrPersoane: 3,
                pret: 4904.90,
                plata: {
                    suma: 4904.90,
                    dataPlata: new Date("2026-05-25"),
                    statusPlata: "confirmata",
                    metodaPlata: "paypal"
                },
                recenzie: {
                    comentariu: "Penthouse frumos dar putin zgomotos noaptea din cauza strazii.",
                    rating: 3,
                    dataRecenzie: new Date("2026-06-10")
                }
            },
            {
                rezervareId: "REZ008",
                clientId: "UTL016",
                dataCheckin: new Date("2026-09-10"),
                dataCheckout: new Date("2026-09-17"),
                nrPersoane: 4,
                pret: 4904.90,
                plata: {
                    suma: 4904.90,
                    dataPlata: new Date("2026-09-05"),
                    statusPlata: "in asteptare",
                    metodaPlata: "card"
                },
                recenzie: null
            }
        ],
        wishlist: ["UTL004"]
    },


    {
        proprietateId: "PROP006",
        gazdaId: "UTL012",
        numeProprietate: "Holiday House Greece-Mykonos",
        descriere: "Casa de vacanta situata in Mykonos dedicata familiilor",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 450.70,
        dataCreare: new Date("2019-07-08"),
        facilitati: ["curte"],
        imagini: [
            { url: "http://citystay.ro/img/stay7.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-12"),
            dataEnd: new Date("2026-06-27"),
            status: "disponibil",
            pretSpecial: 600.90
        }],
        rezervari: [
            {
                rezervareId: "REZ009",
                clientId: "UTL019",
                dataCheckin: new Date("2026-07-15"),
                dataCheckout: new Date("2026-07-22"),
                nrPersoane: 3,
                pret: 3154.90,
                plata: {
                    suma: 3154.90,
                    dataPlata: new Date("2026-07-10"),
                    statusPlata: "confirmata",
                    metodaPlata: "klarna"
                },
                recenzie: {
                    comentariu: "Casa din Mykonos a fost visul nostru! Locatie perfecta langa plaja.",
                    rating: 5,
                    dataRecenzie: new Date("2026-07-24")
                }
            }
        ],
        wishlist: ["UTL016"]
    },


    {
        proprietateId: "PROP007",
        gazdaId: "UTL013",
        numeProprietate: "Holiday house - Italy",
        descriere: "Casa de vacanta in inima Italiei dedicata pentru iubitorii de petreceri",
        tipProprietate: "house",
        nrMaximPersoane: 5,
        nrDormitoare: 4,
        nrBai: 3,
        nrPaturi: 4,
        pretNoapte: 1500.70,
        dataCreare: new Date("2021-09-08"),
        facilitati: ["bucatarie", "balcon"],
        imagini: [
            { url: "http://citystay.ro/img/stay9.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-01"),
            dataEnd: new Date("2026-05-31"),
            status: "disponibil",
            pretSpecial: 700.00
        }],
        rezervari: [
            {
                rezervareId: "REZ010",
                clientId: "UTL021",
                dataCheckin: new Date("2026-05-20"),
                dataCheckout: new Date("2026-05-27"),
                nrPersoane: 4,
                pret: 10507.90,
                plata: {
                    suma: 10507.90,
                    dataPlata: new Date("2026-05-15"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Casa a fost fenomenala, perfecta pentru petreceri. Vom reveni!",
                    rating: 5,
                    dataRecenzie: new Date("2026-05-29")
                }
            },
            {
                rezervareId: "REZ011",
                clientId: "UTL022",
                dataCheckin: new Date("2026-07-01"),
                dataCheckout: new Date("2026-07-10"),
                nrPersoane: 5,
                pret: 13509.30,
                plata: [
                    { suma: 13509.30, dataPlata: new Date("2026-06-25"), statusPlata: "refuzata", metodaPlata: "paypal" },
                    { suma: 13509.30, dataPlata: new Date("2026-06-26"), statusPlata: "confirmata", metodaPlata: "card" }
                ],
                recenzie: {
                    comentariu: "Casa frumoasa dar au lipsit cateva utilitati de baza. Rating decent.",
                    rating: 3,
                    dataRecenzie: new Date("2026-07-12")
                }
            },
            {
                rezervareId: "REZ012",
                clientId: "UTL025",
                dataCheckin: new Date("2026-09-01"),
                dataCheckout: new Date("2026-09-08"),
                nrPersoane: 3,
                pret: 10507.90,
                plata: {
                    suma: 10507.90,
                    dataPlata: new Date("2026-08-25"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: null
            }
        ],
        wishlist: ["UTL009"]
    },


    {
        proprietateId: "PROP008",
        gazdaId: "UTL014",
        numeProprietate: "Apartament Berlin",
        descriere: "Apartamentul se situeaza langa Gara Centrala din Berlin",
        tipProprietate: "apartment",
        nrMaximPersoane: 2,
        nrDormitoare: 1,
        nrBai: 1,
        nrPaturi: 1,
        pretNoapte: 270.70,
        dataCreare: new Date("2018-12-08"),
        facilitati: ["bucatarie", "smart tv", "balcon"],
        imagini: [
            { url: "http://citystay.ro/img/stay10.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-06-01"),
            dataEnd: new Date("2026-06-15"),
            status: "disponibil",
            pretSpecial: 270.00
        }],
        rezervari: [
            {
                rezervareId: "REZ020",
                clientId: "UTL021",
                dataCheckin: new Date("2026-06-01"),
                dataCheckout: new Date("2026-06-08"),
                nrPersoane: 2,
                pret: 1895.90,
                plata: {
                    suma: 1895.90,
                    dataPlata: new Date("2026-05-25"),
                    statusPlata: "confirmata",
                    metodaPlata: "klarna"
                },
                recenzie: {
                    comentariu: "Apartament Berlin ok, nimic spectaculos dar curat si accesibil.",
                    rating: 3,
                    dataRecenzie: new Date("2026-06-10")
                }
            }
        ],
        wishlist: ["UTL017"]
    },


    {
        proprietateId: "PROP009",
        gazdaId: "UTL017",
        numeProprietate: "Penthouse Londra",
        descriere: "Penthouse langa Paddington",
        tipProprietate: "penthouse",
        nrMaximPersoane: 4,
        nrDormitoare: 2,
        nrBai: 2,
        nrPaturi: 3,
        pretNoapte: 550.70,
        dataCreare: new Date("2017-06-08"),
        facilitati: ["smart tv"],
        imagini: [
            { url: "http://citystay.ro/img/stay11.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-20"),
            dataEnd: new Date("2026-06-20"),
            status: "disponibil",
            pretSpecial: 550.00
        }],
        rezervari: [
            {
                rezervareId: "REZ014",
                clientId: "UTL004",
                dataCheckin: new Date("2026-06-05"),
                dataCheckout: new Date("2026-06-12"),
                nrPersoane: 2,
                pret: 3854.90,
                plata: {
                    suma: 3854.90,
                    dataPlata: new Date("2026-06-01"),
                    statusPlata: "confirmata",
                    metodaPlata: "klarna"
                },
                recenzie: {
                    comentariu: "Penthouse foarte confortabil, locatie excelenta langa Paddington.",
                    rating: 4,
                    dataRecenzie: new Date("2026-06-14")
                }
            },
            {
                rezervareId: "REZ015",
                clientId: "UTL006",
                dataCheckin: new Date("2026-09-15"),
                dataCheckout: new Date("2026-09-22"),
                nrPersoane: 3,
                pret: 3854.90,
                plata: {
                    suma: 3854.90,
                    dataPlata: new Date("2026-09-10"),
                    statusPlata: "in asteptare",
                    metodaPlata: "paypal"
                },
                recenzie: null
            }
        ],
        wishlist: ["UTL011"]
    },


    {
        proprietateId: "PROP010",
        gazdaId: "UTL018",
        numeProprietate: "Mansion L.A.",
        descriere: "Mansion in L.A. in cel mai spectaculos cartier",
        tipProprietate: "mansion",
        nrMaximPersoane: 16,
        nrDormitoare: 8,
        nrBai: 8,
        nrPaturi: 7,
        pretNoapte: 9000.70,
        dataCreare: new Date("2022-10-08"),
        facilitati: ["aer conditionat", "loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay12.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-07-01"),
            dataEnd: new Date("2026-07-31"),
            status: "indisponibil",
            pretSpecial: null
        }],
        rezervari: [
            {
                rezervareId: "REZ013",
                clientId: "UTL001",
                dataCheckin: new Date("2026-08-01"),
                dataCheckout: new Date("2026-08-10"),
                nrPersoane: 14,
                pret: 81006.30,
                plata: {
                    suma: 81006.30,
                    dataPlata: new Date("2026-07-25"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Conacul a depasit orice asteptare. Piscina si spatiile comune sunt de vis.",
                    rating: 5,
                    dataRecenzie: new Date("2026-08-12")
                }
            }
        ],
        wishlist: ["UTL004"]
    },


    {
        proprietateId: "PROP011",
        gazdaId: "UTL020",
        numeProprietate: "Apartament Roma",
        descriere: "Apartament situat la 500 m de metrou",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 300.70,
        dataCreare: new Date("2017-09-08"),
        facilitati: ["terasa"],
        imagini: [
            { url: "http://citystay.ro/img/stay13.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-15"),
            dataEnd: new Date("2026-06-01"),
            status: "disponibil",
            pretSpecial: 1300.00
        }],
        rezervari: [],
        wishlist: ["UTL015"]
    },


    {
        proprietateId: "PROP012",
        gazdaId: "UTL021",
        numeProprietate: "Holiday house - Turkey",
        descriere: "Casa de vacanta cu piscine pentru copii",
        tipProprietate: "house",
        nrMaximPersoane: 6,
        nrDormitoare: 4,
        nrBai: 4,
        nrPaturi: 4,
        pretNoapte: 1300.27,
        dataCreare: new Date("2021-03-08"),
        facilitati: ["loc de joaca"],
        imagini: [
            { url: "http://citystay.ro/img/stay14.jpg", estePrincipala: true },
            { url: "http://citystay.ro/img/stay15.jpg", estePrincipala: false }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-06-10"),
            dataEnd: new Date("2026-07-10"),
            status: "disponibil",
            pretSpecial: 450.00
        }],
        rezervari: [],
        wishlist: []
    },


    {
        proprietateId: "PROP013",
        gazdaId: "UTL023",
        numeProprietate: "Penthouse Miami",
        descriere: "Penthouse situat langa cea mai frumoasa plaja din Miami",
        tipProprietate: "penthouse",
        nrMaximPersoane: 5,
        nrDormitoare: 3,
        nrBai: 2,
        nrPaturi: 3,
        pretNoapte: 2700.70,
        dataCreare: new Date("2026-03-08"),
        facilitati: ["lift", "wifi"],
        imagini: [
            { url: "http://citystay.ro/img/stay16.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-08-01"),
            dataEnd: new Date("2026-08-31"),
            status: "disponibil",
            pretSpecial: 1500.00
        }],
        rezervari: [
            {
                rezervareId: "REZ019",
                clientId: "UTL017",
                dataCheckin: new Date("2026-07-20"),
                dataCheckout: new Date("2026-07-27"),
                nrPersoane: 4,
                pret: 18907.90,
                plata: {
                    suma: 18907.90,
                    dataPlata: new Date("2026-07-15"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Penthouse Miami cu vedere la ocean, experienta de neuitat.",
                    rating: 5,
                    dataRecenzie: new Date("2026-07-29")
                }
            }
        ],
        wishlist: ["UTL006"]
    },


    {
        proprietateId: "PROP014",
        gazdaId: "UTL024",
        numeProprietate: "Apartament Budapest",
        descriere: "Apartament situat langa Budapest Castle",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 200.70,
        dataCreare: new Date("2026-01-08"),
        facilitati: [],
        imagini: [
            { url: "http://citystay.ro/img/stay17.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-25"),
            dataEnd: new Date("2026-06-25"),
            status: "disponibil",
            pretSpecial: 270.00
        }],
        rezervari: [],
        wishlist: ["UTL015"]
    },


    {
        proprietateId: "PROP015",
        gazdaId: "UTL024",
        numeProprietate: "Holiday House Bali",
        descriere: "Cea mai incantatoare casa de vacanta din Bali",
        tipProprietate: "house",
        nrMaximPersoane: 15,
        nrDormitoare: 8,
        nrBai: 8,
        nrPaturi: 8,
        pretNoapte: 6000.70,
        dataCreare: new Date("2023-03-07"),
        facilitati: ["piscina", "jacuzzi"],
        imagini: [
            { url: "http://citystay.ro/img/stay18.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-10-01"),
            dataEnd: new Date("2026-10-31"),
            status: "disponibil",
            pretSpecial: 3700.00
        }],
        rezervari: [
            {
                rezervareId: "REZ016",
                clientId: "UTL003",
                dataCheckin: new Date("2026-08-15"),
                dataCheckout: new Date("2026-08-25"),
                nrPersoane: 12,
                pret: 60007.00,
                plata: {
                    suma: 60007.00,
                    dataPlata: new Date("2026-08-10"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Sejur de neuitat in Bali! Casa a fost curata si gazda extrem de primitoare.",
                    rating: 5,
                    dataRecenzie: new Date("2026-08-27")
                }
            }
        ],
        wishlist: ["UTL009"]
    },


    {
        proprietateId: "PROP016",
        gazdaId: "UTL021",
        numeProprietate: "Apartament Bucuresti",
        descriere: "Apartament situat in Piata Romana",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 210.70,
        dataCreare: new Date("2010-03-08"),
        facilitati: ["loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay19.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-07-15"),
            dataEnd: new Date("2026-08-15"),
            status: "disponibil",
            pretSpecial: 9000.00
        }],
        rezervari: [],
        wishlist: []
    },


    {
        proprietateId: "PROP017",
        gazdaId: "UTL014",
        numeProprietate: "Penthouse Milano",
        descriere: "Un penthouse cu o vedere superba in centrul orasului",
        tipProprietate: "penthouse",
        nrMaximPersoane: 4,
        nrDormitoare: 2,
        nrBai: 2,
        nrPaturi: 4,
        pretNoapte: 500.70,
        dataCreare: new Date("2015-04-08"),
        facilitati: ["wifi"],
        imagini: [
            { url: "http://citystay.ro/img/stay20.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-10"),
            dataEnd: new Date("2026-05-30"),
            status: "disponibil",
            pretSpecial: 300.00
        }],
        rezervari: [],
        wishlist: []
    },


    {
        proprietateId: "PROP018",
        gazdaId: "UTL018",
        numeProprietate: "Apartament Oxford",
        descriere: "Apartament in apropierea uneia dintre cele mai prestigioase facultati din lume",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 900.70,
        dataCreare: new Date("2020-01-07"),
        facilitati: ["loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay21.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-06-20"),
            dataEnd: new Date("2026-07-20"),
            status: "disponibil",
            pretSpecial: 1300.00
        }],
        rezervari: [],
        wishlist: []
    },


    {
        proprietateId: "PROP019",
        gazdaId: "UTL001",
        numeProprietate: "House Londra",
        descriere: "Casa situata in suburbiile Londrei",
        tipProprietate: "house",
        nrMaximPersoane: 6,
        nrDormitoare: 4,
        nrBai: 4,
        nrPaturi: 4,
        pretNoapte: 3700.70,
        dataCreare: new Date("2019-10-08"),
        facilitati: ["loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay22.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-09-01"),
            dataEnd: new Date("2026-09-30"),
            status: "disponibil",
            pretSpecial: 2700.00
        }],
        rezervari: [
            {
                rezervareId: "REZ026",
                clientId: "UTL022",
                dataCheckin: new Date("2026-09-10"),
                dataCheckout: new Date("2026-09-18"),
                nrPersoane: 5,
                pret: 29605.60,
                plata: {
                    suma: 29605.60,
                    dataPlata: new Date("2026-09-05"),
                    statusPlata: "confirmata",
                    metodaPlata: "paypal"
                },
                recenzie: {
                    comentariu: "Casa spatioasa si confortabila, perfecta pentru familia noastra.",
                    rating: 4,
                    dataRecenzie: new Date("2026-09-20")
                }
            }
        ],
        wishlist: ["UTL001"]
    },


    {
        proprietateId: "PROP020",
        gazdaId: "UTL002",
        numeProprietate: "Penthouse Japonia-Tokyo",
        descriere: "Penthouse situat in Shibuya Square",
        tipProprietate: "penthouse",
        nrMaximPersoane: 5,
        nrDormitoare: 3,
        nrBai: 3,
        nrPaturi: 2,
        pretNoapte: 890.70,
        dataCreare: new Date("2024-10-03"),
        facilitati: ["wifi"],
        imagini: [
            { url: "http://citystay.ro/img/stay23.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-01"),
            dataEnd: new Date("2026-05-20"),
            status: "disponibil",
            pretSpecial: 200.00
        }],
        rezervari: [],
        wishlist: []
    },


    {
        proprietateId: "PROP021",
        gazdaId: "UTL002",
        numeProprietate: "Apartament Japonia-Osaka",
        descriere: "Apartament situat in cea mai linistita zona din Osaka",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 1000.70,
        dataCreare: new Date("2021-12-22"),
        facilitati: ["wifi", "loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay24.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-10-01"),
            dataEnd: new Date("2026-10-31"),
            status: "disponibil",
            pretSpecial: 3700.00
        }],
        rezervari: [],
        wishlist: []
    },


    {
        proprietateId: "PROP022",
        gazdaId: "UTL013",
        numeProprietate: "Mansion Abu Dhabi",
        descriere: "Conac superb in cea mai luxuoasa zona din Abu Dhabi",
        tipProprietate: "mansion",
        nrMaximPersoane: 12,
        nrDormitoare: 8,
        nrBai: 7,
        nrPaturi: 8,
        pretNoapte: 9900.70,
        dataCreare: new Date("2021-01-12"),
        facilitati: ["lift", "spa", "aer conditionat"],
        imagini: [
            { url: "http://citystay.ro/img/stay25.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-05-28"),
            dataEnd: new Date("2026-06-28"),
            status: "disponibil",
            pretSpecial: 9900.00
        }],
        rezervari: [
            {
                rezervareId: "REZ017",
                clientId: "UTL011",
                dataCheckin: new Date("2026-06-20"),
                dataCheckout: new Date("2026-06-30"),
                nrPersoane: 10,
                pret: 99007.00,
                plata: {
                    suma: 99007.00,
                    dataPlata: new Date("2026-06-15"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Mansion Abu Dhabi - lux total! Merita fiecare ban platit.",
                    rating: 5,
                    dataRecenzie: new Date("2026-07-02")
                }
            },
            {
                rezervareId: "REZ018",
                clientId: "UTL025",
                dataCheckin: new Date("2026-09-05"),
                dataCheckout: new Date("2026-09-15"),
                nrPersoane: 8,
                pret: 79205.60,
                plata: [
                    { suma: 79205.60, dataPlata: new Date("2026-09-01"), statusPlata: "refuzata", metodaPlata: "paypal" },
                    { suma: 79205.60, dataPlata: new Date("2026-09-02"), statusPlata: "confirmata", metodaPlata: "card" }
                ],
                recenzie: null
            }
        ],
        wishlist: ["UTL008"]
    },

    {
        proprietateId: "PROP023",
        gazdaId: "UTL007",
        numeProprietate: "Apartament Edinburgh - Scotia",
        descriere: "Apartament situat in cea mai linistita zona din Edinburgh",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 670.70,
        dataCreare: new Date("2021-02-12"),
        facilitati: [],
        imagini: [
            { url: "http://citystay.ro/img/stay26.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-06-05"),
            dataEnd: new Date("2026-07-05"),
            status: "disponibil",
            pretSpecial: 890.00
        }],
        rezervari: [
            {
                rezervareId: "REZ025",
                clientId: "UTL011",
                dataCheckin: new Date("2026-08-01"),
                dataCheckout: new Date("2026-08-08"),
                nrPersoane: 2,
                pret: 4687.90,
                plata: {
                    suma: 4687.90,
                    dataPlata: new Date("2026-07-25"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: null
            }
        ],
        wishlist: ["UTL017"]
    },


    {
        proprietateId: "PROP024",
        gazdaId: "UTL013",
        numeProprietate: "Penthouse Santa Monica",
        descriere: "Priveliste spectaculoasa",
        tipProprietate: "penthouse",
        nrMaximPersoane: 4,
        nrDormitoare: 2,
        nrBai: 2,
        nrPaturi: 2,
        pretNoapte: 1090.70,
        dataCreare: new Date("2018-04-28"),
        facilitati: ["jacuzzi", "aer conditionat"],
        imagini: [
            { url: "http://citystay.ro/img/stay27.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-07-01"),
            dataEnd: new Date("2026-08-01"),
            status: "disponibil",
            pretSpecial: 1000.00
        }],
        rezervari: [
            {
                rezervareId: "REZ024",
                clientId: "UTL009",
                dataCheckin: new Date("2026-07-05"),
                dataCheckout: new Date("2026-07-12"),
                nrPersoane: 3,
                pret: 7633.90,
                plata: {
                    suma: 7633.90,
                    dataPlata: new Date("2026-07-01"),
                    statusPlata: "confirmata",
                    metodaPlata: "klarna"
                },
                recenzie: {
                    comentariu: "Zona linistita si gazda receptiva.",
                    rating: 4,
                    dataRecenzie: new Date("2026-07-14")
                }
            }
        ],
        wishlist: ["UTL015"]
    },

    {
        proprietateId: "PROP025",
        gazdaId: "UTL014",
        numeProprietate: "Apartament Boston",
        descriere: "Apartament situat langa prestigioasa facultate MIT",
        tipProprietate: "apartment",
        nrMaximPersoane: 2,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 1047.60,
        dataCreare: new Date("2019-01-25"),
        facilitati: [],
        imagini: [
            { url: "http://citystay.ro/img/stay28.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-08-10"),
            dataEnd: new Date("2026-09-10"),
            status: "disponibil",
            pretSpecial: 670.00
        }],
        rezervari: [],
        wishlist: ["UTL003"]
    },

    {
        proprietateId: "PROP026",
        gazdaId: "UTL005",
        numeProprietate: "Holiday House - Amalfi Coast",
        descriere: "Casa de vacanta dedicata familiilor numeroase",
        tipProprietate: "house",
        nrMaximPersoane: 8,
        nrDormitoare: 5,
        nrBai: 4,
        nrPaturi: 5,
        pretNoapte: 7700.70,
        dataCreare: new Date("2023-10-20"),
        facilitati: ["loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay29.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-06-15"),
            dataEnd: new Date("2026-07-15"),
            status: "disponibil",
            pretSpecial: 1090.00
        }],
        rezervari: [
            {
                rezervareId: "REZ021",
                clientId: "UTL009",
                dataCheckin: new Date("2026-07-05"),
                dataCheckout: new Date("2026-07-15"),
                nrPersoane: 7,
                pret: 77007.00,
                plata: {
                    suma: 77007.00,
                    dataPlata: new Date("2026-07-01"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Locatie de vis, experienta completa pentru familie.",
                    rating: 5,
                    dataRecenzie: new Date("2026-07-17")
                }
            },
            {
                rezervareId: "REZ022",
                clientId: "UTL016",
                dataCheckin: new Date("2026-09-20"),
                dataCheckout: new Date("2026-09-30"),
                nrPersoane: 6,
                pret: 46204.20,
                plata: {
                    suma: 46204.20,
                    dataPlata: new Date("2026-09-15"),
                    statusPlata: "confirmata",
                    metodaPlata: "paypal"
                },
                recenzie: null
            }
        ],
        wishlist: ["UTL010"]
    },


    {
        proprietateId: "PROP027",
        gazdaId: "UTL012",
        numeProprietate: "Apartament Dubai",
        descriere: "Apartament situat langa Marina Bay",
        tipProprietate: "apartment",
        nrMaximPersoane: 3,
        nrDormitoare: 1,
        nrBai: 2,
        nrPaturi: 1,
        pretNoapte: 3000.70,
        dataCreare: new Date("2021-10-12"),
        facilitati: ["wifi", "loc de parcare"],
        imagini: [
            { url: "http://citystay.ro/img/stay30.jpg", estePrincipala: true }
        ],
        disponibilitate: [{
            dataStart: new Date("2026-09-15"),
            dataEnd: new Date("2026-10-15"),
            status: "disponibil",
            pretSpecial: 3000.00
        }],
        rezervari: [
            {
                rezervareId: "REZ023",
                clientId: "UTL004",
                dataCheckin: new Date("2026-06-10"),
                dataCheckout: new Date("2026-06-17"),
                nrPersoane: 2,
                pret: 21004.90,
                plata: {
                    suma: 21004.90,
                    dataPlata: new Date("2026-06-05"),
                    statusPlata: "confirmata",
                    metodaPlata: "card"
                },
                recenzie: {
                    comentariu: "Apartament Dubai langa Marina Bay, vedere spectaculoasa si facilitati de top.",
                    rating: 5,
                    dataRecenzie: new Date("2026-06-19")
                }
            }
        ],
        wishlist: ["UTL001"]
    }
]);

console.log("Proprietati inserate cu succes");
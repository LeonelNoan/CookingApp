app

    .factory('Products', function ($http) {

        var uri = "http://localhost/recettes";
        
        var datas = [
  {
      "rctId": 1,
      "cout": 2,
      "libelle": "Amalla",
      "lvl": 3,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "spécialité Beninoise",
      "tmpCuisson": 30,
      "tmpPreparation": 60,
      "type": 2,
      "nbRealisations": 1,
      "user": {
          "userId": 1,
          "alt": 0,
          "cp": "92150",
          "lat": 0,
          "lng": 0,
          "lvl": 2,
          "mail": "romaric.vissou@gmail.com",
          "mdp": null,
          "nom": "SEGLA",
          "photo": null,
          "prenom": "Romaric",
          "rue": "14 rue de locarno",
          "ville": "Suresnes"
      },
      "ingredients": [
        {
            "id": 1,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 1,
                "img": null,
                "icone": "poivre.png",
                "libelle": "poivre"
            }
        },
        {
            "id": 3,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 2,
                "img": null,
                "icone": "sel.png",
                "libelle": "sel"
            }
        },
        {
            "id": 22,
            "qte": 3,
            "unite": "tete",
            "ingredient": {
                "ingId": 37,
                "img": null,
                "icone": "salad.png",
                "libelle": "salade"
            }
        },
        {
            "id": 23,
            "qte": 4,
            "unite": "doigt",
            "ingredient": {
                "ingId": 33,
                "img": null,
                "icone": "fruit.png",
                "libelle": "plantain"
            }
        },
        {
            "id": 24,
            "qte": 1,
            "unite": "kg",
            "ingredient": {
                "ingId": 18,
                "img": null,
                "icone": "food-6.png",
                "libelle": "sesame"
            }
        },
        {
            "id": 25,
            "qte": 10,
            "unite": "cl",
            "ingredient": {
                "ingId": 3,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile"
            }
        },
        {
            "id": 26,
            "qte": 2,
            "unite": "morceau",
            "ingredient": {
                "ingId": 16,
                "img": null,
                "icone": "chili.png",
                "libelle": "piment fort"
            }
        },
        {
            "id": 27,
            "qte": 3,
            "unite": "gousse",
            "ingredient": {
                "ingId": 35,
                "img": null,
                "icone": "fruit-4.png",
                "libelle": "Aiie"
            }
        },
        {
            "id": 28,
            "qte": 2,
            "unite": "gros",
            "ingredient": {
                "ingId": 32,
                "img": null,
                "icone": "oignon.png",
                "libelle": "oignon"
            }
        },
        {
            "id": 29,
            "qte": 1,
            "unite": "kg",
            "ingredient": {
                "ingId": 41,
                "img": null,
                "icone": "steak.png",
                "libelle": "viande"
            }
        }
      ],
      "etapes": [
        {
            "etpId": 1,
            "description": "laver pendant une heure",
            "duree": null,
            "titre": "laver le ndole"
        },
        {
            "etpId": 2,
            "description": "décoper puis écrasez à la pière",
            "duree": null,
            "titre": "découper le ndole"
        },
        {
            "etpId": 3,
            "description": "Mettre dans une grande casserole",
            "duree": null,
            "titre": "découper le ndole"
        },
        {
            "etpId": 4,
            "description": "décoper les condiments",
            "duree": null,
            "titre": "découper le ndole"
        }
      ]
  },
  {
      "rctId": 2,
      "cout": 1,
      "libelle": "Gari",
      "lvl": 1,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Specialité Beninoise",
      "tmpCuisson": 0,
      "tmpPreparation": 2,
      "type": 1,
      "nbRealisations": 0,
      "user": {
          "userId": 2,
          "alt": 0,
          "cp": "90000",
          "lat": 0,
          "lng": 0,
          "lvl": 2,
          "mail": "joel.wabo@gmail.com",
          "mdp": null,
          "nom": "WABO",
          "photo": null,
          "prenom": "Joel",
          "rue": "6B Boulevard Anatole France",
          "ville": "Belfort"
      },
      "ingredients": [
        {
            "id": 4,
            "qte": 10,
            "unite": "cl",
            "ingredient": {
                "ingId": 3,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile"
            }
        },
        {
            "id": 5,
            "qte": 250,
            "unite": "g",
            "ingredient": {
                "ingId": 4,
                "img": null,
                "icone": "atcheke.png",
                "libelle": "atcheke"
            }
        },
        {
            "id": 30,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 1,
                "img": null,
                "icone": "poivre.png",
                "libelle": "poivre"
            }
        },
        {
            "id": 31,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 2,
                "img": null,
                "icone": "sel.png",
                "libelle": "sel"
            }
        },
        {
            "id": 32,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 5,
                "img": null,
                "icone": "gari.png",
                "libelle": "gari"
            }
        },
        {
            "id": 33,
            "qte": 4,
            "unite": "piece",
            "ingredient": {
                "ingId": 9,
                "img": null,
                "icone": "tomato.png",
                "libelle": "tomate"
            }
        },
        {
            "id": 34,
            "qte": 1,
            "unite": "piece",
            "ingredient": {
                "ingId": 16,
                "img": null,
                "icone": "chili.png",
                "libelle": "piment fort"
            }
        },
        {
            "id": 35,
            "qte": 3,
            "unite": "cl",
            "ingredient": {
                "ingId": 21,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile rouge"
            }
        },
        {
            "id": 36,
            "qte": 2,
            "unite": "piece",
            "ingredient": {
                "ingId": 32,
                "img": null,
                "icone": "oignon.png",
                "libelle": "oignon"
            }
        },
        {
            "id": 37,
            "qte": 1,
            "unite": "gousse",
            "ingredient": {
                "ingId": 35,
                "img": null,
                "icone": "fruit-4.png",
                "libelle": "Aiie"
            }
        },
        {
            "id": 38,
            "qte": 1,
            "unite": "piece",
            "ingredient": {
                "ingId": 42,
                "img": null,
                "icone": "turkey.png",
                "libelle": "poulet"
            }
        }
      ],
      "etapes": [
        {
            "etpId": 3,
            "description": "Versez le gari (sauveur) dans un verre d'eau.",
            "duree": "2",
            "titre": "Délayer le gari"
        },
        {
            "etpId": 3,
            "description": "Rajoutez du sucre.",
            "duree": "2",
            "titre": "Délayer le gari"
        }
      ]
  },
  {
      "rctId": 3,
      "cout": 3,
      "libelle": "Dja",
      "lvl": 2,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité Beninoise",
      "tmpCuisson": 15,
      "tmpPreparation": 5,
      "type": 1,
      "nbRealisations": 0,
      "user": {
          "userId": 3,
          "alt": 0,
          "cp": "90000",
          "lat": 0,
          "lng": 0,
          "lvl": 2,
          "mail": "xavbrown@gmail.com",
          "mdp": null,
          "nom": "Brown",
          "photo": "",
          "prenom": "Xavier",
          "rue": "Rue des moulineaux",
          "ville": "belfort"
      },
      "ingredients": [
        {
            "id": 6,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 5,
                "img": null,
                "icone": "gari.png",
                "libelle": "gari"
            }
        },
        {
            "id": 7,
            "qte": 475,
            "unite": "g",
            "ingredient": {
                "ingId": 6,
                "img": null,
                "icone": "champ.png",
                "libelle": "champignons"
            }
        },
        {
            "id": 39,
            "qte": 20,
            "unite": "cl",
            "ingredient": {
                "ingId": 3,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile"
            }
        },
        {
            "id": 40,
            "qte": 10,
            "unite": "piece",
            "ingredient": {
                "ingId": 9,
                "img": null,
                "icone": "tomato.png",
                "libelle": "tomate"
            }
        },
        {
            "id": 41,
            "qte": 3,
            "unite": "branche",
            "ingredient": {
                "ingId": 15,
                "img": null,
                "icone": "chives.png",
                "libelle": "celeri"
            }
        },
        {
            "id": 42,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 41,
                "img": null,
                "icone": "steak.png",
                "libelle": "viande"
            }
        },
        {
            "id": 43,
            "qte": 5,
            "unite": "piece",
            "ingredient": {
                "ingId": 32,
                "img": null,
                "icone": "oignon.png",
                "libelle": "oignon"
            }
        }
      ],
      "etapes": [
        {
            "etpId": 4,
            "description": "Mettre la tomate au moulinex et mettre en marche.",
            "duree": "5",
            "titre": "Faire de la purée de tomate"
        },
        {
            "etpId": 5,
            "description": "Versez la purée de tomate dans une casserole d'huile chaude",
            "duree": "10",
            "titre": "Cuire la purée"
        }
      ]
  },
  {
      "rctId": 4,
      "cout": 2,
      "libelle": "Sauce Bearnaise",
      "lvl": 1,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité Francaise",
      "tmpCuisson": 25,
      "tmpPreparation": 15,
      "type": 2,
      "nbRealisations": 0,
      "user": {
          "userId": 4,
          "alt": 0,
          "cp": "25000",
          "lat": 0,
          "lng": 0,
          "lvl": 1,
          "mail": "bessont@gmail.com",
          "mdp": null,
          "nom": "Besson",
          "photo": null,
          "prenom": "Thomas",
          "rue": "rue des papillons",
          "ville": "Besancon"
      },
      "ingredients": [
        {
            "id": 8,
            "qte": 1,
            "unite": "kg",
            "ingredient": {
                "ingId": 7,
                "img": null,
                "icone": "creme.png",
                "libelle": "creme fraiche"
            }
        },
        {
            "id": 9,
            "qte": 25,
            "unite": "g",
            "ingredient": {
                "ingId": 8,
                "img": null,
                "icone": "tomato.png",
                "libelle": "tomate pelée"
            }
        },
        {
            "id": 44,
            "qte": 1,
            "unite": "piece",
            "ingredient": {
                "ingId": 34,
                "img": null,
                "icone": "lemon.png",
                "libelle": "citron"
            }
        },
        {
            "id": 45,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 7,
                "img": null,
                "icone": "creme.png",
                "libelle": "creme fraiche"
            }
        },
        {
            "id": 46,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 10,
                "img": null,
                "icone": "pasta.png",
                "libelle": "nouilles"
            }
        },
        {
            "id": 47,
            "qte": 2,
            "unite": "piece",
            "ingredient": {
                "ingId": 43,
                "img": null,
                "icone": "saumon.png",
                "libelle": "saumon"
            }
        },
        {
            "id": 48,
            "qte": 100,
            "unite": "g",
            "ingredient": {
                "ingId": 28,
                "img": null,
                "icone": "broccoli.png",
                "libelle": "broccoli"
            }
        },
        {
            "id": 49,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 2,
                "img": null,
                "icone": "sel.png",
                "libelle": "sel"
            }
        },
        {
            "id": 50,
            "qte": 20,
            "unite": "cl",
            "ingredient": {
                "ingId": 3,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile"
            }
        }
      ],
      "etapes": [
          {
              "etpId": 4,
              "description": "Mettre la tomate au moulinex et mettre en marche.",
              "duree": "5",
              "titre": "Faire de la purée de tomate"
          },
        {
            "etpId": 5,
            "description": "Versez la purée de tomate dans une casserole d'huile chaude",
            "duree": "10",
            "titre": "Cuire la purée"
        }
      ]
  },
  {
      "rctId": 5,
      "cout": 3,
      "libelle": "Atcheke",
      "lvl": 3,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité ivoirienne",
      "tmpCuisson": 30,
      "tmpPreparation": 12,
      "type": 2,
      "nbRealisations": 0,
      "user": {
          "userId": 5,
          "alt": 0,
          "cp": "59000",
          "lat": 0,
          "lng": 0,
          "lvl": 2,
          "mail": "javierbrowny@gmail.com",
          "mdp": null,
          "nom": "Browny",
          "photo": "",
          "prenom": "javier",
          "rue": "Blvd de la mousson",
          "ville": "Lille"
      },
      "ingredients": [
        {
            "id": 10,
            "qte": 400,
            "unite": "g",
            "ingredient": {
                "ingId": 9,
                "img": null,
                "icone": "tomato.png",
                "libelle": "tomate"
            }
        },
        {
            "id": 11,
            "qte": 800,
            "unite": "g",
            "ingredient": {
                "ingId": 9,
                "img": null,
                "icone": "tomato.png",
                "libelle": "tomate"
            }
        },
        {
            "id": 51,
            "qte": 20,
            "unite": "cl",
            "ingredient": {
                "ingId": 3,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile"
            }
        },
        {
            "id": 52,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 4,
                "img": null,
                "icone": "atcheke.png",
                "libelle": "atcheke"
            }
        },
        {
            "id": 53,
            "qte": 1,
            "unite": "tête",
            "ingredient": {
                "ingId": 31,
                "img": null,
                "icone": "food-4.png",
                "libelle": "choux"
            }
        },
        {
            "id": 54,
            "qte": 300,
            "unite": "g",
            "ingredient": {
                "ingId": 13,
                "img": null,
                "icone": "fish.png",
                "libelle": "poisson"
            }
        },
        {
            "id": 55,
            "qte": 4,
            "unite": "piece",
            "ingredient": {
                "ingId": 32,
                "img": null,
                "icone": "oignon.png",
                "libelle": "oignon"
            }
        }
      ],
      "etapes": [
        {
            "etpId": 6,
            "description": "Verser l'atcheke dans un recipient du genre tupperware et concasser",
            "duree": "2",
            "titre": "Préparer l'atcheke"
        },
        {
            "etpId": 7,
            "description": "Mettre au micro onde ",
            "duree": "5",
            "titre": "Faire cuire l'atcheke"
        }
      ]
  },
  {
      "rctId": 6,
      "cout": 3,
      "libelle": "Kom",
      "lvl": 3,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité Togolaise",
      "tmpCuisson": 120,
      "tmpPreparation": 30,
      "type": 2,
      "nbRealisations": 0,
      "user": {
          "userId": 6,
          "alt": 0,
          "cp": "35000",
          "lat": 0,
          "lng": 0,
          "lvl": 3,
          "mail": "bessont@gmail.com",
          "mdp": null,
          "nom": "Brelan",
          "photo": null,
          "prenom": "Channel",
          "rue": "rue des miottes",
          "ville": "Beaucourt"
      },
      "ingredients": [
        {
            "id": 12,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 10,
                "img": null,
                "icone": "pasta.png",
                "libelle": "nouilles"
            }
        },
        {
            "id": 13,
            "qte": 300,
            "unite": "g",
            "ingredient": {
                "ingId": 11,
                "img": null,
                "icone": "pizza.png",
                "libelle": "pâte à pizza"
            }
        },
        {
            "id": 56,
            "qte": 20,
            "unite": "cl",
            "ingredient": {
                "ingId": 21,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile rouge"
            }
        },
        {
            "id": 57,
            "qte": 4,
            "unite": "piece",
            "ingredient": {
                "ingId": 32,
                "img": null,
                "icone": "oignon.png",
                "libelle": "oignon"
            }
        },
        {
            "id": 58,
            "qte": 1,
            "unite": "kg",
            "ingredient": {
                "ingId": 13,
                "img": null,
                "icone": "fish.png",
                "libelle": "poisson"
            }
        },
        {
            "id": 59,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 2,
                "img": null,
                "icone": "sel.png",
                "libelle": "sel"
            }
        },
        {
            "id": 60,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 1,
                "img": null,
                "icone": "poivre.png",
                "libelle": "poivre"
            }
        }
      ],
      "etapes": [
          {
              "etpId": 6,
              "description": "Verser l'atcheke dans un recipient du genre tupperware et concasser",
              "duree": "2",
              "titre": "Préparer l'atcheke"
          },
        {
            "etpId": 7,
            "description": "Mettre au micro onde ",
            "duree": "5",
            "titre": "Faire cuire l'atcheke"
        }
      ]
  },
  {
      "rctId": 7,
      "cout": 2,
      "libelle": "Eba",
      "lvl": 2,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité Beninoise",
      "tmpCuisson": 20,
      "tmpPreparation": 10,
      "type": 2,
      "nbRealisations": 0,
      "user": {
          "userId": 7,
          "alt": 0,
          "cp": "74000",
          "lat": 0,
          "lng": 0,
          "lvl": 4,
          "mail": "romaricboss@gmail.com",
          "mdp": null,
          "nom": "SEGLA",
          "photo": null,
          "prenom": "Romaric",
          "rue": "26 chemin du maquis",
          "ville": "Annecy"
      },
      "ingredients": [
        {
            "id": 14,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 12,
                "img": null,
                "icone": "food-16.png",
                "libelle": "escalope"
            }
        },
        {
            "id": 15,
            "qte": 600,
            "unite": "g",
            "ingredient": {
                "ingId": 14,
                "img": null,
                "icone": "fruit-7.png",
                "libelle": "courgettes"
            }
        },
        {
            "id": 61,
            "qte": 1,
            "unite": "kg",
            "ingredient": {
                "ingId": 5,
                "img": null,
                "icone": "gari.png",
                "libelle": "gari"
            }
        },
        {
            "id": 62,
            "qte": 1,
            "unite": "kg",
            "ingredient": {
                "ingId": 41,
                "img": null,
                "icone": "steak.png",
                "libelle": "viande"
            }
        },
        {
            "id": 63,
            "qte": 20,
            "unite": "cl",
            "ingredient": {
                "ingId": 21,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile rouge"
            }
        },
        {
            "id": 64,
            "qte": 4,
            "unite": "piece",
            "ingredient": {
                "ingId": 9,
                "img": null,
                "icone": "tomato.png",
                "libelle": "tomate"
            }
        },
        {
            "id": 65,
            "qte": 2,
            "unite": "piece",
            "ingredient": {
                "ingId": 16,
                "img": null,
                "icone": "chili.png",
                "libelle": "piment fort"
            }
        },
        {
            "id": 66,
            "qte": 2,
            "unite": "branche",
            "ingredient": {
                "ingId": 15,
                "img": null,
                "icone": "chives.png",
                "libelle": "celeri"
            }
        }
      ],
      "etapes": [
          {
              "etpId": 6,
              "description": "Verser l'atcheke dans un recipient du genre tupperware et concasser",
              "duree": "2",
              "titre": "Préparer l'atcheke"
          },
        {
            "etpId": 7,
            "description": "Mettre au micro onde ",
            "duree": "5",
            "titre": "Faire cuire l'atcheke"
        }
      ]
  },
  {
      "rctId": 8,
      "cout": 2,
      "libelle": "Pizza",
      "lvl": 2,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité Italienne",
      "tmpCuisson": 60,
      "tmpPreparation": 10,
      "type": 2,
      "nbRealisations": 0,
      "user": {
          "userId": 8,
          "alt": 0,
          "cp": "90000",
          "lat": 0,
          "lng": 0,
          "lvl": 4,
          "mail": "vissou.segla@gmail.com",
          "mdp": null,
          "nom": "SEGLABIS",
          "photo": "",
          "prenom": "Vissou",
          "rue": "8 rue de michel",
          "ville": "belfort"
      },
      "ingredients": [
        {
            "id": 16,
            "qte": 10,
            "unite": "g",
            "ingredient": {
                "ingId": 13,
                "img": null,
                "icone": "fish.png",
                "libelle": "poisson"
            }
        },
        {
            "id": 17,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 15,
                "img": null,
                "icone": "chives.png",
                "libelle": "celeri"
            }
        },
        {
            "id": 67,
            "qte": 1,
            "unite": "piece",
            "ingredient": {
                "ingId": 11,
                "img": null,
                "icone": "pizza.png",
                "libelle": "pâte à pizza"
            }
        },
        {
            "id": 68,
            "qte": 4,
            "unite": "piece",
            "ingredient": {
                "ingId": 9,
                "img": null,
                "icone": "tomato.png",
                "libelle": "tomate"
            }
        },
        {
            "id": 69,
            "qte": 1,
            "unite": "branche",
            "ingredient": {
                "ingId": 15,
                "img": null,
                "icone": "chives.png",
                "libelle": "celeri"
            }
        },
        {
            "id": 70,
            "qte": 4,
            "unite": "piece",
            "ingredient": {
                "ingId": 32,
                "img": null,
                "icone": "oignon.png",
                "libelle": "oignon"
            }
        },
        {
            "id": 71,
            "qte": 20,
            "unite": "cl",
            "ingredient": {
                "ingId": 3,
                "img": null,
                "icone": "huile.png",
                "libelle": "huile"
            }
        },
        {
            "id": 72,
            "qte": 100,
            "unite": "g",
            "ingredient": {
                "ingId": 7,
                "img": null,
                "icone": "creme.png",
                "libelle": "creme fraiche"
            }
        }
      ],
      "etapes": [
          {
              "etpId": 6,
              "description": "Verser l'atcheke dans un recipient du genre tupperware et concasser",
              "duree": "2",
              "titre": "Préparer l'atcheke"
          },
        {
            "etpId": 7,
            "description": "Mettre au micro onde ",
            "duree": "5",
            "titre": "Faire cuire l'atcheke"
        },
        {
            "etpId": 6,
            "description": "Verser l'atcheke dans un recipient du genre tupperware et concasser",
            "duree": "2",
            "titre": "Préparer l'atcheke"
        },
        {
            "etpId": 7,
            "description": "Mettre au micro onde ",
            "duree": "5",
            "titre": "Faire cuire l'atcheke"
        }
      ]
  },
  {
      "rctId": 9,
      "cout": 1,
      "libelle": "Patte à la carbonara",
      "lvl": 1,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité Franco Italienne",
      "tmpCuisson": 10,
      "tmpPreparation": 5,
      "type": 2,
      "nbRealisations": 0,
      "user": {
          "userId": 11,
          "alt": 0,
          "cp": "69000",
          "lat": 0,
          "lng": 0,
          "lvl": 1,
          "mail": "jcurtis@live.com",
          "mdp": null,
          "nom": "Jackson",
          "photo": null,
          "prenom": "Curtis",
          "rue": "Rue de la loose",
          "ville": "BiabiaVille"
      },
      "ingredients": [
        {
            "id": 18,
            "qte": 800,
            "unite": "g",
            "ingredient": {
                "ingId": 16,
                "img": null,
                "icone": "chili.png",
                "libelle": "piment fort"
            }
        },
        {
            "id": 19,
            "qte": 250,
            "unite": "g",
            "ingredient": {
                "ingId": 17,
                "img": null,
                "icone": "chili.png",
                "libelle": "piment doux"
            }
        },
        {
            "id": 73,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 10,
                "img": null,
                "icone": "pasta.png",
                "libelle": "nouilles"
            }
        },
        {
            "id": 74,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 7,
                "img": null,
                "icone": "creme.png",
                "libelle": "creme fraiche"
            }
        },
        {
            "id": 75,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 1,
                "img": null,
                "icone": "poivre.png",
                "libelle": "poivre"
            }
        },
        {
            "id": 76,
            "qte": 1,
            "unite": "pincée",
            "ingredient": {
                "ingId": 2,
                "img": null,
                "icone": "sel.png",
                "libelle": "sel"
            }
        }
      ],
      "etapes": [
        {
            "etpId": 8,
            "description": "Faire cuire les pattes dans de l'eau bouillante salée",
            "duree": "10",
            "titre": "Cuire les pattes"
        },
        {
            "etpId": 9,
            "description": "Égoutter dans une passoir",
            "duree": "5",
            "titre": "Egoutter"
        },
        {
            "etpId": 10,
            "description": "Versez la creme fraiche dans une casserole avec une cuillerée d'huile",
            "duree": "8",
            "titre": "Preparer la sauce"
        },
        {
            "etpId": 11,
            "description": "Assaisonner avec les épices et herbes voulues",
            "duree": "2",
            "titre": "Assaisonner"
        },
        {
            "etpId": 12,
            "description": "Mélanger les pattes à la sauce et servir immédiatement",
            "duree": "2",
            "titre": "Mélanger et servir"
        }
      ]
  },
  {
      "rctId": 10,
      "cout": 3,
      "libelle": "Nouilles",
      "lvl": 2,
      "photo": null,
      "photoDetail": null,
      "publier": false,
      "remarque": "Spécialité Asiatique",
      "tmpCuisson": 15,
      "tmpPreparation": 10,
      "type": 2,
      "nbRealisations": 0,
      "user": {
          "userId": 12,
          "alt": 0,
          "cp": "36000",
          "lat": 0,
          "lng": 0,
          "lvl": 2,
          "mail": "david.greg@yahoo.fr",
          "mdp": null,
          "nom": "Gregoriny",
          "photo": null,
          "prenom": "David",
          "rue": "Rue de Jacky",
          "ville": "Besoge"
      },
      "ingredients": [
        {
            "id": 20,
            "qte": 10,
            "unite": "branches",
            "ingredient": {
                "ingId": 18,
                "img": null,
                "icone": "food-6.png",
                "libelle": "sesame"
            }
        },
        {
            "id": 21,
            "qte": 5,
            "unite": "feuille",
            "ingredient": {
                "ingId": 25,
                "img": null,
                "icone": "grain.png",
                "libelle": "thim"
            }
        },
        {
            "id": 77,
            "qte": 500,
            "unite": "g",
            "ingredient": {
                "ingId": 10,
                "img": null,
                "icone": "pasta.png",
                "libelle": "nouilles"
            }
        }
      ],
      "etapes": [
        {
            "etpId": 8,
            "description": "Faire cuire les pattes dans de l'eau bouillante salée",
            "duree": "10",
            "titre": "Cuire les pattes"
        },
        {
            "etpId": 9,
            "description": "Égoutter dans une passoir",
            "duree": "5",
            "titre": "Egoutter"
        },
        {
            "etpId": 10,
            "description": "Versez la creme fraiche dans une casserole avec une cuillerée d'huile",
            "duree": "8",
            "titre": "Preparer la sauce"
        },
        {
            "etpId": 11,
            "description": "Assaisonner avec les épices et herbes voulues",
            "duree": "2",
            "titre": "Assaisonner"
        },
        {
            "etpId": 12,
            "description": "Mélanger les pattes à la sauce et servir immédiatement",
            "duree": "2",
            "titre": "Mélanger et servir"
        }
      ]
  }
        ];

        function list(slug, callback) {

            var url = uri + "/types/" + slug;

            /*$http.get(url)
                .success(function (response) {
                    callback(response);
                })
            ;*/

            var tab = [];

            for (i = 0; i < datas.length; i++) {

                if (datas[i].type == slug) {
                    tab.push(datas[i]);
                }
            }

            callback(tab);

        }

        function listAll(callback) {
            var url = uri;

           /* $http.get(url)
                .success(function (response) {
                    callback(response);
                })
            ;*/
            callback(datas);
        }

        function listByLvl(callback) {
            var url = uri + "/search";

            /*var query = {
                "libelle": "",
                "couts": [1, 2, 3],
                "lvls": [1, 2],
                "tmpCuisson": 30,
                "tmpPreparation": 30,
                "types": [1, 2, 3]
            };

            $http.post(url, query)
                .success(function (response) {
                    callback(response);
                })
            ;*/

            var tab = [];


            for (i = 0; i < datas.length; i++) {

                if (datas[i].tmpCuisson < 30) {
                    tab.push(datas[i]);
                }
            }

            callback(tab);


        }

        function listByLib(lib, callback) {
            /*var url = uri + "/libelle/" + lib;

            $http.get(url)
                .success(function (response) {
                    callback(response);
                })
            ;*/

            var tab = [];

            for (i = 0; i < datas.length; i++) {

                if (datas[i].libelle == lib) {
                    tab.push(datas[i]);
                }
            }

            callback(tab);

        }

        function one(slug, callback) {
            var url = uri + "/" + slug;
            /*$http.get(url)
                .success(function (response) {
                    if (response.type) {
                        callback(response)
                    } else {
                        //
                    }
                });*/
            console.log(slug);
            var tab = {};



            for (data in datas) {

                for (i = 0; i < datas.length; i++) {

                    if (datas[i].rctId == slug) {
                        tab = datas[i];
                        break;
                    }
                }

            }

            callback(tab);
        }

        return {
            all: list,
            allByLvl: listByLvl,
            allByLib: listByLib,
            allCatalogue: listAll,
            getOne: one
        };
    });

app

    .factory('Categories', function () {

        // Some fake testing data
        var categorie = {

            pr: {
                id: 4,
                name: 'Plats rapides',
                face: 'img/icon-4.png',
                bg: 'img/4.jpg'
            }, 

            ntr: {
                id: 1,
                name: 'Entrée',
                face: 'img/icon-1.png',
                bg: 'img/1.jpg'
            }, 
            
            plt: {
                id: 2,
                name: 'Plats',
                face: 'img/icon-2.png',
                bg: 'img/2.jpg'
            },
            
            dsr : {
                id: 3,
                name: 'Dessert',
                face: 'img/icon-3.png',
                bg: 'img/3.jpg'
            },

            cmp: {
                id: 5,
                name: 'Catalogue complet',
                face: 'img/icon-5.png',
                bg: 'img/5.jpg'
            }
        };

        return {
            all: function () {
                return categorie;
            }
        };
    });

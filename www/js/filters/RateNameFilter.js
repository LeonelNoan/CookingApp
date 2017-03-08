app
    .filter('rateName', function () {
        return function (val, type) {

            switch (type) {
            case 'user':
                var r = '';
                var p = '';
                console.log(val);
                switch (val) {
                    case 1:
                        p = 'Debutant';
                        break
                    case 2:
                        p = 'Intermediaire';
                        break
                    case 3:
                        p = 'Expert';
                        break
                }
                return p;

                break;
            case 'lvl':
                var r = '';
                var p = '';
                
                switch (val) {
                    case 1:
                        p = 'Facile';
                        break
                    case 2:
                        p = 'Moyen';
                        break
                    case 3:
                        p = 'Difficile';
                        break
                }
                return p;

                break;
            case 'prix':
                var r = '';
                var p = '';

                switch (val) {
                    case 1:
                        p = 'Bon marché';
                        break
                    case 2:
                        p = 'Moyen';
                        break
                    case 3:
                        p = 'chère';
                        break
                }

                return p;
                break;
            case 'lvl2':
                var r = '';
                var p = '';

                switch (val) {
                    case 1:
                        p = 'Facile';
                        break
                    case 2:
                        p = 'Moyen';
                        break
                    case 3:
                        p = 'Difficile';
                        break
                }

                return p;

                break;
            default:
                return 'inv';

        }

    }
})
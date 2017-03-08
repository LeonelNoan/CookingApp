app
    .filter('rate', function () {
        return function (val, type) {

        switch (type) {
            case 'lvl':
                var r = '';
                var p = '';

                for (var i = 0; i < val; i++) {
                    r += '<span><img width="20px" alt="" src="img/chef.png" /></span>'
                }

                p += '<span class="card__stats__value">' + r + '</span>'
                
                return p;

                break;
            case 'prix':
                var r = '';
                var p = ''

                for (var i = 0; i < val; i++) {
                    r += '<img width="20px" alt="" src="img/money-bag.png" />'
                }

                p += '<span class="card__stats__value">' + r + '</span>'

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

                for (var i = 0; i < val; i++) {
                    r += '<span><img width="20px" alt="" src="img/chef.png" /></span>'
                }

                p += '<p>' + r + '</p>'

                return p;

                break;
            default:
                return 'inv';

        }

    }
})
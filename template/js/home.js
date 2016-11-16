$(document).ready(function () {
    $("#fancybox1").fancybox({
        helpers: {
            title: {
                type: 'float'
            }
        }
    });

    $("#fancybox2").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    $("#fancybox3").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            title: {
                type: 'outside'
            }
        }
    });

    $("#fancybox4").fancybox({
        helpers: {
            title: {
                type: 'over'
            }
        }
    });
});
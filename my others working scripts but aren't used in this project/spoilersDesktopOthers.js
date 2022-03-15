$(document).ready(function(){
    let $spoilerData = $('.spoiler-data');
    // let $spoiler = $('.spoiler');
    let $spoilerDataContainer = $('.spoiler-data-container');
    // let $counter = 0;
    const $spoilerItems = [
        '.cakes-link',
        '.cupcakes-link',
        '.trifles-link',
        '.others-link',
        '.reviews-link',
        '.aboutus-link',
    ];

    const $spoilerItemsLinks = [
        '../products/cakes.html',
        '../products/cupcakes.html',
        '../products/trifles.html',
        '../products/others.html',
        '../products/reviews.html',
        '../products/aboutus.html',
    ];
    
    $('.spoiler').on({

        mouseenter: function() {
            $(this).find($spoilerDataContainer)
                .fadeIn({duration: 300, queue: false })
                .css('display', 'none')
                .slideDown(300);
        },

        mouseleave: function() {
            $spoilerDataContainer.stop(true, true).hide();
        },
    });

    $spoilerData.find('div').on({
        mouseenter: function() {
            $(this).css({
                cursor: 'pointer',
            });
            $(this).find('a').css({
                fontWeight: 'bold',
                color: 'rgba(104, 57, 26, 1)',
            });
        },

        mouseleave: function() {
            $(this).css({
                cursor: 'auto',
            });
            $(this).find('a').css({
                fontWeight: 'normal',
                color: 'rgba(255, 255, 255, 1)',
            });
        },
    });

    for (let $i = 0; $i <= $spoilerItems.length-1; $i++) {
        $($spoilerItems[$i]).on('click', function() {
            location.href = $spoilerItemsLinks[$i];
        });
    };
});
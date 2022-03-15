$(document).ready(function() {
    let $spoilerMobAll = $('.spoiler-mob');
    let $spoilerMobData = $('.spoiler-mob-data');
    let $spoilerMobItem = $('.spoiler-mob-item');
    let $burgerMenu = $('.burger-menu');
    let $burgerMenuContainer = $('.burger-menu-container');
    let $burgerMenuHeight = $burgerMenu.height();
    
    $('.spoiler-mob-item').on('click', function () {
        let $isAlreadyOpen = $spoilerMobItem.not($(this)).hasClass('active');
        if ($isAlreadyOpen) {
            $spoilerMobData.not($(this)).slideUp(500);
            $spoilerMobItem.not($(this)).removeClass('active');
        }

        $(this).toggleClass('active').next().slideToggle(500);

        if ($spoilerMobItem.hasClass('active')) {
            $burgerMenu.css('height', '25rem');
            $burgerMenuContainer.css('height', '25rem');
            // $burgerMenuContainer.css('overflowY', 'scroll');
        } else {
            $burgerMenu.css('height', $burgerMenuHeight);
            $burgerMenuContainer.css('height', $burgerMenuHeight);
        }
    });
});


//     $spoilerMobAll.each((i, elem) => {
//         $(elem).on('click', () => {
//             // console.log($spoilerMobData.not($(elem).children($spoilerMobData)).hasClass('active'));
//             let $isAlreadyOpen = $spoilerMobData.not($(elem).children($spoilerMobData)).hasClass('active');
//             // console.log($isAlreadyOpen);
//             if ($isAlreadyOpen) {
//                 $spoilerMobData.not($(elem).find($spoilerMobData)).removeClass('active').slideUp(500);
//             }

//             $(elem).find($spoilerMobData).toggleClass('active').slideToggle(500);

//             if ($spoilerMobData.hasClass('active')) {
//                 $burgerMenu.css('height', '25rem');
//                 $burgerMenuContainer.css('height', '25rem'); 
//             } else {
//                 $burgerMenu.css('height', $burgerMenuHeight);
//                 $burgerMenuContainer.css('height', $burgerMenuHeight);

//                 // let $counter = parseFloat(25.0); 
//                 // let timerId = setInterval(() => {
//                 //     $burgerMenu.css('height', ($counter + 'rem'));
//                 //     $burgerMenuContainer.css('height', ($counter + 'rem')); 
//                 //     setInterval(() => {return $counter -= parseFloat(0.007)}, 20);
//                 // }, 20)
//                 // setTimeout(() => {clearInterval(timerId)},1000)
//             }
//         });
//     });
// });


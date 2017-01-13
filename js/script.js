/**
 * Created by Uillian on 13/01/2017.
 */

function positionHome() {
    $('#wrapper #home').css('height', $(window).height() * .99);
    //$('#wrapper #about').css('min-height', $(window).height() * 1);
    $('#wrapper #home').show();
}

$(document).ready(function () {
    positionHome();
    $(window).on('resize', function (e) {
        positionHome();
    });

    $(".play a").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });

});


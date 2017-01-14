/**
 * Created by Uillian on 13/01/2017.
 */

function positionHome() {
    $('#wrapper #home').css('height', $(window).height() * 1);
    //$('#wrapper #about').css('min-height', $(window).height() * 1);
    $('#wrapper #home').show();
}

$(document).ready(function () {
    positionHome();
    $(window).on('resize', function (e) {
        positionHome();
    });

    $(".play a").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1300);
    });
    printPortfolio();
});

window.onload = function () {
    setTimeout(function () {
        $(".loading").fadeOut(function () {
            $(".content").fadeIn();
            $("#about").fadeIn();
            $("#portfolio").fadeIn();
            $("#contact").fadeIn();
        });
    }, 1000);
}

function getUniqueName(name) {
    return name.toLowerCase().split(" ").join();
}

function printPortfolio() {

    $.getJSON("projects.json", function (json) {
        for (var i = 0; i < json.projects.length; i++) {
            var html = '<div class="col-sm-6 col-md-4">\
                    <div class="thumbnail">';
            html += '   <a href="img/projects/' + json.projects[i].images[0].image + '" data-lightbox="' + getUniqueName(json.projects[i].name) + '" data-title="' + json.projects[i].images[0].description + '">\
                            <img src="img/projects/' + json.projects[i].images[0].image + '" alt="' + json.projects[i].name + '"></a>';
            if (json.projects[i].images.length > 1) {
                for (var j = 1; j < json.projects[i].images.length; j++) {
                    html += '   <a style="display: none;" href="img/projects/' + json.projects[i].images[j].image + '" data-lightbox="' + getUniqueName(json.projects[i].name) + '" data-title="' + json.projects[i].images[j].description + '">\
                            <img src="img/projects/' + json.projects[i].images[j].image + '" alt="' + json.projects[i].name + '"></a>';
                }
            }

            html += '       <div class="caption">\
                            <h3>' + json.projects[i].name + '</h3>\
                            <p>' + json.projects[i].description + '</p>\
                            <p>';
            for (var j = 0; j < json.projects[i].skills.length; j++) {
                html += '<span class="btn btn-default" role="button">' + json.projects[i].skills[j] + '</span>';
            }

            html += '            </p>\
                        </div>\
                    </div>\
                </div>';
            $("#projects").append(html);

            if((i+1) % 3 == 0){
                $("#projects").append("<div class='clearfix'></div>");
            }
        }

    });
}


function validateForm() {
    if ($("#name").val() == "") {
        $("#name").focus();
        return false;
    } else if ($("#email").val() == "") {
        $("#email").focus();
        return false;
    }
    return true;
}
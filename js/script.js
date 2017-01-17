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

    $(".play span").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1300);
    });
    printPortfolio();

    /* side bar */
    $("#openSideNav").click(function(){
        $("#sidenav").css("width", "250px");
        $("#sidenav").css("border-width", "2px");
    });

    $("#closeSideNav").click(function(){
        $("#sidenav").css("width", "0");
        $("#sidenav").css("border-width", "0");
    });

    $("#homeSideNav").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1300);
    });
    $("#aboutSideNav").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1300);
    });
    $("#portfolioSideNav").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1300);
    });
    $("#contactSideNav").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1300);
    });

     menuItems = $("#sidenav").find(".nav-list");
     scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
    isMenuSet=true;



});

var menuItems, scrollItems, isMenuSet=false;

$(window).scroll(function () {
    if(!isMenuSet) return;
    var fromTop = $(this).scrollTop() + 150;

    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "home";

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        id = "contact";
    }

    $("#sidenav").find(".nav-list").each(function(x, item){
        $(item).removeClass("active").filter("[href='#" + id + "']").addClass("active");
    });


});

window.onload = function () {
    setTimeout(function () {
        $(".loading").fadeOut(function () {
            $(".content").fadeIn();
            $("#about").fadeIn();
            $("#portfolio").fadeIn();
            $("#contact").fadeIn();
            $("#sidenavWrapper").fadeIn();
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

            if ((i + 1) % 3 == 0) {
                $("#projects").append("<div class='clearfix hidden-sm hidden-xs'></div>");
            }else if ((i + 1) % 2 == 0) {
                $("#projects").append("<div class='clearfix hidden-xs hidden-md hidden-lg'></div>");
            }
        }
    });
}


function validateForm() {
    function checkInput(id) {
        $(id).removeClass("error");
        $(id).removeClass("success");
        if ($(id).val() == "") {
            $(id).focus();
            $(id).addClass("error");
            return false;
        } else {
            $(id).addClass("success");
            return true;
        }
    }

    var name = checkInput("#name");
    var email = checkInput("#email");
    var message = checkInput("#message");

    var ret = name && email && message;
    return ret;
}

//trowing some arrows to the window
$(window).click(function (e) {
    //this give me some result for the coordinates of the click 
    var pageX = e.pageX - 20,
        pageY = e.pageY - 40;
    //for debugging purposes
    console.log(pageX + ' , ' + pageY);
    //get the scroll pixels from top
    var doc = $(document).scrollTop();
    console.log(doc);

    $('.arrow').removeAttr('style');
    $('.arrow').css('transform', 'rotateX(80deg)');
    $('.arrow').animate({
        'top': pageY - doc,
        'left': pageX,
        opacity: 1
    });
    $('.arrow').animate({
        'top': pageY - doc,
        'left': pageX,
        opacity: 0
    }, function () {

    });

});

//making the balloons cool
$('.balloons').click(function (index) {
    $(this).delay(400);
    //getting the exact balloon for poping 
    var index = $(".balloons").index(this) + 1;
    $(this).animate({
        //making the parent do some stuff
        "background-size": "0px"
    }, 100);
    $('.balloons:nth-child(' + index + ') > img').animate({
        //making the corect element to do some stuff
        'margin-top': '+=250',
        width: 0,
        opacity: 0
    },
    //delay and just for fun one function for console log
    1000);
    console.log(index);
});



//function to fade out balloons with images
//$('.balloons').click(function () {
//    $(this).animate({
//        opacity: 0,
//        width: '1px'
//    },
//        300,
//        'linear',
//        function () {
//            console.log("pop balloon");
//        });

//});



$(function () {
    "use strict";

    $("#news").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("article.html");
            $("#pages").show(1000);
            $('.balloons, img').removeAttr('style');

        });
    });
    $("#clips").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("clips.html");
            $("#pages").show(1000);
            $('.balloons, img').removeAttr('style');
        });
    });
    $("#books").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("books.html");
            $("#pages").show(1000);
            $('.balloons, img').removeAttr('style');
        });
    });
    $("#links").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("links.html");
            $("#pages").show(1000);
            $('.balloons, img').removeAttr('style');
        });
    });
});
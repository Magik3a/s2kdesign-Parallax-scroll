  
$(function () {
    "use strict";
    $("#news").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("article.html");
            $("#pages").show(1000);
        });
    });
    $("#clips").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("clips.html");
            $("#pages").show(1000);
        });
    });
    $("#books").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("books.html");
            $("#pages").show(1000);
        });
    });
    $("#links").click(function () {
        $("#pages").hide(1000, function () {
            $("#pages").load("links.html");
            $("#pages").show(1000);
        });
    });
});
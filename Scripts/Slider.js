$(document).ready(function () {
    var images1 = document.getElementById('picture-row-1').children;
    var images2 = document.getElementById('picture-row-2').children;

    var delay = 1000;

    $("#left").click(function () {
        disableBtns();
        topRowLeft();
        bottomRowLeft();
    });

    $("#right").click(function () {
        disableBtns();
        topRowRight();
        bottomRowRight();
    });

    function disableBtns() {
        $("#left").prop("disabled", true);
        $("#right").prop("disabled", true);

        setTimeout(function () {
            $("#left").prop("disabled", false);
            $("#right").prop("disabled", false);
        },delay + 10);
    }


    function topRowLeft() {
        for (var i = 0; i <= images1.length - 1; i++) {
            $("#" + images1[i].id).css("right", -$(images1[images1.length - 1]).width() - 10);
        }
        $("#" + images1[images1.length - 1].id).insertBefore($("#" + images1[0].id));
        for (var i = 0; i <= images1.length - 1; i++) {
            $("#" + images1[i].id).animate({ right: 0 }, delay);
        }
    }

    function bottomRowLeft() {
        for (var i = 0; i <= images2.length - 1; i++) {
            $("#" + images2[i].id).css("right", -$(images2[images2.length - 1]).width() - 10);
        }
        $("#" + images2[images2.length - 1].id).insertBefore($("#" + images2[0].id));
        for (var i = 0; i <= images2.length - 1; i++) {
            $("#" + images2[i].id).animate({ right: 0 }, delay);
        }
    }

    function topRowRight() {
        var last = "#" + images1[images1.length - 1].id;
        var first = "#" + images1[0].id;
        for (var i = 0; i <= images1.length - 1; i++) {
            $("#" + images1[i].id).animate({ right: -$(images1[0]).width() - 10 }, delay, function () {
                for (var i = 0; i <= images1.length - 1; i++) {
                    $("#" + images1[i].id).css("right", 0);
                    $(first).insertAfter($(last));
                }
            });
        }
    }

    function bottomRowRight() {
        var last = "#" + images2[images2.length - 1].id;
        var first = "#" + images2[0].id;
        for (var i = 0; i <= images2.length - 1; i++) {
            $("#" + images2[i].id).animate({ right: -$(images2[0]).width() - 10 }, delay, function () {
                for (var i = 0; i <= images2.length - 1; i++) {
                    $("#" + images2[i].id).css("right", 0);
                    $(first).insertAfter($(last));
                }
            });
        }
    }

});
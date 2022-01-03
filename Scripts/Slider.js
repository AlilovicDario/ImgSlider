//korištena sintaksa je podržana i u ES5 i u ES6 pa nije potreban transpile
$(document).ready(function () {
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
        }, delay + 10);
    }


    function topRowLeft() {
        $("#picture-row-1").children().css("right", -$("#picture-row-1").children().last().width() - 10).promise().done(function () {
            $("#picture-row-1").children().last().insertBefore($("#picture-row-1").children().first());
            $("#picture-row-1").children().animate({ right: 0 }, delay);
        });

    }

    function bottomRowLeft() {
        $("#picture-row-2").children().css("right", -$("#picture-row-2").children().last().width() - 10).promise().done(function () {
            $("#picture-row-2").children().last().insertBefore($("#picture-row-2").children().first());
            $("#picture-row-2").children().animate({ right: 0 }, delay);
        });
    }

    function topRowRight() {
        $("#picture-row-1").children().animate({ right: -$("#picture-row-1").children().first().width() - 10 },delay).promise().done(function(){
            $("#picture-row-1").children().first().insertAfter($("#picture-row-1").children().last());
            $("#picture-row-1").children().css("right", 0);
        });
    }

    function bottomRowRight() {
        $("#picture-row-2").children().animate({ right: -$("#picture-row-2").children().first().width() - 10 },delay).promise().done(function(){
            $("#picture-row-2").children().first().insertAfter($("#picture-row-2").children().last());
            $("#picture-row-2").children().css("right", 0);
        });
    }
});
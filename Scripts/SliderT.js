$(document).ready(() => {
    const delay = 1000;

    $("#left").click(() => {
        disableBtns();
        moveLeft("#picture-row-1");
        moveLeft("#picture-row-2");
    });

    $("#right").click(() => {
        disableBtns();
        moveRight("#picture-row-1");
        moveRight("#picture-row-2");
    });

    let disableBtns = () => {
        $("#left").prop("disabled", true);
        $("#right").prop("disabled", true);

        setTimeout(() => {
            $("#left").prop("disabled", false);
            $("#right").prop("disabled", false);
        }, delay + 10);
    };

    let moveLeft = row => $(row).children().css("right", -$(row).children().last().width() - 10).promise().done(() => moveBefore(row));

    let moveRight = row => $(row).children().animate({ right: -$(row).children().first().width() - 10 }, delay).promise().done(() => moveAfter(row));

    let moveBefore = row => {
        $(row).children().last().insertBefore($(row).children().first());
        $(row).children().animate({ right: 0 }, delay);
    };

    let moveAfter = row => {
        $(row).children().first().insertAfter($(row).children().last());
        $(row).children().css("right", 0);
    };
});

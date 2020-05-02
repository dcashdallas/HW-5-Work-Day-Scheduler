// Variables
var m = moment();
var tasks;
var timeBlock;

console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

$(document).ready(function () {
    colorChange();
    renderText();
});

function colorChange() {

    var realTime = moment().hours();
    console.log("Current Time" + realTime);

    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);

        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}


$(".saveBtn").click(function () {
    tasks = $(this).siblings(".input").val();
    console.log(tasks);
    timeBlock = $(this).siblings(".hour").text();
    console.log(timeBlock);
    localStorage.setItem(timeBlock, JSON.stringify(tasks));

    colorChange();
    renderText();
})


function renderText() {
    var saveWords9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveWords9);

    var saveWords10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveWords10);

    var saveWords11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveWords11);

    var saveWords12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveWords12);

    var saveWords1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveWords1);

    var saveWords2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveWords2);

    var saveWords3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveWords3);

    var saveWords4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveWords4);

    var saveWords5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveWords5);
}
$(document).ready(function() {
    var currentDay = moment().format("dddd MMMM Do YYYY");
    $("#currentDay").text(currentDay);
    
    var currentHour = moment().format("H");
    // console.log(currentHour);

    timeBgColor();
    function timeBgColor() {
    // if ($(".hourRow").attr("value") === currentHour) {
    //     $(".eventDescription").addClass("present");

    //     } else if ($(".hourRow").attr("value") > currentHour) {
    //         $(".eventDescription").addClass("past");

    //     } else if ($(".hourRow").attr("value") < currentHour) {
    //         $(".eventDescription").addClass("future");
    //     }
    //     // console.log($(".hourRow").attr("value"));
    }   
    $(".saveBtn").on("click", function(){
        localStorage.setItem ("9", ($("#block9").val()))
        localStorage.setItem ("10", ($("#block10").val()))
        localStorage.setItem ("11", ($("#block11").val()))
        localStorage.setItem ("12", ($("#block12").val()))
        localStorage.setItem ("13", ($("#block13").val()))
        localStorage.setItem ("14", ($("#block14").val()))
        localStorage.setItem ("15", ($("#block15").val()))
        localStorage.setItem ("16", ($("#block16").val()))
        localStorage.setItem ("17", ($("#block17").val()))

    });

    
    $("#block9").append(localStorage.getItem("9"));
    $("#block10").append(localStorage.getItem("10"));
    $("#block11").append(localStorage.getItem("11"));
    $("#block12").append(localStorage.getItem("12"));
    $("#block13").append(localStorage.getItem("13"));
    $("#block14").append(localStorage.getItem("14"));
    $("#block15").append(localStorage.getItem("15"));
    $("#block16").append(localStorage.getItem("16"));
    $("#block17").append(localStorage.getItem("17"));
})

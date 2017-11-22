$(document).ready(function() {


    var wins = 0;
    var losses = 0;
    var randomNumber;
    var score = 0;
    var start = true;

    randomNumber = Math.floor(Math.random() * (121 - 19) + 19);
    $("#match").text(randomNumber);
    console.log(randomNumber);

    var jewel1 = Math.floor(Math.random() * 12) + 1;
    console.log(jewel1);

    var jewel2 = Math.floor(Math.random() * 12) + 1;
    console.log(jewel2);

    var jewel3 = Math.floor(Math.random() * 12) + 1;
    console.log(jewel3);

    var jewel4 = Math.floor(Math.random() * 12) + 1;
    console.log(jewel4);

    $("#jewel1").on("click", function() {
        score = score + jewel1;
        $("#score").text(score);
    });

    $("#jewel2").on("click", function() {
        score += jewel2;
        $("#score").text(score);
    });

    $("#jewel3").on("click", function() {
        score += jewel3;
        $("#score").text(score);
    });

    $("#jewel4").on("click", function() {
        score += jewel4;
        $("#score").text(score);
    });


    if (score === randomNumber) {
        wins++;
        console.log(wins);
        start = true;
    } else if (score > randomNumber) {
        losses++;
        console.log(losses);
        start = true;
    }







});
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var randomNumber;
    var score = 0;
    var start = true;
    var j1;
    var j2;
    var j3;
    var j4;

    function random() {
        $("#score").text(score);

        randomNumber = Math.floor(Math.random() * (121 - 19) + 19);
        $("#match").text(randomNumber);

        j1 = Math.floor(Math.random() * 12) + 1;
        j2 = Math.floor(Math.random() * 12) + 1;
        j3 = Math.floor(Math.random() * 12) + 1;
        j4 = Math.floor(Math.random() * 12) + 1;
        start = false;
    };


    function checkForWin() {
        if (score === randomNumber) {
            wins++;
            $("#wins").text(wins);
            $("#score").text(score);
            reset();

        } else if (score > randomNumber) {
            losses++;
            $("#losses").text(losses);
            $("#score").text(score);
            reset();
        }
    };

    function reset() {
        start = true;
        randomNumber;
        score = 0;
        $("#match").text(randomNumber);
        $("#score").text(score);
        random();

    };

    if (start === true) {
        random();
    }

    if (start === false && score < randomNumber) {

        $("#jewel1").on("click", function() {
            score += j1;
            $("#score").text(score);
            checkForWin();
        });

        $("#jewel2").on("click", function() {
            score += j2;
            $("#score").text(score);
            checkForWin();
        });

        $("#jewel3").on("click", function() {
            score += j3;
            $("#score").text(score);
            checkForWin();
        });

        $("#jewel4").on("click", function() {
            score += j4;
            $("#score").text(score);
            checkForWin();
        });
    }




});
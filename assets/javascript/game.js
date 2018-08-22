$(document).ready(function () {
    var compNum = Math.floor(Math.random() * 101 + 19)

    $('#randomNum').text(compNum);

    var num1 = Math.floor(Math.random() * 12) + 1;
    var num2 = Math.floor(Math.random() * 12) + 1;
    var num3 = Math.floor(Math.random() * 12) + 1;
    var num4 = Math.floor(Math.random() * 12) + 1;

    var wins = 0;
    var losses = 0;
    var userNum = 0;

    $('#totalWins').text(wins);
    $('#totalLosses').text(losses);
    console.log(compNum);

    function reset() {
        compNum = Math.floor(Math.random() * 101 + 19);
        console.log(compNum)
        $('#randomNum').text(compNum);
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        num3 = Math.floor(Math.random() * 12) + 1;
        num4 = Math.floor(Math.random() * 12) + 1;
        userNum = 0;
        $('#currentTotal').text(userNum);
    }
    function gameWin() {
        wins++;
        $('#totalWins').text(wins);
        reset();
    }
    function gameLoss() {
        losses++;
        $('#totalLosses').text(losses);
        reset();
    }

    $('#one').on('click', function () {
        userNum = userNum + num1;
        console.log("New userNum= " + userNum);
        $('#currentTotal').text(userNum);

        if (userNum == compNum) {
            gameWin();
        } else if (userNum > compNum) {
            gameLoss();
        }
    })
    $('#two').on('click', function () {
        userNum = userNum + num2;
        console.log("New userNum= " + userNum);
        $('#currentTotal').text(userNum);

        if (userNum == compNum) {
            gameWin();
        } else if (userNum > compNum) {
            gameLoss();
        }
    })
    $('#three').on('click', function () {
        userNum = userNum + num3;
        console.log("New userNum= " + userNum);
        $('#currentTotal').text(userNum);

        if (userNum == compNum) {
            gameWin();
        } else if (userNum > compNum) {
            gameLoss();
        }
    })
    $('#four').on('click', function () {
        userNum = userNum + num4;
        console.log("New userNum= " + userNum);
        $('#currentTotal').text(userNum);

        if (userNum == compNum) {
            gameWin();
        } else if (userNum > compNum) {
            gameLoss();
        }
    })
})
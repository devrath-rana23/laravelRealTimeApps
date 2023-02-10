import "./bootstrap";

const circleElement = document.getElementById("circle");
const timerElement = document.getElementById("timer");
const winnerElement = document.getElementById("winner");
const betElement = document.getElementById("bet");
const resultElement = document.getElementById("result");
Echo.channel("game").listen("RemainingTimeChanged", (ev) => {
    timerElement.innerText = ev.time;
    circleElement.classList.add("refresh");
    winnerElement.classList.add("d-none");
    resultElement.innerText = "";
    resultElement.classList.remove("text-success");
    resultElement.classList.remove("text-danger");
}).listen("WinnerNumberGenerated", (ev) => {
    let winner = ev.number;
    let bet = betElement.nextElementSibling[betElement.nextElementSibling.selectedIndex].innerText;
    circleElement.classList.remove("refresh");
    winnerElement.innerText = winner;
    winnerElement.classList.remove("d-none");
    if (bet === winner) {
        resultElement.innerText = "You WIN";
        resultElement.classList.add("text-success");

    } else {
        resultElement.innerText = "You LOSE";
        resultElement.classList.add("text-danger");
    }
})

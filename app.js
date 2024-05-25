let userscore = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const showWinner = (userwin,userchoice,computerchoice) => {
    if (userwin) {
        console.log("!you win");
        mess.innerText = `you win your ${userchoice} beats ${computerchoice}` ;
        mess.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    } else {
        computer++;
        compscorepara.innerText = computer;
        mess.innerText = `you lose ${computerchoice} beats your choice ${userchoice}`;
        mess.style.backgroundColor = "red";
    }
};

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    mess.innerText = "match was draw play again";
    mess.style.backgroundColor = "orange";
};

const playGame = (userchoice) => {
    const computerchoice = getComputerChoice();
    console.log("computer choice", computerchoice);

    if (userchoice === computerchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = computerchoice === "scissor";
        } else if (userchoice === "paper") {
            userwin = computerchoice === "rock";
        } else {
            userwin = computerchoice === "paper";
        }
        showWinner(userwin,userchoice,computerchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("click");
        playGame(userchoice);
    });
});

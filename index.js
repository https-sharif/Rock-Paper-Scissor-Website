const myheading = document.getElementById("myheading");
// let username = window.prompt("Enter your name: ");
// myheading.textContent += username === "" ? ", Guest" : `, ${username}`;
function show(){
    document.getElementById("getstarted").style.display = "block";
    document.getElementById("btncontainer").style.display = "none";
}
let playerWin = 0;
let computerWin =0;
let draw =0;
const hidden1 = document.getElementById("hidden1");
const outcomes = document.getElementById("outcomes");
const playercount = document.getElementById("player-count");
const computercount = document.getElementById("computer-count");
const drawcount = document.getElementById("draw-count");
const playerChoiceImg = document.getElementById("playerChoiceImg");
const computerChoiceImg = document.getElementById("computerChoiceImg");
function playGame(choice){
    hidden1.style.display = "flex";
    let random = Math.floor(Math.random()*3)+1;
    let string = '';
    if(random === 1){
        string = 'rock';
    }
    else if(random === 2){
        string = 'paper';
    }
    else{
        string = 'scissor';
    }
    compare(choice,string);
    display(choice,string);
}
function compare(choice1, choice2){
    if((choice1=='rock'&&choice2=='paper')||(choice1=='paper'&&choice2=='scissor')||(choice1=='scissor'&&choice2=='rock')){
        computerWin++;
        outcomes.textContent = `Computer win this round.`;
    }
    else if(choice1==choice2){
        draw++;
        outcomes.textContent = `Draw! Go again.`;
    }
    else{
        playerWin++;
        outcomes.textContent = `Player win this round.`;
    }
    playercount.textContent = `Player: ${playerWin}`;
    computercount.textContent = `Computer: ${computerWin}`;
    drawcount.textContent = `Draws: ${draw}`;
}
function display(choice, string){
    playerChoiceImg.innerHTML = "";
    computerChoiceImg.innerHTML = "";
    const img = document.createElement("img");
    const img2 = document.createElement("img");
    img.src = `${choice}.png`;
    img.classList.add("rps2");
    playerChoiceImg.appendChild(img);
    img2.src = `${string}.png`;
    img2.classList.add("rps2");
    computerChoiceImg.appendChild(img2);
}
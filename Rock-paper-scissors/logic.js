let userScore = 0, computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function convertToWord(ch){
    switch(ch){
        case 'r': return "Rock";
        case 'p': return "Paper";
        case 's': return "Scissors";
    }
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout( function() { document.getElementById(userChoice).classList.remove('green-glow')} , 300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( () => document.getElementById(userChoice).classList.remove('red-glow') , 300);
}

function draw(userChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Both ${convertToWord(userChoice)} and hence Draw`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout( function() { document.getElementById(userChoice).classList.remove('gray-glow')} , 300);
}

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'sp':
        case 'pr':
        case 'rs':
            win(userChoice, computerChoice);
            break;
        case 'ps':
        case 'rp':
        case 'sr':
            lose(userChoice,computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
    game("r");
})

paper_div.addEventListener('click', function(){
    game("p");
})

scissors_div.addEventListener('click', function(){
    game("s");
})

}

main();
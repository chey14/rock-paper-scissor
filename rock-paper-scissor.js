let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); // returns a node list

const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const genComputerChoice=()=>{
    let options=["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
}

const ShowWinner=(UserWinner,UserChoice,CompChoice)=>{
    if(UserWinner){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win ! Your ${UserChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YouLost ! ${CompChoice} beats ${UserChoice} `;
        msg.style.backgroundColor="red";
    }

}

const playgame=(UserChoice)=>{
    const CompChoice=genComputerChoice();

    if(UserChoice===CompChoice){
       drawGame();
    }
    else{
        let userWin=true;
        if(UserChoice==="rock"){
            userWin=CompChoice==="paper"?false:true;
        }
        else if(UserChoice==="paper"){
            userWin=CompChoice==="rock"?true:false;
        }
        else{ // userchoice is scissor
            userWin=CompChoice==="rock"?false:true;
        }
        ShowWinner(userWin,UserChoice,CompChoice);
    }
   


}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
        playgame(UserChoice);
    })

})
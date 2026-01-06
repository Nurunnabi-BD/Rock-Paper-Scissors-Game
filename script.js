let userScor=0;
let comScor=0;
let userS=document.querySelector("#userS");
let CompS=document.querySelector("#compS");
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choices");
let select=["rock", "paper", "scissors"];

let winner=document.querySelector("#result");


const rendomGen=()=>{
    const indx=Math.floor(Math.random()*3);
    return select[indx];
};

const finalWinner=(userWin,comChoice,userChoice)=>{
    if(userWin)
    {
        winner.innerText="You Win";
        winner.style.backgroundColor="green";
        msg.innerText=`Computer Choice ${comChoice} And You Choice ${userChoice}`;
        userScor++;
    }
    else{
        winner.innerText="Computer Win";
        winner.style.backgroundColor="red";
        msg.innerText=`Computer Choice ${comChoice} And You Choice ${userChoice}`;
        comScor++;
    }
};

const draw=(comChoice,userChoice)=>{
    winner.innerText="Draw";
    winner.style.backgroundColor="#37123C";
    msg.innerText=`Computer Choice ${comChoice} And You Choice ${userChoice}`;
};


const playGame=(userChoice)=>{
    const comChoice=rendomGen();
    if(userChoice===comChoice){
        draw(comChoice,userChoice);
    }
    else{
        let userWin=true;
        if(userChoice=="rock")
        {
            userWin= (comChoice==="paper")?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin= (comChoice==="scissors")?false:true;
        }else{
            userWin=(comChoice==="rock")?false:true;
        }
        finalWinner(userWin,comChoice,userChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        userS.innerText=userScor;
        CompS.innerText=comScor;
    });
});
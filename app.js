let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".mag-container");
let msg=document.querySelector("#msg");
let turnO=true;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText="O";
        box.classList.remove("box");
        box.classList.add("changeColor");
        turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("box");
            box.classList.remove("changeColor");
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Conguratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner");

                showWinner(pos1Val);
            }
        }
    }
};

const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");

};

newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
let boxes= document.querySelectorAll(".box");
let newBtn = document.getElementById("newBtn");
let statusText= document.getElementById("statusText");

let turn = true
statusText.innerHTML="let's start with O's turn"
  
const winningcombos = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn){
            box.innerText= "O"
            turn= false
            statusText.innerHTML="X's turn"
        }
        else{
            box.innerText = "X"
            turn = true
            statusText.innerHTML="O's turn"
        }
       box.disabled=true
       checkWinner();
    });
});

    boxes.forEach((box)=>{
        newBtn.addEventListener("click",()=>{
            box.innerText=""
            statusText.innerHTML="let's start with O's turn"
            box.disabled=false
            turn = true
    })
    })



const checkWinner=() =>{
 for(let pattern of winningcombos){
   let posval1=boxes[pattern[0]].innerText
   let posval2=boxes[pattern[1]].innerText
   let posval3=boxes[pattern[2]].innerText

  
   if(posval1 != "" && posval2 != "" && posval3 !=""){
    if(posval1 == posval2 && posval2 ==posval3){
        statusText.innerText= `Congratulations,  winner is  ${posval1}`
      
        // pattern.map(box =>
        //     boxes[box].style.backgroundColor="red"
        // )


       boxes.forEach((box)=>{
        box.disabled=true
      })
    // disabledBoxes();
    }
   } 
 }
}

// const disabledBoxes = () =>{
//     for(let box of boxes){
//         box.disabled=true
//     }
// }

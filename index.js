let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let startgame= false;
let divs= document.getElementsByClassName("card-inner"); // gives us html collection
let count = 0;
let checkarr = []
function start(){
body.addEventListener("keypress",function(event){
   if(event.key==="Enter" && startgame===false){
    console.log("game started")
     h2.textContent="Game Has Started"
     
   }
   startgame= true;
})
  // game is started
for(let i=0;i<divs.length;i++){
   divs[i].addEventListener("click",()=>{
 
    if(startgame==true){
       console.log("we have clicked the card",divs[i])

    if(count<2 && checkarr.includes(divs[i])==false){
         checkarr.push(divs[i]);
        flipcard(divs[i])
       count++;

    }
     else if(count===2){
       setTimeout(() => {
            checkarr.forEach(card => card.classList.remove("flipped"));
            checkarr = [];
            count = 0;
          }, 3000);
     }
    } // cards flipped 
     
    else{
      alert("PRESS ENTER TO START THE GAME")
    }
    
   })
}

}
function flipcard(obj){
obj.classList.add("flipped"); 
setTimeout(()=>{
obj.classList.remove("flipped");
},3000)
}
start();


let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let startgame= false;
let divs = document.getElementsByClassName("card-inner"); // gives us html collection
let count = 0;
let win = 0;
let checkarr = []
let divarr = ["🍎","🍎","🍌","🍌","🍇","🍇","🍉","🍉","🥝","🥝","🍍","🍍","🍓","🍓","🥥","🥥"]
let checking = false;
let winsound = new Audio("winningsound.mp3")
let clickSound = new Audio("clicksound.mp3");
function start(){
  body.addEventListener("keypress",function(event){
    if(event.key==="Enter" && startgame===false){
      console.log("game started")
      h2.textContent="Game Has Started"
    }
    startgame= true;
  })

  for(let i=0;i<divs.length;i++){
    divs[i].addEventListener("click",()=>{

      if(startgame==true){
        if(checking ===true){
            return ;
        }
clickSound.currentTime = 0; 
      clickSound.play();
        console.log("we have clicked the card",divs[i])

        if(count<2 && checkarr.includes(divs[i])==false){
          checkarr.push(divs[i]);
          flipcard(divs[i])
          count++;
          console.log(count)
        }
        if(count===2){
            checking = true 
          let firstEmoji = checkarr[0].querySelector(".card-back").textContent;
          let secondEmoji = checkarr[1].querySelector(".card-back").textContent;
            
          if(firstEmoji === secondEmoji){
          win++;
            checkarr = [];
            count = 0;
            checking = false;
 if(win==8){
    h2.innerText = "🎉  C O N G R A T S!     Y O U         W O N  🎉"
    winsound.play();
  }
          }
          else{
            setTimeout(() => {
              checkarr.forEach(card => card.classList.remove("flipped"));
              checkarr = [];
              count = 0;
              checking = false
            }, 1000);
          }
        }
      } 
      else{
        alert("PRESS ENTER TO START THE GAME")
      }

    })
  }
 
}
function flipcard(obj){
  obj.classList.add("flipped"); 
}

function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    let random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  } 

  for(let i = 0;i<divarr.length;i++){
    divs[i].querySelector(".card-back").textContent = arr[i];
  } 
  console.log(divs)

}
shuffle(divarr);
start();

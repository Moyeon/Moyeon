export default function Document() {
    return (
      <div className="wrap">
      <iframe
      srcDoc={`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Let's Play Blackjack</title>
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
              body{
                  user-select: none;
              }
              .box{
                  display: flex;
                  align-items: center;
                  font-family: 'Comfortaa', courier;
                  font-size: 20px;
              }
              .cards{
                  display: flex;
                  align-items: center;
                  overflow-x: auto;
                  width: 100vw - 120px;
              }
              ::-webkit-scrollbar{
                  width: 0;
              }
              .card{
                  width: 100px;
                  height: 140px;
                  background-color: ghostwhite;
                  border: 1px solid black;
                  border-radius: 5px;
                  margin: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transform: rotateY(180deg);
                  transition: all ease 1s;
                  backface-visibility: hidden;
                  flex: none;
                  user-select: none;
              }
              .text{
                  width: 100px;
                  margin-left: 10px;
                  flex: none;
              }
              button{
                  font-family: 'Comfortaa';
                  font-size: 20px;
                  padding: 10px;
                  margin: 8px;
              }
              .open{
                  transform: rotateY(0);
              }
          </style>
      </head>
      <body>
          <div class="box">
              <div class="text">AI</div>
              <div class="cards" id="ai"></div>
          </div>
          <div class="box">
              <div class="text">Player</div>
              <div class="cards" id="player"></div>
          </div>
          <button onclick="start();">Start</button>
          <button onclick="hit();">Hit</button>
          <button onclick="stop();">Stop</button>
      
          <script>
              var AInums = [];
              var AIcards = [];
              var AIbox = document.getElementById("ai");
              var AIopened = 0;
              var AIscore = 0;
      
              var playernums = [];
              var playercards = [];
              var playerbox = document.getElementById("player");
              var playeropened = 0;
              var playerscore = 0;
      
              var isPlaying = false;
      
              function randomCardAI(){
                  var num = Math.floor( Math.random() * 10 ) + 1;
                  AInums.push(num);
      
                  var card = document.createElement("div");
                  card.classList = "card";
                  card.innerHTML = num;
                  AIcards.push(card);
                  AIbox.appendChild(card);
              }
      
              function randomCardPlayer(){
                  var num = Math.floor( Math.random() * 10 ) + 1;
                  playernums.push(num);
      
                  var card = document.createElement("div");
                  card.classList = "card";
                  card.innerHTML = num;
                  playercards.push(card);
                  playerbox.appendChild(card);
              }
      
              function start(){
                  AIbox.innerHTML = '';
                  AInums = [];
                  AIcards = [];
                  AIopened = 0;
                  AIscore = 0;
                  playerbox.innerHTML = '';
                  playernums = [];
                  playercards = [];
                  playeropened = 0;
                  playerscore = 0;
                  isPlaying = true;
      
                  randomCardPlayer();
                  randomCardPlayer();
                  randomCardAI();
                  
                  setTimeout(() => {
                      flip(false, 0);
                      flip(false, 1);
                      flip(true, 0);
                  }, 100);
                  
              }
      
              function flip(who, cardnum){
                  if(who==true){
                      AIcards[cardnum].classList.add("open");
                      AIscore += AInums[cardnum];
                      AIopened++;
                      randomCardAI();
                  }else{
                      playercards[cardnum].classList.add("open");
                      playerscore += playernums[cardnum];
                      playeropened++;
                      randomCardPlayer();
                  }
              }
      
              function hit(){
                  if(isPlaying){
                      flip(true, AIopened);
                      flip(false, playeropened);
                      isOver();
                  }
                  
              }
      
              function stop(){
                  if(isPlaying){
                      flip(true, AIopened);
                      if(AIscore < playerscore){
                          setTimeout(stop, 500);
                      }else if(AIscore > 21){
                          win();
                      }else{
                          lose();
                      }
                  }
                  
              }
      
              
      
              function onMouseClick(event){
                  var startX = event.pageX - this.offsetLeft;
                  var startScroll = this.scrollLeft;
      
                  function onMouseMove(event){
                      var x = event.pageX - this.offsetLeft;
                      var walk = (x - startX)*3;
                      this.scrollLeft = startScroll - walk;
                  }
                  this.addEventListener("mousemove", onMouseMove);
      
                  function onMouseUp(event){
                      AIbox.removeEventListener("mousemove", onMouseMove);
                      playerbox.removeEventListener("mousemove", onMouseMove);
                  }
                  document.addEventListener("mouseup", onMouseUp);
              }
      
              AIbox.addEventListener("mousedown", onMouseClick);
              playerbox.addEventListener("mousedown", onMouseClick);
      
      
              function win(){
                  setTimeout( ()=>{
                      alert("You win! ᵔᴥᵔ");
                      isPlaying = false;
                  } , 1000);
              }
      
              function lose(){
                  setTimeout(() => {
                      alert("You lose! (ᗒᗣᗕ)՞");
                      isPlaying = false;
                  }, 1000);
              }
      
              function isOver(){
                  if(playerscore > 21){
                      lose();
                  }else if(AIscore > 21){
                      win();
                  }
              }
      
              function whoWin(){
                  if(playerscore > AIscore){
                      win();
                  }
                  else{
                      lose();
                  }
              }
          </script>
      </body>
      </html>`}
      title="Embedded Blackjack Game"
      width="100%"
      height="100%"
      frameBorder="0"
      ></iframe>     
      </div>     
  );
};
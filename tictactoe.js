//JS code goes here
var turn = false;
var player1 = '';
var player2 = '';
var countFunc = 0;
var p1Won = 0;
var p2Won =0;
var p1Lost =0;
var p2Lost =0;
var Draw = false;
var gameStop =false;
var count=0;
function play(event){
  console.log(event);
    if(!event.target.innerText && gameStop == false){
    event.target.innerText= turn? "O":"X";
    count++;
    document.getElementById("GameStatus").innerHTML = "Game in Progress!";
    checkWinner();
    turn =!turn;
    }
    else{
      alert("Restart Game!")
    }
}
//8 winning conditions
function checkWinner() {
//1st row
  if( (document.getElementById("0").innerHTML == document.getElementById("1").innerHTML) && (document.getElementById("0").innerHTML == document.getElementById("2").innerHTML ) && document.getElementById("0").innerHTML != "" ){
    console.log("1st row");
    if(turn == false){
      console.log("player1 Won");
      p1Won++;
      document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
      document.getElementById("p1Win").innerHTML = p1Won;
      p2Lost++;
      document.getElementById("p2Loss").innerHTML = p2Lost;
      gameStop = true;
    }
    else {
        console.log(
          "player2"
        );
        p2Won++;
        document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
        document.getElementById("p2Win").innerHTML = p2Won;
        p1Lost++;
          document.getElementById("p1Loss").innerHTML = p1Lost;
          gameStop = true;
    }
  }

//2nd row
  else if (document.getElementById("3").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("5").innerHTML && document.getElementById("5").innerHTML != "") {
    console.log("2nd row");

    if(turn == false){
      console.log("player1");
      p1Won++;
      document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
      document.getElementById("p1Win").innerHTML = p1Won;
      p2Lost++;
      document.getElementById("p2Loss").innerHTML = p2Lost;
      gameStop = true;

    }
    else {
        console.log(
          "player2"
        );
        p2Won++;
        document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
        document.getElementById("p2Win").innerHTML = p2Won;
        p1Lost++;
        document.getElementById("p1Loss").innerHTML = p1Lost;
        gameStop = true;

    }
  }

//3rd row
  else if (document.getElementById("6").innerHTML == document.getElementById("7").innerHTML && document.getElementById("7").innerHTML == document.getElementById("8").innerHTML && document.getElementById("8").innerHTML != "") {
    console.log("3rd row");
    if(turn == false){
      console.log("player1");
      p1Won++;
      document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
      document.getElementById("p1Win").innerHTML = p1Won;
      p2Lost++;
      document.getElementById("p2Loss").innerHTML = p2Lost;
      gameStop = true;
    }
    else {
        console.log(
          "player2"
        );
        p2Won++;
        document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
        document.getElementById("p2Win").innerHTML = p2Won;
        p1Lost++;
        document.getElementById("p1Loss").innerHTML = p1Lost;
        gameStop = true;
    }
  }

//1st col
  else if (document.getElementById("0").innerHTML == document.getElementById("3").innerHTML && document.getElementById("3").innerHTML == document.getElementById("6").innerHTML && document.getElementById("6").innerHTML != "") {
    console.log("1st col");
    if(turn == false){
      console.log("player1");
      p1Won++;
      document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
      document.getElementById("p1Win").innerHTML = p1Won;
      p2Lost++;
      document.getElementById("p2Loss").innerHTML = p2Lost;
      gameStop = true;
    }
    else {
        console.log(
          "player2"
        );
            p2Won++;
            document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
            document.getElementById("p2Win").innerHTML = p2Won;
            p1Lost++;
            document.getElementById("p1Loss").innerHTML = p1Lost;
            gameStop = true;

    }
  }

//2nd col
    else if (document.getElementById("1").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("7").innerHTML && document.getElementById("7").innerHTML != "") {
      console.log("2nd col");
      if(turn == false){
        console.log("player1");
        p1Won++;
        document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
        document.getElementById("p1Win").innerHTML = p1Won;
        p2Lost++;
        document.getElementById("p2Loss").innerHTML = p2Lost;
        gameStop = true;
      }
      else {
          console.log(
            "player2"
          );

          p2Won++;
          document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
          document.getElementById("p2Win").innerHTML = p2Won;
          p1Lost++;
          document.getElementById("p1Loss").innerHTML = p1Lost;
          gameStop = true;

      }
  }
//3rd col
  else if (document.getElementById("2").innerHTML == document.getElementById("5").innerHTML && document.getElementById("5").innerHTML == document.getElementById("8").innerHTML && document.getElementById("8").innerHTML != "") {
    console.log("3rd col");
    if(turn == false){
      console.log("player1");
      p1Won++;
      document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
      document.getElementById("p1Win").innerHTML = p1Won;
      p2Lost++;
      document.getElementById("p2Loss").innerHTML = p2Lost;
      gameStop = true;
    }
    else {
        console.log(
          "player2"
        );
        p2Won++;
        document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
        document.getElementById("p2Win").innerHTML = p2Won;
        p1Lost++;
        document.getElementById("p1Loss").innerHTML = p1Lost;
        gameStop = true;
      }
  }

//1st diagonal
    else if (document.getElementById("0").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("8").innerHTML && document.getElementById("8").innerHTML != "") {
      console.log("1st diagon alley");
      if(turn == false){
        console.log("player1");
        p1Won++;
        document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
        document.getElementById("p1Win").innerHTML = p1Won;
        p2Lost++;
        document.getElementById("p2Loss").innerHTML = p2Lost;
        gameStop = true;
      }
      else {
          console.log(
            "player2"
          );
          p2Won++;
          document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
          document.getElementById("p2Win").innerHTML = p2Won;
          p1Lost++;
          document.getElementById("p1Loss").innerHTML = p1Lost;
          gameStop = true;
        }
  }

//2nd diagonal
    else if (document.getElementById("2").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("6").innerHTML && document.getElementById("6").innerHTML != "") {
      console.log("2nd diagon alley");
      if(turn == false){
        console.log("player1");
        p1Won++;
        document.getElementById("GameStatus").innerHTML = "Player 1 wins!";
        document.getElementById("p1Win").innerHTML = p1Won;
        p2Lost++;
        document.getElementById("p2Loss").innerHTML = p2Lost;
        gameStop = true;
      }
      else {
          console.log(
            "player2"
          );
          p2Won++;
          document.getElementById("GameStatus").innerHTML = "Player 2 wins!";
          document.getElementById("p2Win").innerHTML = p2Won;
          p1Lost++;
          document.getElementById("p1Loss").innerHTML = p1Lost;
          gameStop = true;

      }

  }
  else if(count==9 && gameStop == false){
    document.getElementById("GameStatus").innerHTML = "Draw!";
    gameStop = true;
    alert("Draw!")
  }
}
function restartGame(){
  var x = document.getElementById("tictactoe_table").cells;
  for (var i = 0; i < 9; i++) {
      document.getElementById(i).innerText ="";
}
  gameStop = false;
  count=0;
  document.getElementById("GameStatus").innerHTML = "New Game";
}
document.getElementById("restart").addEventListener("click",function (event){
  console.log("workin?");
  restartGame();
})

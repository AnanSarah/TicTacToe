//JS code goes here
var turn = false;
var player1 = '';
var player2 = '';
var countFunc = 0;
var p1Won = 0;

function play(event){
  console.log(event);
    if(!event.target.innerText){
    event.target.innerText= turn? "0":"X";
    countFunc++ ;
//any winning state occurs after 5 turns
if(countFunc>4){
  checkWinner();
}
  turn =!turn;
  }
}

//8 winning conditions
function checkWinner() {

//1st row
  if( (document.getElementById("0").innerHTML == document.getElementById("1").innerHTML) && (document.getElementById("0").innerHTML == document.getElementById("2").innerHTML ) && document.getElementById("0").innerHTML != "" ){
    console.log("1st row");
    if(turn == false){console.log("player1 Won"); p1Won++; p1Won = document.getElementById("p1Won") ; }
    else {
      console.log(
        "player2"
      );
    }
  }

//2nd row
  else if (document.getElementById("3").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("5").innerHTML && document.getElementById("5").innerHTML != "") {
    console.log("2nd row");
    if(turn == false){console.log("player1");}
    else {
      console.log(
        "player2"
      );
    }
  }

//3rd row
  else if (document.getElementById("6").innerHTML == document.getElementById("7").innerHTML && document.getElementById("7").innerHTML == document.getElementById("8").innerHTML && document.getElementById("8").innerHTML != "") {
    console.log("3rd row");
    if(turn == false){console.log("player1");}
    else {
      console.log(
        "player2"
      );
    }
  }

//1st col
  else if (document.getElementById("0").innerHTML == document.getElementById("3").innerHTML && document.getElementById("3").innerHTML == document.getElementById("6").innerHTML && document.getElementById("6").innerHTML != "") {
    console.log("1st col");
    if(turn == false){console.log("player1");}
    else {
      console.log(
        "player2"
      );
    }
  }

//2nd col
    else if (document.getElementById("1").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("7").innerHTML && document.getElementById("7").innerHTML != "") {
      console.log("2nd col");
      if(turn == false){console.log("player1");}
      else {
        console.log(
          "player2"
        );
      }
  }

//3rd col
  else if (document.getElementById("2").innerHTML == document.getElementById("5").innerHTML && document.getElementById("5").innerHTML == document.getElementById("8").innerHTML && document.getElementById("8").innerHTML != "") {
    console.log("3rd col");
    if(turn == false){console.log("player1"); }
    else {
      console.log(
        "player2"
      );
    }
  }

//1st diagonal
    else if (document.getElementById("0").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("8").innerHTML && document.getElementById("8").innerHTML != "") {
      console.log("1st diagon alley");
      if(turn == false){console.log("player1");}
      else {
        console.log(
          "player2"
        );
      }
  }

//2nd diagonal
    else if (document.getElementById("2").innerHTML == document.getElementById("4").innerHTML && document.getElementById("4").innerHTML == document.getElementById("6").innerHTML && document.getElementById("6").innerHTML != "") {
      console.log("2nd diagon alley");
      if(turn == false){console.log("player1");}
      else {
        console.log(
          "player2"
        );
      }
  }
}

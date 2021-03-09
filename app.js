var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];

const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');
console.log(player1_Button);

player1_Button.addEventListener('click',rollDice_1); // oncliking player1 button, w'll call rollDice
player2_Button.addEventListener('click',rollDice_2);  // oncliking player2 button, w'll call rollDice method

// defining data for each player

var player1=["ProGrad", 0, 1000]; // name, position, money
var player2=["FACEPrep", 0, 1000];

//Player 1 and Player 2 Rolling Dice
// every player will roll the dice, based on dice position, the player will navigate to that particular board location

function rollDice_1(){
    let position=Math.floor(Math.random()*6)+1; // to generate random number between 1 to 6, since a dice has 6 sides
    console.log("Player two rolls", position)
    changePosition_1(player1[1],position); // once we got the position, update the players position in the board
}

function rollDice_2(){
    let position=Math.floor(Math.random()*6)+1;
   // console.log("Player two rolls", position)
    changePosition_2(player2[1],position); // passing 2 parameter to change position2
}

//Player 1 and Player 2 Position

function changePosition_1(old,currentPos){
    var newPosition=old+currentPos;
    player1[1]=newPosition; // once we got the new position, we need to update the players position,
    console.log(player1[1]); // based on position in the board we need to substract the money which the player has.
    updateMoney_1(player1[1]); // passing the value of player1 position
}

function changePosition_2(old,currentPos){
    var newPosition=old+currentPos;
    player2[1]=newPosition;
   // console.log(player2[1]);
    updateMoney_2(player2[1]);
}

// Update the Money

function updateMoney_1(p1){
    var updateMoney=0;
    if(p1<board.length) // the player has to rotate again 16*16
    updateMoney=player1[2]-board[p1-1];
    else{
        p1=p1%15;
        updateMoney=player1[2]-board[p1-1];
    }
    console.log(updateMoney);
}

function updateMoney_2(p2){
    var updateMoney=0;
    if(p2<board.length)
    updateMoney=player2[2]-board[p2-1];
    else{
        p2=p2%15;
        updateMoney=player2[2]-board[p2-1];
    }
    //console.log(updateMoney);
}
var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');

class Player{ // every player has name, every player starts from a position, and each individual player has 1000 bucks.
    constructor(name,position,money){
        this.name=name;
        this.position=position;
        this.money=money;
    }
rollDice(){
    let pos=Math.floor(Math.random()*6)+1;
    console.log(pos);
    this.updatePosition(pos); // this function will return from rollDice
}

updatePosition(pos){
    this.position+=pos; // new position
    console.log(this.position);
    this.updateMoney(); // update the money part
}

updateMoney(){
    if(this.position<board.length)
    this.money-=board[this.position];
    else{
        this.position %=15; // since the index position starts from zero
        this.money-=board[this.position];
    }
    console.log(player1);
    console.log(player2);
}
}

let player1 = new Player("HCL", 0,1000);
let player2 = new Player("TCS", 0,1000);

player1_Button.addEventListener('click', function(){
    player1.rollDice();

},false);

player2_Button.addEventListener('click', function(){
    player2.rollDice();

},false);
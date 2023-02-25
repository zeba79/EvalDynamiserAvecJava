let result;

let rollonBtn  = () => {
  let roll = Math.floor(Math.random()*6+1);
return roll;
};

let rollOn = ()=>{
  result  = rollonBtn();
  let currentplayer1 = document.getElementById('currentplayer1');
  currentplayer1.textContent = result;

  let displayDice = document.getElementById('dicedisplay');
  displayDice.src = 'img/dice' + result + '.png';

let hold = document.getElementById('hold');
hold.addEventListener('click' , () =>{
  let roundPlayer1 = document.getElementById('roundplayer1');
  roundPlayer1.textContent = result + result;
})
}

let rollDice = document.getElementById('rolldice');
rollDice.addEventListener('click', rollOn)




  
let rollDice = document.getElementById('rolldice');
rollDice.addEventListener('click', () =>{
    
  let rollon  = () => {
    let roll = Math.floor(Math.random()*6+1);
  return roll;
};

const diceImg = {
    '2' : "<img src=./img/dice2.png \ width=\"80\" height=\"80\" \>",
    '3' : "<img src=./img/dice3.png \ width=\"80\" height=\"80\" \>",
    '4' : "<img src=./img/dice4.png \ width=\"80\" height=\"80\" \>",
    '1' : "<img src=./img/dice1.png \ width=\"80\" height=\"80\" \>" ,
    '5' : "<img src=./img/dice5.png \ width=\"80\" height=\"80\" \>",
    '6' : "<img src=./img/dice6.png \ width=\"80\" height=\"80\" \>",
  };

  const result = rollon();

  let displayDice = document.getElementById('dicedisplay')
  displayDice.innerHTML = (diceImg[result]);

  console.log(result);
});


  
let rollDice = document.getElementById('rolldice');
rollDice.addEventListener('click', () =>{
    
  let rollon  = () => {
    let roll = Math.floor(Math.random()*6+1);
  return roll;

};

const diceImg = {
    '1' : "<img src=./img/dice1.png\>" ,
    '2' : "<img src=./img/dice2.png\>",
    '3' : "<img src=./img/dice3.png\>",
    '4' : "<img src=./img/dice4.png\>",
    '5' : "<img src=./img/dice5.png\>",
    '6' : "<img src=./img/dice6.png\>",
  };

  const result = rollon();

  let displayDice = document.getElementById('dicedisplay')
  displayDice.innerHTML = (diceImg[result]);

  console.log(result);
});


  
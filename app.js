let result;
let rollDice = document.getElementById('rolldice');
rollDice.addEventListener('click', () =>{
    
  let rollon  = () => {
    let roll = Math.floor(Math.random()*6+1);
  return roll;
};



  result  = rollon();

  let displayDice = document.getElementById('dicedisplay');
  displayDice.src = 'img/dice' + result + '.png';
  
  // affichage resultat du score courant joueur 1
  let currentScore = ` <p id ="currentplayer1">${result}</p>`
   let currentPlayer1 = document.getElementById('currentplayer1');
  currentPlayer1.innerHTML = currentScore;

    // affichage resultat du score global joueur 1
  
});

let hold = document.getElementById('hold');
hold.addEventListener('click' , () =>{
  let roundPlayer1 = document.getElementById('roundplayer1');
  roundPlayer1.innerHTML = result + result;

})




  
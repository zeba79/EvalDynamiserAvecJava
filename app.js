// déclarer le résultat du lancer du dé
let result;

// Lancer le dé
let rollonBtn  = () => {
  let roll = Math.floor(Math.random()*6+1);
return roll;
};


let rollOn = ()=>{
  // Récupérer le résultat du lancer
  result  = rollonBtn();

  // Récupérer le bouton currentplayer1
  let currentplayer1 = document.getElementById('currentplayer1');
  
  // Ajouter du texte à currentplayer1
  currentplayer1.textContent = result;

  //  Récupérer le bouton d'affichage du dé
  let displayDice = document.getElementById('dicedisplay');
  
    // Afficher le dé
  displayDice.src = 'img/dice' + result + '.png';
}

//  Récupérer le bouton lancer le dé
let rollDice = document.getElementById('rolldice');

// Exécuter le lancer du dé lors du click
rollDice.addEventListener('click', rollOn)

let boub = () =>{
  //  Récupérer le bouton roundplayer1
  let roundPlayer1 = document.getElementById('roundplayer1');
  
  // Ajouter du texte à roundplayer1
  roundPlayer1.textContent = result + result;
};

//  Récupérer le bouton HOLD
let hold = document.getElementById('hold');

// Exécuter le bouton HOLD lors du click
hold.addEventListener('click', boub);

// Récupérer le bouton newgame
let newgame = document.getElementById('newgame');

let newGamer = () => {
  currentplayer1.textContent = 0;
}

// Exécuter le bouton Newgame lors du click
newgame.addEventListener('click', newGamer);


  
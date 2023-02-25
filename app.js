// déclarer le résultat du lancer du dé
let result;

// Lancer le dé
let rollonBtn  = () => {
  let roll = Math.floor(Math.random()*6+1);
return roll;
};

 // Récupération des boutons
let currentplayer1 = document.getElementById('currentplayer1');
let currentplayer2 = document.getElementById('currentplayer2');
let displayDice = document.getElementById('dicedisplay');
let rollDice = document.getElementById('rolldice');
let roundPlayer1 = document.getElementById('roundplayer1');
let newgame = document.getElementById('newgame');

let rollOn = ()=>{
  // Récupérer le résultat du lancer
  result  = rollonBtn();
    
  // Ajouter du texte à currentplayer1
  currentplayer1.textContent = result;

    // Afficher le dé
  displayDice.src = 'img/dice' + result + '.png';
}

// Exécuter le lancer du dé lors du click
rollDice.addEventListener('click', rollOn)


// initialiser le bouton roundplayer1
let holder = () =>{
  
  // Ajouter du texte à roundplayer1
  roundPlayer1.textContent = result + result;
};

//  Récupérer le bouton HOLD
let hold = document.getElementById('hold');

// Exécuter le bouton HOLD lors du click
hold.addEventListener('click', holder);

let newGamer = () => {
  currentplayer1.textContent = 0;
  currentplayer2.textContent = 0;
}

// Exécuter le bouton Newgame lors du click
newgame.addEventListener('click', newGamer);


  
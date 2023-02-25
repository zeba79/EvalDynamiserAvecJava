let rollDice = document.getElementById('rolldice');
rollDice.addEventListener('click', () =>{
  let rollon  = Math.floor(Math.random()*6+1);
  return rollon; 
  
})
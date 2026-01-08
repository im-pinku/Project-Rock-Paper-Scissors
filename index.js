getRandomInt = (max) => Math.floor(Math.random() * max);
// let getPlayerChoice = String(prompt("enter ur choice \n rock \n paper \n scissor \n or  else will random ")).toLowerCase;



 function Get_random(x){
    let y =getRandomInt(x);
    console.log(y)
    return y;
 }

   let round = 0;
 
 function get_playerChoice (){ 
   let x = prompt("enter ur choice \n rock \n paper \n scissor \n or  else will random ");

   console.log(x.toLowerCase());
   if (x.toLowerCase() =="rock"){
      return 0;
   }else if(x.toLowerCase() =="papper"){
      return 1;
   }else if(x.toLowerCase() =="scissor"){
      return 2;
   }else {
      console.log('randomming');
      return Get_random(3);
   }
 }


 function logic ( ){
   const x = get_playerChoice();
   const y = Get_random(3);
   
   if ( x === y){
      console.log("draw");   
      
      
   }else if (  x == 0 && y == 2 ||
               x == 1 && y == 0 ||
               x == 2 && y == 1  ){
               console.log("player win");  
               
         
   }else{
      console.log("computer win"); 
   
   } 
 }
  
 function games (){  
   logic()
 }

 games();
 

 //if highscore > (total round /2 ) game end
 
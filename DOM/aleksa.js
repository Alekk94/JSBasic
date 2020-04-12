
var globalScores, roundScore, activePlayer, gamePlaying, lastNumber;

newGame();






                        //===1. ROLL DICE===//





    document.querySelector(".btn-roll").addEventListener('click',function(){
    if (gamePlaying) {
            //**RANDOM NUMBER**//


                /* CHALLENGE 3
    Add another dice to the game, so that there are two dices now. 
    The player looses his current score when one of them is a 1.
    (Hint: you will need CSS to position the second dice, so take
    a look at the CSS code for the first one.)*/ 

    var dice1= Math.floor(Math.random()*6)+1;
    var dice2= Math.floor(Math.random()*6)+1;


 /******  zakomentarisano zbog challenge-a 3
    //var dice= Math.floor(Math.random()*6)+1;
    //console.log(dice);




    //**DISPLAY RIGHT NUMBER**/

        //1st way

            //document.querySelector('.dice').style.display="inline";
            //document.querySelector('.dice').src='dice-'+ dice +'.png';

        //or 2nd way (Better way) :

           /* zakomentarisano zbog challenge-a 3

    var dicePicture=document.querySelector('.dice');
    dicePicture.style.display='block';
    dicePicture.src='dice-'+ dice +'.png';
*/
    


   

    




    /* CHALLENGE 3
    Add another dice to the game, so that there are two dices now. 
    The player looses his current score when one of them is a 1.
    (Hint: you will need CSS to position the second dice, so take
    a look at the CSS code for the first one.)*/  
    
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
    document.getElementById('dice-1').src='dice-'+ dice1 +'.png';
    document.getElementById('dice-2').src='dice-'+ dice2 +'.png';


    if (dice1!==1 && dice2!==1){
        roundScore=roundScore+dice1+dice2;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;

    }else{
        nextPlayer(); }





/* zakomentarisano zbog challenge-a 3

        if (dice!==1){
            roundScore=roundScore+dice;
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
    
        }else{
            nextPlayer(); } */
    








 



/* CHALLLENGE 1 zakomentarisan zbog CHALLLENGE 3

    /*  CHALLLENGE 1
    
    1. A player looses his ENTIRE score when he rolls two 6 in a row. 
    After that, it's the next player's turn. (Hint: Always save the previous 
    dice roll in a separate variable)


    if (dice===6 && lastNumber===6){
        globalScores[activePlayer]=0;
        document.querySelector('#score-' + activePlayer).textContent=0;

         nextPlayer();
        
     
    }else if (dice!==1){
        roundScore=roundScore+dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;

    }else{
        nextPlayer(); }

    
  //CHALLLENGE 1 
     lastNumber=dice; 
     
*/
    



        
        /*

        document.querySelector('.dice').style.display="none";
        roundScore=0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
    
        activePlayer == 0 ? activePlayer=1 : activePlayer=0;

        //promjena sivog panela 
        
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
        
            //kako nismo podesili uslove, ovo ne funkcionise

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    
*/

    
        
}

});








                        //=== 2. HOLD ===//

                       
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){

        globalScores[activePlayer] += roundScore;
        document.querySelector('#score-'+ activePlayer).textContent=globalScores[activePlayer];




/* CHALLENGE 2

2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. (Hint: you can read 
that value with the .value property in JavaScript. This is a good 
oportunity to use google to figure this out :)*/


        var inputField = document.querySelector('.final-score').value;
        var winningScore;
        console.log(inputField);
        if (inputField){

            var winningScore=inputField;
        }else{
            winningScore=30;

        }


    
        /// zakomentarisano zbog challenge-a 2
        //if (globalScores[activePlayer] >=100){


         //CHALLENGE 2
        if (globalScores[activePlayer] >=winningScore){
           
            
            document.querySelector('#name-'+ activePlayer).textContent='WINNER!!';
            
            /// zakomentarisano zbog challenge-a 3
            //document.getElementById('dice').style.display='none';

            //CHALLENGE 3
            document.getElementById('dice-1').style.display='none';
            document.getElementById('dice-2').style.display='none';
            
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
    
        } else{
    
        nextPlayer();
    }
        
    }
    

 
});











//u nastavku funkcija gore kopirana

function nextPlayer(){

    //CHALLENGE 3
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
    roundScore=0;

     

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    ///pitati Z zasto 3x= ?????

    activePlayer === 0 ? activePlayer=1 : activePlayer=0;

    //promjena sivog panela 
    
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    
        //kako nismo podesili uslove, ovo ne funkcionise

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");



}







                        //=== 3. NEW GAME ===//

 /*
 document.querySelector('.btn-new').addEventListener('click', function(){

    newGame();

 });
 */

 //ili jos pametnije da ne koristimo anonimnu funkciju samo da bi 
 //nam pozvala drugu, NISI SE TOGA SJETILA IDIOTE :(


 document.querySelector('.btn-new').addEventListener('click', newGame);



 /*  NAPISALA NA POGRESNOM MJESTU - OVDJE UMJESTO 
 U  SKLOPU FUNKCIJE  NEWGAME

 //KOD NJEGA 
 document.querySelector('#name-0').textContent='Player 1';
 document.querySelector('#name-1').textContent='Player 2';


 // a kod mene
  document.getElementById


 document.getElementById('name-0').textContent='PLAYER 1';
 document.getElementById('name-1').textContent='PLAYER 2';

    */












 function newGame(){
    globalScores = [0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    
    //setovanje na nulu
    
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
    
    
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';

    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    /*
    obrati paznju, prvo uklanja active klasu kod prvog igraca
    jer ne moze znati ko je poslednji bio aktivan kada je 
    zatrazena nova igra
    Da se ne bi pojavile dvije klase, za svaki slucaj se ipak uklanja
    pa se onda dodaje. LOGIČNO :D

*/
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    
    }





/*                  gamePlaying=true;

a state variable simply tell us the condition of a system,
so that's the definition.
We need a state variable when we need to remember something
or the state of something.
In this case, this will be:   is our game playing
or is our game not playing?
*/



                        //=== 4. RULES ===//

document.querySelector('.btn-rules').addEventListener('click', function(){
    gamePlaying=true;
    alert ("\
    - The game has 2 players, playing in rounds \
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\
    - The first player to reach 100 points on GLOBAL score wins the game"
    );


});

                        //=== 5. EXIT ===//

document.querySelector('.btn-exit').addEventListener('click', function(){
    alert ("Are you sure you want to quit the game? ");
    window.location.href = "https://www.google.com/";
      
    
});

 


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. (Hint: Always save the previous 
dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. (Hint: you can read 
that value with the .value property in JavaScript. This is a good 
oportunity to use google to figure this out :)


3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1.
(Hint: you will need CSS to position the second dice, so take
a look at the CSS code for the first one.)
*/

















 const game = ()=> {
     let pScore = 0;
     let cScore = 0;

     //start the game
     const startGame = () => {
         const playBtn = document.querySelector('.intro button ');
         const introScreen = document.querySelector('.intro');
         const match = document.querySelector('.match'); 

         playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
         });
     };
     //play match
     const playMatch = () => {
         const options = document.querySelectorAll('.options button');
         const playerHand = document.querySelector('.player-hand');
         const computerHand = document.querySelector('.computer-hand');
         const hands = document.querySelectorAll('.hands img');

         hands.forEach(hand =>{
             hand.addEventListener('animationend', function(){
                 this.style.animation = '';
             });
         });
      
         //computer options
         const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function(){
                //the computer chioce
                const computerNumber = Math.floor(Math.random() * 3);  
                const computerChoise = computerOptions[computerNumber];
               
                setTimeout(() => {
                     //here is where we call compare hands 
                compareHands(this.textContent, computerChoise);

                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoise}.png`;

                }, 2000);

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });      
     };

     const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
     };

     const compareHands = (playerChoice, computerChoise) => {
        //Update text
        const winner = document.querySelector('.winner');
        //cheking for a tie
        if(playerChoice === computerChoise){
            winner.textContent = 'It as a tie';
            return;
        }
        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoise === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
     };


     //calling all the inner functions
     startGame();
     playMatch();
 };

 // starting the game function
 game();
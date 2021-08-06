const game = ()=>{
    
    let pScore=0;
    let cScore=0;

    //start the game
    const startGame=()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        } );
    };
    
    //Play Match
    const playMatch=()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand=>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });

        //Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click",function(){
            //Computer choice
            const computerNumber = Math.floor(Math.random() *3); //random genera un num entre 0 y 1, por eso multiplicamos x 3. Floor redondea    
            const computerChoice =  computerOptions[computerNumber];
            
            setTimeout(()=>{
                //Here is where we call compare hands
                compareHands(this.textContent,computerChoice);

                //Update Images
                playerHand.src ="./imgs/" + this.textContent + ".png";
                computerHand.src = `./imgs/${computerChoice}.png`;

            },2000);
            
           
            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
        
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }

    const compareHands =(playerChoice,computerChoice)=>{
        //Update text
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "Empate";
            return;//Termina la funcion
        }
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Ganaste!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Gana la compu :(";
                cScore++;
                updateScore();
                return;
            }

        }
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Gana la compu ;(";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Ganaste!";
                pScore++;
                updateScore();
                return;
            }

        }
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Gana la compu :(";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Ganaste!";
                pScore++;
                updateScore();
                return;
            }

        }

    }


    



    //Call all the inner functions
    startGame();
    playMatch();

};

//Start the game function
game();

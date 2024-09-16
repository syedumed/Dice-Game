var button = document.querySelector("button");
var gameWinner = document.querySelector(".heading h3");

button.addEventListener('click',() =>{
        // random number generation                
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        
        // update dice number

        document.querySelector(".player1").textContent = randomNumber1;
        document.querySelector(".player2").textContent = randomNumber2;
        var pointOne =document.querySelector(".pone span");
        var pointTwo =document.querySelector(".ptwo span");

        if(randomNumber1 > randomNumber2){
            pointOne.textContent = parseInt(pointOne.textContent) + 1;
        }else if(randomNumber1 < randomNumber2){
            pointTwo.textContent = parseInt(pointTwo.textContent) + 1;
        }
        if(pointOne.textContent == 10 ){
            gameWinner.textContent = "Player 1 Wins"
            setTimeout(() => {
                location.reload();
            }, 1000); 
        }else if(pointTwo.textContent == 10){
            gameWinner.textContent = "Player 2 Wins"
            setTimeout(() => {
                location.reload();
            }, 5000); 
        }
});
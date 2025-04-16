        var randomNumber, attemptCount;
    
        function startGame() {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            console.log("🎲 Random Number:", randomNumber);
            attemptCount = 10;
            document.getElementById("attempts").innerText = attemptCount;
            document.getElementById("guess").value = "";
            document.getElementById("guess").disabled = false;
            document.getElementById("result").innerHTML = "";
            document.getElementById("result").className = "fw-bold fs-5 mt-3 text-danger";
            document.getElementById("resetBtn").style.display = "none";
            document.getElementById("submitBtn").style.display = "block";
            document.getElementById("attemptLabel").style.display = "block";
        }
    
        function checkGuess() {
            let userGuess = document.getElementById("guess").value.trim();
            let result = document.getElementById("result");
    
            if (!userGuess) {
                result.innerHTML = "😏 Dude Number To Daal";
                return;
            }

            if( isNaN(userGuess)){
                result.innerHTML = "🫡 Saale Maine Number Bola Tha";
                return;
            }
    
            userGuess = parseInt(userGuess);
            if (userGuess < 1 ) {
                result.innerHTML = "🙄 Bro 0 Nahi Yaar";
                return;
            }
            if (userGuess > 100) {
                result.innerHTML = "🙄 Bro Thoda Jyada nahi Ho Gaya";
                return;
            }
    
            attemptCount--;
            document.getElementById("attempts").innerText = attemptCount;
    
            result.className = "fw-bold fs-5 mt-3 text-danger";
    
            switch (true) {
                case attemptCount <= 1:
                    result.classList.add("text-ultra");
                    break;
                case attemptCount <= 3:
                    result.classList.add("text-extreme");
                    break;
                case attemptCount <= 5:
                    result.classList.add("text-high");
                    break;
                case attemptCount <= 7:
                    result.classList.add("text-medium");
                    break;
                case attemptCount <= 9:
                    result.classList.add("text-low");
                    break;
            }
    
            switch (true) {
                case userGuess === randomNumber:
                    result.className = "fw-bold fs-5 mt-3 success-glow";
                    result.innerHTML = "🥹 Aakhir Tune muze Dhund Hi Liya Saale 🏆";
                    document.getElementById("attemptLabel").style.display = "none";
                    endGame();
                    break;
                case Math.abs(userGuess - randomNumber) <= 2:
                    if(userGuess < randomNumber) {
                        result.innerHTML = "😡 Saale Aandha Hai Kya Samne To Hu";
                    }
                    if(userGuess > randomNumber){
                        result.innerHTML = "😡 Saale Aandha Hai Kya Piche To Hu";
                    }
                    break;    
                case Math.abs(userGuess - randomNumber) <= 5:
                    if(userGuess < randomNumber){
                        result.innerHTML = "😊 Bro Tere Paas Hi Khada Hu Aage Dekh";
                    }
                    if(userGuess > randomNumber){
                        result.innerHTML = "😊 Bro Tere Paas Hi Khada Hu Piche Dekh";
                    }
                    break;   
                case Math.abs(userGuess - randomNumber) <= 10:
                    if(userGuess < randomNumber) {
                        result.innerHTML = "💡 Bro Tu Aas Pass Hi Hai I think Aage 🤫";
                    }
                    if(userGuess > randomNumber) {
                        result.innerHTML = "💡 Bro Tu Aas Pass Hi Hai I think Piche 🤫";
                    }
                    break;
                case Math.abs(userGuess - randomNumber) <= 20:
                    result.innerHTML = "⚠️ Aab Thoda Range main Hai Dude";
                    break;          
                case userGuess < randomNumber:
                    result.innerHTML = "🥲 Etna Chhota Nahi Hu Yaar";
                    break;
                case userGuess > randomNumber:
                    result.innerHTML = "🥲 Etna Bada Nahi Hu Yaar";
                    break;    
            }
    
            if (attemptCount === 0) {
                result.classList.add("text-ultra");
                result.innerHTML = `🤬 <b>Tu Nikal Aab</b> Saale Muze Dhund Nahi Paya ☹️ Main <b>${randomNumber}</b> Yaha Tha`;
                endGame();
            }
        }
    
        function endGame() {
            document.getElementById("submitBtn").style.display = "none";
            document.getElementById("resetBtn").style.display = "block";
            document.getElementById("guess").disabled = true;
        }
    
        function clearResult() {
            document.getElementById("result").innerHTML = "";
            document.getElementById("guess").value = "";
        }

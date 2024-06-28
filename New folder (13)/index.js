const hint=document.getElementById("hint");
const noOfGuessesRef=document.getElementById
("no-of-gueses");
const guessedNumsRef=document.getElementById
("guessed-nums");
const restartButton=document.getElementById("restart");
const game=document.getElementById("game");
const guessInput=document.getElementById("guess");
const checkButton=document.getElementById("check-btn");


let answer, noOfGuesses, guessedNumsArr;

const play = () => {
    const userGuess = guessInput.value;
    if(userGuess<1 || userGuess> 1000 || isNaN(userGuess)){
        alert("please enter a number between 1 and 1000.")
        return;
    }

    guessedNumsArr.PUSH(userGuess);
    noOfGuesses +=1;
    if(userGuess!=answer){
        if(userGuess<answer){
            hint.innerHTML="Too Low. Try Again!";
        }else{
            hint.innerHTML="Too High. Try Again!";
        }
        noOfGuesses.innerHTML=`<span>No.Of Guesses:</
        span> ${noOfGuesses}`;
        guessedNumsRef.innerHTML=`<span>Guesses numbers are: </sapn> 
        ${guessedNumsArr.join(
            ","
        )}`;
        hint.classList.remove("error");
        setTimeout(()=>{
            hint.classList.add("error");
        }, 10);
    }else{
        hint.innerHTML = `congratulations!<br>The Number Was
        <span>${answer}</span>.<br>You guessed the number in
        <span>${noOfGuesses}</span>tries.`;
        hint.classList.add("success");
        game.style.display="block";


    }


};

const init=()=>{
    console.log("Game started");
    answer=Math.floor(Math.random()*1000)+1;
    console.log(answer);
    noOfGuesses=0;
    guessedNumsArr=[];
    noOfGuessesRef.innerHTML="No.Of Guessess:0";
    guessedNumsRef.innerHTML="Guessed numbers are: None";
    guessInput.value="";
hint.classList.remove("success","error");
};

guessInput.addEventListener("keydown",(event)=>{
    if(event.keyCode===13){
        event.preventDefault();
        play();
    }
});

restartButton.addEventListener("click",()=>{
    game.style.display="grid";
    restartButton.style.display="none";
    hint.innerHTML="";
    hint.classList.remove("success");
    init();
});
checkButton.addEventListener("click", play);
window.addEventListener("load", init);



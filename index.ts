var max:number = 100;
function checkGuess() {
    const userInput: number = parseFloat((document.getElementById("userInput") as HTMLInputElement).value);
    var correctAnswer:number = Math.floor(Math.random()*max);
    if(userInput === correctAnswer){
        console.log(correctAnswer)
        console.log("correct")
    }else{
        console.log(correctAnswer)
        console.log(`${userInput} is wrong`)
    }
  }
  
  
  
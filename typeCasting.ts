//version  1 type casting
const userInput = <HTMLInputElement>document.getElementById("user-input"); //type casting in dom manupulation
const userInput2 = document.getElementById("user-input")! as HTMLInputElement; //version 2
userInput.value = "Hi there !";
userInput2.value = "Hi there !";

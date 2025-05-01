console.log("Welcome to Pig!")

//Variables
// var, let, const
// Let declare some variables

// THe difference in hoisting behavior re-assignment rules
// However, old-school var

// "let" is avariable that we can re-assign
let soda = "coke"
console.log("soda:", soda)

// j uknow
let shay = "cool" 
console.log("initial shay:", shay)

// xxOly21xx
let candy = 'twix'

// cloud
let thisGuy = "run"

// console.log(shay, candy, thisGuy)

// Shadow
shay = "Awesome Guy"
console.log("reassigned shay:", shay)

// Const is not going to change, once we delcare it. 
// It's more or less final

const afterThursday = "Friday"
console.log("afterThursday:", afterThursday)

// afterThursday = "Saturday"

// What can be variable?
// String, Numbers, Boolean (True, False), Nul
// Function

// Objects, Array, Functions, date
let dictionary = [
    {
        word: "cool",
        language: "french"
    }
]

// Let's make the varaibels for our game:
let playerName = "Shay"
// let score = 50
let total = 100
let playerScore1 = 23
let playerScore2 = 76

const maxScore = 100
let isTurn = true

// IF statement, Think, that this is only going to run if it's true.
let today = "Thursday"

if (today === "Thursday") {
    console.log("You may live in Korea")
}

//Shadow
 
// let morning = true 
// if (morning) {
// console.log(`Good morning`)
// }
// William
// let white = 10
// if (white === 10) {
//     console.log('white')
// };

//Selly
// let isCourse = "Computer Science" 

// if (isCourse === "Computer Science"){ 
// console.log("You got CS Degree")
// }

//Anonymous
// let sport = "tennis"
// if (sport === "basketball") {
//     console.log("You play basketball")
// }
// else {
//     console.log("You play tennis")
// }

//Spector
// if (isTurn === true){
//     console.log("player ones turn")
// }

// Shadow
// if (dice === 1) {
//     total = 0
// }

//Thanks
// const isPlayerOneTurn = true;

// if(isPlayerOneTurn) 
//     { console.log("Player One's Turn") } 
// else { console.log("Players Two"); }

// if (score === maxScore) {
//  console.log("you won")
// }

// IF/Else Statement
// Sometimes, we want to check one thing. BUT if nots true
// We dont to do something else. 



//Anonymous
let sport = "tennis"
if (sport === "basketball") {
    console.log("You play basketball")
}
else {
    console.log("You play tennis")
}

// if(condition){
//     // do this if it true
// } else {
//     // do this if its falst
// }

if (soda === "coke") {
    console.log("You like Coke")
}else {
    console.log("You don't have coke, drink water")
}

// IF/Else Statements possible in our game
const diceRolled = 1;
let score= 0;
// reset
if(diceRolled === 1) 
    { score= 0 }
// add to the total score
else { score += diceRolled }
console.log("Total: ", total)

const playerCard = document.querySelector(".player-card")
const toggleButton = document.querySelector("#toggleBtn")

//Shadow
// const playerCard = document.getElementById(`playerCard`) 
// const toggleBtn = document.getElementById(`toggleBtn`)

console.log(playerCard, toggleButton)

// Adds a class to an element IF it doesn't already exist
// removes the class if the element has it. 
// Light Switch. 

toggleButton.addEventListener("click", function(){
    playerCard.classList.toggle("active")
})
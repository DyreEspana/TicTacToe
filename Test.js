const prompt = require("prompt-sync")();
const process = require('process');

let yourChoice = "Your choice: ";

//********************* FUNCTION: ALIGN TO CENTER *********************
//formatting - text allign = Plese enter in let windoWidth your window sitze (character spacing)
function alignCenter(varToAlignCenter) {
    let windoWidth = 160;
    let startPoint = (windoWidth - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}
//********************* FUNCTIONS: FORMATTING TEXT *********************
function displayText(text) {
    console.log(alignCenter(text) + text);
}
//New line
function newLine() {
    console.log("\n");
}

//*************GAME START: DISPLAY GAME MODE MENU****************
function displayMenu() {
    let inputGameMode1 = "1 for Human vs Human";
    console.log("\n" + alignCenter(inputGameMode1) + inputGameMode1);
    let inputGameMode2 = "2 for Random AI vs Random AI";
    console.log("\n" + alignCenter(inputGameMode2) + inputGameMode2);
    let inputGameMode3 = "3 for Human vs Random AI";
    console.log("\n" + alignCenter(inputGameMode3) + inputGameMode3);
    let inputGameMode4 = "4 for Human vs Unbeatable AI";
    console.log("\n" + alignCenter(inputGameMode4) + inputGameMode4);
}
//*************GAME START: SELECT GAME MODE****************
function getMenuOption() {
    let gameModePrompt = "";
    console.clear();
    let inputGameMode0 = "Please enter your Game Mode:";
    console.log("\n" + alignCenter(inputGameMode0) + inputGameMode0);
    displayMenu();
    console.log("\n\n");
    gameModePrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
    if (gameModePrompt === "QUIT") {
        quitGame();
    }
    while (gameModePrompt !== "1" && gameModePrompt !== "2" && gameModePrompt !== "3" && gameModePrompt !== "4") {
        if (gameModePrompt === "QUIT") {
            quitGame();
        }
        console.clear();
        console.log(TicTacToe);
        let wrongMenuInput1 = "Sorry i dont understand your input,";
        let wrongMenuInput2 = "just enter the number 1-4 to select the Game Mode!";
        console.log("\n" + alignCenter(wrongMenuInput1) + wrongMenuInput1);
        console.log(alignCenter(wrongMenuInput2) + wrongMenuInput2);
        displayMenu();
        console.log("\n");
        gameModePrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
    }
    return gameModePrompt;
}
let gameMode = getMenuOption();
console.log(gameMode);
/*
TODO:   If quit is enter quit the game! presses exit
        

DONE:   getestet ob aus getMenuOptions die Array raus kommt mit den richtigen parameter = funktioniert!
*/

const prompt = require("prompt-sync")();

//*********FUNCTION TO ALIGN CENTER IN TERMINAL***************
function alignCenter(varToAlignCenter) {
    let windoWidth = 160;
    let startPoint = (windoWidth - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}

let ticLength = "                                                             ";
        let TicTacToe = "\n" +
            alignCenter(ticLength) + " _______ _          _______             _______            \n" +
            alignCenter(ticLength) + "|__   __(_)        |__   __|           |__   __|           \n" +
            alignCenter(ticLength) + "   | |   _    ___     | |  __ _   ___     | |  ___    ___  \n" +
            alignCenter(ticLength) + "   | |  | |  / __|    | | / _` | / __|    | | / _ \\  / _ \\ \n" +
            alignCenter(ticLength) + "   | |  | | | (__     | || (_| || (__     | || (_) ||  __/ \n" +
            alignCenter(ticLength) + "   |_|  |_|  \\___|    |_| \\__,_| \\___|    |_| \\___/  \\___| \n";

//*************INTRO START GAME OR READ RULES****************
//Return in an Array => what game mode we have and quit entered.
//Exaple array[1-4, quit=true]
function startGameMenu() {
    let isQuitTipedIn = false; //Its possible to export => is saved in saveGameModeInput
    let gameModePrompt = ""; //Its possible to export => is saved in saveGameModeInput
    let startOrRulesPrompt = "";
    let continueToGame = "";
    let saveGameModeInput = [];
    let yourChoice = "Your choice: "; //Used more times

    console.clear();
    console.log(TicTacToe);
    let buttonStart = "Please enter 1 to start the game.";
    let buttonRules = "Please enter 2 to see the rules.";
    let quit = "You can quit the game by enter quit.";
    console.log("\n" + alignCenter(buttonStart) + buttonStart);
    console.log("\n" + alignCenter(buttonRules) + buttonRules);
    console.log("\n\n" + alignCenter(quit) + quit);
    console.log("\n");
    startOrRulesPrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
    if (startOrRulesPrompt !== "1" && startOrRulesPrompt !== "2") {
        console.clear();
        console.log(TicTacToe);
        let wrongStartInput = "Please enter just 1 for Start Game";
        let wrongRulesInput = "or enter 2 to get the Rules of the Game";
        console.log("\n" + alignCenter(wrongStartInput) + wrongStartInput);
        console.log("\n" + alignCenter(wrongRulesInput) + wrongRulesInput);
        console.log("\n\n");
        startOrRulesPrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
    }
    if (startOrRulesPrompt === "1") {
            getMenuOption();
    }
    if (startOrRulesPrompt === "2") {
            isQuitTipedIn = gameplayRules();
            if (isQuitTipedIn === false) {
                getMenuOption();
            }
    }
    if (startOrRulesPrompt === "quit") {
        isQuitTipedIn = true;
    }

        //*************GAME RULES :TIC TAC TOE****************
        function gameplayRules() {
                console.clear();
                console.log(TicTacToe);
                let ruleTitle = "GAME RULES";
                console.log("\n" + alignCenter(ruleTitle) + ruleTitle);
                let ruleOne = "* The game is played on a grid that's 3 squares by 3 squares.";
                console.log("\n\n" + alignCenter(ruleOne) + ruleOne);
                let ruleTwo = "* You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.";
                console.log("\n" + alignCenter(ruleTwo) + ruleTwo);
                let ruleThree = "* The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.";
                console.log("\n" + alignCenter(ruleThree) + ruleThree);
                let ruleFour = "* When all 9 squares are full, the game is over.";
                console.log("\n" + alignCenter(ruleFour) + ruleFour);
                console.log("\n\n");
                let continueGame = "Please press enter to continue to game! ";
                continueToGame = prompt(alignCenter(continueGame) + continueGame).toLowerCase();
                if (continueToGame === "quit") {
                    isQuitTipedIn = true;
                }
            return isQuitTipedIn;
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
            saveGameModeInput;
            console.clear();
            console.log(TicTacToe);
            let inputGameMode0 = "Please enter your Game Mode:";
            console.log("\n" + alignCenter(inputGameMode0) + inputGameMode0);
            displayMenu();
            console.log("\n\n");
            gameModePrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
            if (gameModePrompt === "quit") {
                isQuitTipedIn = true;
            }
            saveGameModeInput[0] = gameModePrompt;
            saveGameModeInput[1] = isQuitTipedIn;
            while (gameModePrompt !== "1" && gameModePrompt !== "2" && gameModePrompt !== "3" && gameModePrompt !== "4" || isQuitTipedIn === true) {
                console.clear();
                console.log(TicTacToe);
                if (gameModePrompt === "1") {
                    HumanVsHuman();
                    saveGameModeInput[0] = gameModePrompt;
                } else if (gameModePrompt === "2") {
                    //Usable for game mode functions
                    saveGameModeInput[0] = gameModePrompt;
                } else if (gameModePrompt === "3") {
                    //Usable for game mode functions
                    saveGameModeInput[0] = gameModePrompt;
                } else if (gameModePrompt === "4") {
                    //Usable for game mode functions
                    saveGameModeInput[0] = gameModePrompt;
                } else {
                    let wrongMenuInput1 = "Sorry i dont understand your input,";
                    let wrongMenuInput2 = "just enter the number 1-4 to select the Game Mode!";
                    console.log("\n" + alignCenter(wrongMenuInput1) + wrongMenuInput1);
                    console.log(alignCenter(wrongMenuInput2) + wrongMenuInput2);
                    displayMenu();
                    console.log("\n");
                    gameModePrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
                    if (gameModePrompt === "quit") {
                        isQuitTipedIn = true;
                    }
                    saveGameModeInput[0] = gameModePrompt;
                    saveGameModeInput[1] = isQuitTipedIn;
                }
            }
        return saveGameModeInput;
        }
return saveGameModeInput;
}
let introParameter = startGameMenu();
let gameMode = introParameter[0];
let isQuitTipedIn = introParameter[1];
console.log(gameMode);
console.log(isQuitTipedIn);


//*************EXPORT****************
module.exports = {
    startGameMenu: startGameMenu,
    alignCenter: alignCenter,
}
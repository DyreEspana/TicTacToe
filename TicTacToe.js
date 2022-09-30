/*
TODO:   If quit is enter quit the game! presses exit
*/
const prompt = require("prompt-sync")();
const process = require ('process');

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
//********************* TIC TAC TOE ASCII *********************
let ticLength =                      "                                                           ";
        let TicTacToe = "\n" +
            alignCenter(ticLength) + " _______ _          _______             _______            \n" +
            alignCenter(ticLength) + "|__   __(_)        |__   __|           |__   __|           \n" +
            alignCenter(ticLength) + "   | |   _    ___     | |  __ _   ___     | |  ___    ___  \n" +
            alignCenter(ticLength) + "   | |  | |  / __|    | | / _` | / __|    | | / _ \\  / _ \\ \n" +
            alignCenter(ticLength) + "   | |  | | | (__     | || (_| || (__     | || (_) ||  __/ \n" +
            alignCenter(ticLength) + "   |_|  |_|  \\___|    |_| \\__,_| \\___|    |_| \\___/  \\___| \n";

//********************** FUNCTION: QUIT GAME **********************
function quitGame() {
        let goodbyeLength = "                                           ";
        let goodbye = "\n" +
            alignCenter(goodbyeLength) + "   _____                 _ _               \n" + 
            alignCenter(goodbyeLength) + " / ____|               | | |               \n" +
            alignCenter(goodbyeLength) + "| |  __  ___   ___   __| | |__  _   _  ___ \n" +
            alignCenter(goodbyeLength) + "| | |_ |/ _ \ / _ \ / _` | '_ \| | | |/ _ \\n" +
            alignCenter(goodbyeLength) + "| |__| | (_) | (_) | (_| | |_) | |_| |  __/\n" +
            alignCenter(goodbyeLength) + " \_____|\___/ \___/ \__,_|_.__/ \__, |\___|\n" +
            alignCenter(goodbyeLength) + "                                 __/ |     \n" +
            alignCenter(goodbyeLength) + "                                |___/      \n" 
        console.log(goodbye);
        process.exit();
    }

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
    newLine();
    displayText(buttonStart);
    newLine();
    displayText(buttonRules);
    newLine();
    newLine();
    displayText(quit);
    newLine();
    startOrRulesPrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
    while (startOrRulesPrompt !== "1" && startOrRulesPrompt !== "2") {
        console.clear();
        console.log(TicTacToe);
        let wrongStartInput = "Please enter just 1 for Start Game";
        let wrongRulesInput = "or enter 2 to get the Rules of the Game";
        newLine();
        displayText(wrongStartInput);
        newLine();
        displayText(wrongRulesInput);
        newLine();
        newLine();
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
    if (startOrRulesPrompt === "QUIT") {
        process.exit();
        quitGame();
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
                if (continueToGame === "QUIT") {
                    process.exit();
                    quitGame();
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
            if (gameModePrompt === "QUIT") {
                process.exit();
                quitGame();
            }
            saveGameModeInput[0] = gameModePrompt;
            saveGameModeInput[1] = isQuitTipedIn;
            while (gameModePrompt !== "1" && gameModePrompt !== "2" && gameModePrompt !== "3" && gameModePrompt !== "4" || isQuitTipedIn === true) {
                console.clear();
                console.log(TicTacToe);
                    let wrongMenuInput1 = "Sorry i dont understand your input,";
                    let wrongMenuInput2 = "just enter the number 1-4 to select the Game Mode!";
                    console.log("\n" + alignCenter(wrongMenuInput1) + wrongMenuInput1);
                    console.log(alignCenter(wrongMenuInput2) + wrongMenuInput2);
                    displayMenu();
                    console.log("\n");
                    gameModePrompt = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
                if (gameModePrompt === "QUIT") {
                        process.exit();
                        isQuitTipedIn = true;
                    }
                    saveGameModeInput[0] = gameModePrompt;
                    saveGameModeInput[1] = isQuitTipedIn;
            }
        return saveGameModeInput;
        }
return saveGameModeInput;
}

//let humanVsHuman = require("./humanVsHuman");
let getArrOfGameMenu = startGameMenu();
let gameMode = getArrOfGameMenu[0];
let isGameQuit = getArrOfGameMenu[1];
if (isGameQuit === true) {
    process.exit();
}
if (gameMode === "1") {
    let humanVsHuman = require("./humanVsHuman");
}
if (gameMode === "2") {
    let randomAiVsRandomAi = require("./randomAiVsRandomAi");  
}
if (gameMode === "3") {
    let humanVsRandomAi = require("./humanVsRandomAi");
    
} /*if (gameMode === "4") {
    //Usable for game mode functions
}*/
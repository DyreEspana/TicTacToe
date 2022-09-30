const prompt = require("prompt-sync")();
const process = require('process');
const { maybeQuitGame } = require("./quitGame");
const { getGameModeInput } = require("./menu");
const { humanVsHuman } = require("./HumanVsHuman");
const { TIC_TAC_TOE, YOUR_CHOICE_TEXT } = require("./formatText");

const {
    alignCenter,
    displayText,
    newLine,
} = require("./formatText");

const OPTION_START_GAME = "1";
const OPTION_SHOW_RULES = "2";

function displayIntro() {
    const buttonStart = "Please enter 1 to start the game.";
    const buttonRules = "Please enter 2 to see the rules.";
    const quit = "You can quit the game by enter quit.";

    console.clear();
    console.log(TIC_TAC_TOE);

    newLine();
    displayText(buttonStart);
    newLine();
    displayText(buttonRules);
    newLine();
    newLine();
    displayText(quit);
    newLine();
}

//*************INTRO START GAME OR READ RULES****************
//Return in an Array => what game mode we have and quit entered.
//Exaple array[1-4, quit=true]
function startGameMenu() {
    let continueToGame = "";

    displayIntro();

    displayText(YOUR_CHOICE_TEXT);
    let startOrRulesInput = prompt().toLowerCase();

    while (startOrRulesInput !== "1" && startOrRulesInput !== "2") {
        maybeQuitGame(startOrRulesInput);

        console.clear();
        console.log(TIC_TAC_TOE);

        let wrongStartInput = "Please enter just 1 for Start Game";
        let wrongRulesInput = "or enter 2 to get the Rules of the Game";

        newLine();
        displayText(wrongStartInput);
        newLine();
        displayText(wrongRulesInput);
        newLine();
        newLine();

        startOrRulesInput = prompt(alignCenter(YOUR_CHOICE_TEXT) + YOUR_CHOICE_TEXT).toLowerCase();
    }

    maybeQuitGame(startOrRulesInput);

    if (startOrRulesInput === OPTION_START_GAME) {
        return getGameModeInput();
    } else if (startOrRulesInput === OPTION_SHOW_RULES) {
        displayGameplayRules();
        return getGameModeInput();
    }

    //*************GAME RULES :TIC TAC TOE****************
    function displayGameplayRules() {
        console.clear();
        console.log(TIC_TAC_TOE);
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
        maybeQuitGame(continueToGame);
    }
}

//let humanVsHuman = require("./humanVsHuman");
let gameMode = startGameMenu();
if (gameMode === "1") {
    humanVsHuman();
} else if (gameMode === "2") {
    require("./RandomAiVsRandomAI");  
} else if (gameMode === "3") {
    require("./HumanVsRandomAI");
} /*else if (gameMode === "4") {
    //Usable for game mode functions
}*/

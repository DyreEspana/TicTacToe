/*
TODOs:
tie condition (if both players didn't win) - integrated counter?
switching players?????
info welcher player move dran ist 
other play modes 
allign all texts
function to to check
Queck if Quit still work

DONE:
integrated counter just if right input!!!
*/

//*********************** REQUIRES ****************************
const prompt = require('prompt-sync')();
let process = require ('process');

//********************* Variables **************************
//Quit/Exit game completely
let gameIsRunning = true;

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
//displays text
function displayText(text) {
    console.log(alignCenter(text) + text);
}
//new line / pragraph
function newLine() {
    console.log("\n");
}

//********************* GET USER INPUT **************************
//User gives moving input (e.g:B2,C1,...)& input will check & input is logged into Array & add 1 to counterMoves
//********************* GET USER INPUT VARIABLES **************************
const VALID_COORDINATES = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"]
const THIS_FIELD_IS_ALREADY_OCCUPIED = "This field is already occupied!";
const SORRY_I_DONT_UNDERSTAND_YOUR_INPUT = "Sorry i dont undertand your input!";
const PLEASE_ENTER_A_MOVE = "Please enter a move by typing a possible position (Like: a1).";
//const YOUR_MOVE = "Your move: ";
let randomAiMovesMade = [];
let countMoves = 0;
//********************* FUNCTION: GET USER INPUT **************************
function getUserInput() {
    let randomBeatableAiCoordinates = VALID_COORDINATES[Math.floor(Math.random() * VALID_COORDINATES.length)];
    while (randomAiMovesMade.includes(randomBeatableAiCoordinates)) {
        return randomBeatableAiCoordinates; //User gives moving input (e.g:B2,C1,...)
    }
    randomAiMovesMade.push(randomBeatableAiCoordinates); //Input is logged into Array
    countMoves++;
}

//********************* FUNCTION: DISPLAY MATCHFIELD **************************
//********************* DISPLAY MATCHFIELD VARIABLE ARRAY **************************
let grid = [["   ", "|", " 1 ", "|", " 2 ", "|", " 3 "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" A ", "|", " . ", "|", " . ", "|", " . "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" B ", "|", " . ", "|", " . ", "|", " . "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" C ", "|", " . ", "|", " . ", "|", " . "]];
//********************* FUNCTION: DISPLAY MATCHFIELD **************************
function displayGRID() {
    console.clear();
    let gridFromArrToStr0 = grid[0].join("");
    let gridFromArrToStr1 = grid[1].join("");
    let gridFromArrToStr2 = grid[2].join("");
    let gridFromArrToStr3 = grid[3].join("");
    let gridFromArrToStr4 = grid[4].join("");
    let gridFromArrToStr5 = grid[5].join("");
    let gridFromArrToStr6 = grid[6].join("");
    newLine();
    displayText(gridFromArrToStr0);
    displayText(gridFromArrToStr1);
    displayText(gridFromArrToStr2);
    displayText(gridFromArrToStr3);
    displayText(gridFromArrToStr4);
    displayText(gridFromArrToStr5);
    displayText(gridFromArrToStr6);
}

//********************* WINNING CONDITIONS **************************
//********************* WINNING CONDITIONS VARIABLE **************************
const PLAYER1 = " X ";
const PLAYER2 = " O ";
//********************* FUNCTION: WINNING CONDITIONS **************************
function winningCondition(PLAYER1, PLAYER2) {
//Winning conditions for Player 1
    if (grid[2][2] === PLAYER1 && grid[2][4] === PLAYER1 && grid[2][6] === PLAYER1 ||
        grid[4][2] === PLAYER1 && grid[4][4] === PLAYER1 && grid[4][6] === PLAYER1 ||
        grid[6][2] === PLAYER1 && grid[6][4] === PLAYER1 && grid[6][6] === PLAYER1 ||
        grid[2][2] === PLAYER1 && grid[4][2] === PLAYER1 && grid[6][2] === PLAYER1 ||
        grid[2][4] === PLAYER1 && grid[4][4] === PLAYER1 && grid[6][4] === PLAYER1 ||
        grid[2][6] === PLAYER1 && grid[4][6] === PLAYER1 && grid[6][6] === PLAYER1 ||
        grid[2][2] === PLAYER1 && grid[4][4] === PLAYER1 && grid[6][6] === PLAYER1 ||
        grid[2][6] === PLAYER1 && grid[4][4] === PLAYER1 && grid[6][2] === PLAYER1) {
        let xWinLength = "                                                                ";
        let xWin = "\n" +
            alignCenter(xWinLength) + " _____  _                        __   __ __          __         \n" +
            alignCenter(xWinLength) + "|  __ \\| |                       \\ \\ / / \\ \\        / /         \n" +
            alignCenter(xWinLength) + "| |__) | | __ _ _   _  ___ _ __   \\ V /   \\ \\  /\\  / /__  _ __  \n" +
            alignCenter(xWinLength) + "|  ___/| |/ _` | | | |/ _ \\ '__|   > <     \\ \\/  \\/ / _ \\| '_ \\ \n" +
            alignCenter(xWinLength) + "| |    | | (_| | |_| |  __/ |     / . \\     \\  /\\  / (_) | | | |\n" +
            alignCenter(xWinLength) + "|_|    |_|\\__,_|\\__, |\\___|_|    /_/ \\_\\     \\/  \\/ \\___/|_| |_|\n" +
            alignCenter(xWinLength) + "                 __/ |                                          \n" +
            alignCenter(xWinLength) + "                |___/                                           \n";
        console.log(xWin);
        process.exit(gameIsRunning); //breaks from function if player won
    }
    if (grid[2][2] === PLAYER2 && grid[2][4] === PLAYER2 && grid[2][6] === PLAYER2 ||
        grid[4][2] === PLAYER2 && grid[4][4] === PLAYER2 && grid[4][6] === PLAYER2 ||
        grid[6][2] === PLAYER2 && grid[6][4] === PLAYER2 && grid[6][6] === PLAYER2 ||
        grid[2][2] === PLAYER2 && grid[4][2] === PLAYER2 && grid[6][2] === PLAYER2 ||
        grid[2][4] === PLAYER2 && grid[4][4] === PLAYER2 && grid[6][4] === PLAYER2 ||
        grid[2][6] === PLAYER2 && grid[4][6] === PLAYER2 && grid[6][6] === PLAYER2 ||
        grid[2][2] === PLAYER2 && grid[4][4] === PLAYER2 && grid[6][6] === PLAYER2 ||
        grid[2][6] === PLAYER2 && grid[4][4] === PLAYER2 && grid[6][2] === PLAYER2) {
        let oWinLength = "                                                                 ";
        let oWin = "\n" +
            alignCenter(oWinLength) + " _____  _                          ____   __          __         \n" +
            alignCenter(oWinLength) + "|  __ \\| |                        / __ \\  \\ \\        / /         \n" +
            alignCenter(oWinLength) + "| |__) | | __ _ _   _  ___ _ __  | |  | |  \\ \\  /\\  / /__  _ __  \n" +
            alignCenter(oWinLength) + "|  ___/| |/ _` | | | |/ _ \\ '__| | |  | |   \\ \\/  \\/ / _ \\| '_ \\ \n" +
            alignCenter(oWinLength) + "| |    | | (_| | |_| |  __/ |    | |__| |    \\  /\\  / (_) | | | |\n" +
            alignCenter(oWinLength) + "|_|    |_|\\__,_|\\__, |\\___|_|     \\____/      \\/  \\/ \\___/|_| |_|\n" +
            alignCenter(oWinLength) + "                 __/ |                                           \n" +
            alignCenter(oWinLength) + "                |___/                                            \n";
        console.log(oWin);
        process.exit(gameIsRunning); //breaks from function if player won
    }
}

//*********************** DRAW MATCHFIELD ****************************
//*********************** DRAW MATCHFIELD VARIABLE****************************
const WRONG_ENTRY = "Position already taken or non existent.";
//********************** FUNCTION: DRAW MATCHFIELD **********************
function drawMatchfield(input, Player) {
    quitGame
    if (input === "A1") {//an Stelle A1 wird mit splice ein X eingesetzt
        grid[2].splice(2, 1, Player);   //neues board wird angezeigt
        displayGRID();
    } else if (input === "A2") {
        grid[2].splice(4, 1, Player);
        displayGRID();
    } else if (input === "A3") {
        grid[2].splice(6, 1, Player);
        displayGRID();
    } else if (input === "B1") {
        grid[4].splice(2, 1, Player);
        displayGRID();
    } else if (input === "B2") {
        grid[4].splice(4, 1, Player);
        displayGRID();
    } else if (input === "B3") {
        grid[4].splice(6, 1, Player);
        displayGRID();
    } else if (input === "C1") {
        grid[6].splice(2, 1, Player);
        displayGRID();
    } else if (input === "C2") {
        grid[6].splice(4, 1, Player);
        displayGRID();
    } else if (input === "C3") {
        grid[6].splice(6, 1, Player);
        displayGRID();
    } else {
        displayText(WRONG_ENTRY);
        displayGRID();
    }
}

//********************** FUNCTION: QUIT GAME **********************
function quitGame(promptName) {
    if (promptName === "QUIT") {
        console.log(":(");
        console.log("Thanks for playing.");
        process.exit();
    }
}

//**********************!!!!!MAINFUNCTION: DRAW MATCHFIELD!!!!!!**********************
async function randomAiVsRandomAi() {
    newLine();
    const GAME_MODE_TEXT = "You chose: 1. Human vs Human"
    displayText(GAME_MODE_TEXT);
    while (gameIsRunning) {
        displayGRID();                                     //shows board
        getUserInput();                                    //player 1 makes move (a1,a2,...)
        console.clear();                                   //clears console for visual clarity    
        drawMatchfield(randomAiMovesMade[0], PLAYER1); 
        await new Promise(resolve => setTimeout(resolve, 400));         //places user move in array & displays updated board         
        getUserInput();                                    //player 2 makes move (a1,a2,...)
        console.clear();
        drawMatchfield(randomAiMovesMade[1], PLAYER2);
        await new Promise(resolve => setTimeout(resolve, 400));
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[2], PLAYER1);
        await new Promise(resolve => setTimeout(resolve, 400));
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[3], PLAYER2);
        await new Promise(resolve => setTimeout(resolve, 400));
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[4], PLAYER1);
        winningCondition(PLAYER1, PLAYER2); 
        await new Promise(resolve => setTimeout(resolve, 400));                 //checks for winning conditions - placed here because first time a win would be possible            
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[5], PLAYER2);
        winningCondition(PLAYER1, PLAYER2);
        await new Promise(resolve => setTimeout(resolve, 400));
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[6], PLAYER1);
        winningCondition(PLAYER1, PLAYER2);
        await new Promise(resolve => setTimeout(resolve, 400));
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[7], PLAYER2);
        winningCondition(PLAYER1, PLAYER2);
        await new Promise(resolve => setTimeout(resolve, 400));
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[8], PLAYER1);
        winningCondition(PLAYER1, PLAYER2);
        await new Promise(resolve => setTimeout(resolve, 400));
        getUserInput();
        console.clear();
        drawMatchfield(randomAiMovesMade[9], PLAYER2);
        winningCondition(PLAYER1, PLAYER2);
    } console.log("Nobody won.");
}
randomAiVsRandomAi();
//*************EXPORT****************
module.exports = {
    randomAiVsRandomAi: randomAiVsRandomAi,
}
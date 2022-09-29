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
function displayText(text) {
    console.log(alignCenter(text) + text);
}
//New line
function newLine() {
    console.log("\n");
}

//********************* GET USER INPUT **************************
//User gives moving input (e.g:B2,C1,...)& input will check & input is logged into Array & add 1 to counterMoves
//********************* GET USER INPUT VARIABLES **************************
const CORRECT_FORMATTING = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"]
const THIS_FIELD_IS_ALREADY_OCCUPIED = "This field is already occupied!";
const SORRY_I_DONT_UNDERSTAND_YOUR_INPUT = "Sorry i dont undertand your input!";
const PLEASE_ENTER_A_MOVE = "Please enter a move by typing a possible position (Like: a1).";
const YOUR_MOVE = "Your move: ";
let userMovesMade = [];
let countMoves = 0;
//********************* FUNCTION: GET USER INPUT **************************
function getUserInput() {
    newLine();
    displayText(PLEASE_ENTER_A_MOVE);
    newLine();
    let userMove = prompt(alignCenter(YOUR_MOVE) + YOUR_MOVE).toUpperCase();
    while (!CORRECT_FORMATTING.includes(userMove) || userMovesMade.includes(userMove)) {
        while (!CORRECT_FORMATTING.includes(userMove)) {
            console.clear();
            displayGRID();
            newLine();
            displayText(SORRY_I_DONT_UNDERSTAND_YOUR_INPUT);
            newLine();
            displayText(PLEASE_ENTER_A_MOVE);
            newLine();
            userMove = prompt(alignCenter(YOUR_MOVE) + YOUR_MOVE).toUpperCase();
        }
        while (userMovesMade.includes(userMove)) {
            console.clear();
            displayGRID();
            newLine();
            displayText(THIS_FIELD_IS_ALREADY_OCCUPIED);
            newLine();
            displayText(PLEASE_ENTER_A_MOVE);
            newLine();
            userMove = prompt(alignCenter(YOUR_MOVE) + YOUR_MOVE).toUpperCase(); //User gives moving input (e.g:B2,C1,...)
        }
    }
    userMovesMade.push(userMove); //Input is logged into Array
    countMoves++;
}

//********************* AUTOMATIC PLAYER SELECTION & DISPLAY MATCHFIELD & WINNING CONDITIONS VARIABLE **************************
const PLAYER1 = " X ";
const PLAYER2 = " O ";
//********************* FUNCTION: AUTOMATIC PLAYER SELECTION **************************
function whosTurn() {
    if (countMoves % 2 === 0) {
        return PLAYER1;
    } else {
        return PLAYER2
    }
}
//********************* FUNCTION: DISPLAY MATCHFIELD **************************
//********************* DISPLAY MATCHFIELD VARIABLE ARRAY **************************
const YOU_PLAY_HUMAN_VERSUS_HUMAN = "You play: Human vs Human";
let playersTurn = "";
let grid = [["   ", "|", " 1 ", "|", " 2 ", "|", " 3 "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" A ", "|", " . ", "|", " . ", "|", " . "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" B ", "|", " . ", "|", " . ", "|", " . "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" C ", "|", " . ", "|", " . ", "|", " . "]];
//********************* FUNCTION: DISPLAY MATCHFIELD **************************
function displayGRID() {
    playersTurn = "Player" + whosTurn() + "\'s turn"
    let gridFromArrToStr0 = grid[0].join("");
    let gridFromArrToStr1 = grid[1].join("");
    let gridFromArrToStr2 = grid[2].join("");
    let gridFromArrToStr3 = grid[3].join("");
    let gridFromArrToStr4 = grid[4].join("");
    let gridFromArrToStr5 = grid[5].join("");
    let gridFromArrToStr6 = grid[6].join("");
    console.clear();
    newLine();
    displayText(YOU_PLAY_HUMAN_VERSUS_HUMAN);
    newLine();
    displayText(playersTurn);
    newLine();
    displayText(gridFromArrToStr0);
    displayText(gridFromArrToStr1);
    displayText(gridFromArrToStr2);
    displayText(gridFromArrToStr3);
    displayText(gridFromArrToStr4);
    displayText(gridFromArrToStr5);
    displayText(gridFromArrToStr6);
}

//********************* DRAW NO ONE WIN **************************
//********************* DRAW VARIABLE **************************
let isWin = false;
//********************* FUNCTION: DRAW **************************
function draw() {
        let goodbyeLength = "                           ";
        let goodbye = "\n" +
        alignCenter(goodbyeLength) + " _____                     \n" +
        alignCenter(goodbyeLength) + "|  __ \                    \n" +
        alignCenter(goodbyeLength) + "| |  | |_ __ __ ___      __\n" +
        alignCenter(goodbyeLength) + "| |  | | '__/ _` \\ \\ /\\ / /\n" +
        alignCenter(goodbyeLength) + "| |__| | | | (_| |\\ V  V / \n" +
        alignCenter(goodbyeLength) + "|_____/|_|  \\__,_| \\_/\\_/  \n";
        console.log(goodbye);
        //process.exit();
}

//********************* WINNING CONDITIONS **************************
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
        isWin = true;
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
        isWin = true;
        process.exit(gameIsRunning); //breaks from function if player won
    }
}

//********************** FUNCTION: QUIT GAME **********************
function quitGame(promptName) {
    if (promptName === "QUIT") {
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
}

//*********************** DRAW MATCHFIELD ****************************
//*********************** DRAW MATCHFIELD VARIABLE****************************
//const WRONG_ENTRY = "Position already taken or non existent."; Can be deledet!
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
    }
}

//**********************!!!!!MAINFUNCTION: HUMAN VS HUMAN!!!!!!**********************
function humanVsHuman() {
    while (gameIsRunning) {
        displayGRID();                                     //shows board
        getUserInput();                                    //player 1 makes move (a1,a2,...)
        console.clear();                                   //clears console for visual clarity    
        drawMatchfield(userMovesMade[0], PLAYER1);         //places user move in array & displays updated board         
        getUserInput();                                    //player 2 makes move (a1,a2,...)
        console.clear();
        drawMatchfield(userMovesMade[1], PLAYER2);
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[2], PLAYER1);
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[3], PLAYER2);
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[4], PLAYER1);
        winningCondition(PLAYER1, PLAYER2);                //checks for winning conditions - placed here because first time a win would be possible            
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[5], PLAYER2);
        winningCondition(PLAYER1, PLAYER2);
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[6], PLAYER1);
        winningCondition(PLAYER1, PLAYER2);
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[7], PLAYER2);
        winningCondition(PLAYER1, PLAYER2);
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[8], PLAYER1);
        winningCondition(PLAYER1, PLAYER2);
        getUserInput();
        console.clear();
        drawMatchfield(userMovesMade[9], PLAYER2);
        if (countMoves === 9 && isWin === false) {
            draw();
        } else {
            winningCondition(PLAYER1, PLAYER2);
        }
    }
}
humanVsHuman();
//*************EXPORT****************
module.exports = {
    humanVsHuman: humanVsHuman,
}
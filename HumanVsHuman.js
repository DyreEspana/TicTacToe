//*********************** REQUIRES ****************************
const prompt = require('prompt-sync')();
const { alignCenter, displayText, newLine } = require("./formatText");
const { maybeQuitGame } = require('./quitGame');

//********************* Variables **************************
//Quit/Exit game completely
let gameIsRunning = true;

//********************* GET USER INPUT **************************
//User gives moving input (e.g:B2,C1,...)& input will check & input is logged into Array & add 1 to counterMoves
//********************* GET USER INPUT VARIABLES **************************
const CORRECT_FORMATTING = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"]
const MSG_THIS_FIELD_IS_ALREADY_OCCUPIED = "This field is already occupied!";
const MSG_SORRY_I_DONT_UNDERSTAND_YOUR_INPUT = "Sorry i dont undertand your input!";
const MSG_PLEASE_ENTER_A_MOVE = "Please enter a move by typing a possible position (Like: a1).";
const MSG_YOUR_MOVE = "Your move: ";
//********************* DISPLAY MATCHFIELD VARIABLE ARRAY **************************
const MSG_YOU_PLAY_HUMAN_VERSUS_HUMAN = "You play: Human vs Human";

//********************* AUTOMATIC PLAYER SELECTION & DISPLAY MATCHFIELD & WINNING CONDITIONS VARIABLE **************************
const PLAYER1 = " X ";
const PLAYER2 = " O ";

let userMovesMade = [];
let countMoves = 0;
let grid = [["   ", "|", " 1 ", "|", " 2 ", "|", " 3 "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" A ", "|", " . ", "|", " . ", "|", " . "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" B ", "|", " . ", "|", " . ", "|", " . "],
            ["---", "+", "---", "+", "---", "+", "---"],
            [" C ", "|", " . ", "|", " . ", "|", " . "]];
//********************* DRAW VARIABLE **************************
let isWin = false;
const xWinLength = "                                                                ";
const xWin = "\n" +
    alignCenter(xWinLength) + " _____  _                        __   __ __          __         \n" +
    alignCenter(xWinLength) + "|  __ \\| |                       \\ \\ / / \\ \\        / /         \n" +
    alignCenter(xWinLength) + "| |__) | | __ _ _   _  ___ _ __   \\ V /   \\ \\  /\\  / /__  _ __  \n" +
    alignCenter(xWinLength) + "|  ___/| |/ _` | | | |/ _ \\ '__|   > <     \\ \\/  \\/ / _ \\| '_ \\ \n" +
    alignCenter(xWinLength) + "| |    | | (_| | |_| |  __/ |     / . \\     \\  /\\  / (_) | | | |\n" +
    alignCenter(xWinLength) + "|_|    |_|\\__,_|\\__, |\\___|_|    /_/ \\_\\     \\/  \\/ \\___/|_| |_|\n" +
    alignCenter(xWinLength) + "                 __/ |                                          \n" +
    alignCenter(xWinLength) + "                |___/                                           \n";

const oWinLength = "                                                                 ";
const oWin = "\n" +
    alignCenter(oWinLength) + " _____  _                          ____   __          __         \n" +
    alignCenter(oWinLength) + "|  __ \\| |                        / __ \\  \\ \\        / /         \n" +
    alignCenter(oWinLength) + "| |__) | | __ _ _   _  ___ _ __  | |  | |  \\ \\  /\\  / /__  _ __  \n" +
    alignCenter(oWinLength) + "|  ___/| |/ _` | | | |/ _ \\ '__| | |  | |   \\ \\/  \\/ / _ \\| '_ \\ \n" +
    alignCenter(oWinLength) + "| |    | | (_| | |_| |  __/ |    | |__| |    \\  /\\  / (_) | | | |\n" +
    alignCenter(oWinLength) + "|_|    |_|\\__,_|\\__, |\\___|_|     \\____/      \\/  \\/ \\___/|_| |_|\n" +
    alignCenter(oWinLength) + "                 __/ |                                           \n" +
    alignCenter(oWinLength) + "                |___/                                            \n";

function getValidCoordinateInput() {
        let userMove = prompt(alignCenter(MSG_YOUR_MOVE) + MSG_YOUR_MOVE).toUpperCase();

        while (!CORRECT_FORMATTING.includes(userMove)) {
            maybeQuitGame(userMove);

            console.clear();
            displayGRID();
            newLine();
            displayText(MSG_SORRY_I_DONT_UNDERSTAND_YOUR_INPUT);
            newLine();
            displayText(MSG_PLEASE_ENTER_A_MOVE);
            newLine();
            userMove = prompt(alignCenter(MSG_YOUR_MOVE) + MSG_YOUR_MOVE).toUpperCase();
        }

        return userMove;
}

//********************* FUNCTION: GET USER INPUT **************************
function getUserInput() {
    newLine();
    displayText(MSG_PLEASE_ENTER_A_MOVE);
    newLine();

    let userMove = getValidCoordinateInput();

    while (userMovesMade.includes(userMove)) {
        maybeQuitGame();

        console.clear();
        displayGRID();
        newLine();
        displayText(MSG_THIS_FIELD_IS_ALREADY_OCCUPIED);
        newLine();
        displayText(MSG_PLEASE_ENTER_A_MOVE);
        newLine();
        userMove = getValidCoordinateInput(); //User gives moving input (e.g:B2,C1,...)
    }

    userMovesMade.push(userMove); //Input is logged into Array
}

//********************* FUNCTION: AUTOMATIC PLAYER SELECTION **************************
function whosTurn(moves = countMoves) {
    if (moves % 2 === 0) {
        return PLAYER1;
    } else {
        return PLAYER2;
    }
}

//********************* FUNCTION: DISPLAY MATCHFIELD **************************
function displayGRID() {
    console.clear();
    let playersTurn = "Player" + whosTurn() + "\'s turn";

    newLine();
    displayText(MSG_YOU_PLAY_HUMAN_VERSUS_HUMAN);
    newLine();
    displayText(playersTurn);
    newLine();

    for (const row of grid) {
        displayText(row.join(""));
    }
}

//********************* DRAW NO ONE WIN **************************
//********************* FUNCTION: DRAW **************************
function handleDraw() {
    console.clear();
    placeMoveOnGrid();
    displayGRID();
    newLine();
    let goodbyeLength = "                           ";
    let goodbye = "\n" +
        alignCenter(goodbyeLength) + " _____                     \n" +
        alignCenter(goodbyeLength) + "|  __ \                    \n" +
        alignCenter(goodbyeLength) + "| |  | |_ __ __ ___      __\n" +
        alignCenter(goodbyeLength) + "| |  | | '__/ _` \\ \\ /\\ / /\n" +
        alignCenter(goodbyeLength) + "| |__| | | | (_| |\\ V  V / \n" +
        alignCenter(goodbyeLength) + "|_____/|_|  \\__,_| \\_/\\_/  \n";
    console.log(goodbye);
    process.exit();
}

//********************* WINNING CONDITIONS **************************
function didPlayerWin(player) {
    return ( 
        grid[2][2] === player && grid[2][4] === player && grid[2][6] === player ||
        grid[4][2] === player && grid[4][4] === player && grid[4][6] === player ||
        grid[6][2] === player && grid[6][4] === player && grid[6][6] === player ||
        grid[2][2] === player && grid[4][2] === player && grid[6][2] === player ||
        grid[2][4] === player && grid[4][4] === player && grid[6][4] === player ||
        grid[2][6] === player && grid[4][6] === player && grid[6][6] === player ||
        grid[2][2] === player && grid[4][4] === player && grid[6][6] === player ||
        grid[2][6] === player && grid[4][4] === player && grid[6][2] === player
    );
}


//********************* FUNCTION: WINNING CONDITIONS **************************
function winningCondition(PLAYER1, PLAYER2) {
    //Winning conditions for Player 1
    if (didPlayerWin(PLAYER1)) {
        console.clear();
        placeMoveOnGrid();
        displayGRID();
        newLine();
        console.log(xWin);
        isWin = true;
        process.exit(); //breaks from function if player won
    } else if (didPlayerWin(PLAYER2)) {
        console.clear();
        placeMoveOnGrid();
        displayGRID();
        newLine();
        console.log(oWin);
        isWin = true;
        process.exit(); //breaks from function if player won
    }
}

//********************** FUNCTION: QUIT GAME **********************
function quitGame() {
    console.clear();
    let goodbyeLength = "                                           ";
    let goodbye = "\n" +
        alignCenter(goodbyeLength) + "  _____                 _ _               \n" +
        alignCenter(goodbyeLength) + " / ____|               | | |               \n" +
        alignCenter(goodbyeLength) + "| |  __  ___   ___   __| | |__  _   _  ___ \n" +
        alignCenter(goodbyeLength) + "| | |_ |/ _ \\ / _ \\ / _` | '_ \\| | | |/ _ \\\n" +
        alignCenter(goodbyeLength) + "| |__| | (_) | (_) | (_| | |_) | |_| |  __/\n" +
        alignCenter(goodbyeLength) + " \\_____|\\___/ \\___/ \\__,_|_.__/ \\__, |\\___|\n" +
        alignCenter(goodbyeLength) + "                                 __/ |     \n" +
        alignCenter(goodbyeLength) + "                                |___/      \n";
    console.log(goodbye);
    process.exit();
}

//*********************** DRAW MATCHFIELD ****************************
//********************** FUNCTION: DRAW MATCHFIELD **********************
function placeMoveOnGrid(input, Player) {
    if (input === "A1") {
        //an Stelle A1 wird mit splice ein X eingesetzt
        grid[2].splice(2, 1, Player);
    } else if (input === "A2") {
        grid[2].splice(4, 1, Player);
    } else if (input === "A3") {
        grid[2].splice(6, 1, Player);
    } else if (input === "B1") {
        grid[4].splice(2, 1, Player);
    } else if (input === "B2") {
        grid[4].splice(4, 1, Player);
    } else if (input === "B3") {
        grid[4].splice(6, 1, Player);
    } else if (input === "C1") {
        grid[6].splice(2, 1, Player);
    } else if (input === "C2") {
        grid[6].splice(4, 1, Player);
    } else if (input === "C3") {
        grid[6].splice(6, 1, Player);
    }
}

//**********************!!!!!MAINFUNCTION: HUMAN VS HUMAN!!!!!!**********************
function humanVsHuman() {
    while (gameIsRunning) {
        displayGRID();                                     //shows board
        getUserInput();                                    //player 1 makes move (a1,a2,...)
        console.clear();                                   //clears console for visual clarity    

        for (countMoves = 0; countMoves < 9; countMoves++) {
            //places user move in array & displays updated board         
            placeMoveOnGrid(
                userMovesMade[countMoves],
                whosTurn(countMoves)
            );

            displayGRID();

            if (countMoves > 3) {
                //checks for winning conditions - placed here because first time a win would be possible
                winningCondition(PLAYER1, PLAYER2);
            }

            //player 2 makes move (a1,a2,...)
            getUserInput();
            console.clear();
        }

        // drawMatchfield(userMovesMade[9], PLAYER2);

        if (isWin === false) {
            handleDraw();
        }
    }
}

//*************EXPORT****************
module.exports = {
    humanVsHuman: humanVsHuman,
}
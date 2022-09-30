const prompt = require("prompt-sync")();
const { maybeQuitGame } = require("./quitGame");
const { alignCenter, TIC_TAC_TOE, YOUR_CHOICE_TEXT } = require("./formatText");

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
function getGameMode() {
    let inputGameMode0 = "Please enter your Game Mode:";

    console.clear();
    console.log(TIC_TAC_TOE);
    console.log("\n" + alignCenter(inputGameMode0) + inputGameMode0);
    displayMenu();

    console.log("\n\n");
    let gameModeInput = prompt(alignCenter(YOUR_CHOICE_TEXT) + YOUR_CHOICE_TEXT).toLowerCase();

    maybeQuitGame(gameModeInput);

    while (
        gameModeInput !== "1" &&
        gameModeInput !== "2" &&
        gameModeInput !== "3" &&
        gameModeInput !== "4"
    ) {
        maybeQuitGame();

        let wrongMenuInput1 = "Sorry i dont understand your input,";
        let wrongMenuInput2 = "just enter the number 1-4 to select the Game Mode!";

        console.clear();
        console.log(TIC_TAC_TOE);

        console.log("\n" + alignCenter(wrongMenuInput1) + wrongMenuInput1);
        console.log(alignCenter(wrongMenuInput2) + wrongMenuInput2);

        displayMenu();
        console.log("\n");

        gameModeInput = prompt(alignCenter(YOUR_CHOICE_TEXT) + YOUR_CHOICE_TEXT).toLowerCase();
    }

    return gameModeInput;
}

module.exports = {
    getGameModeInput: getGameMode,
}

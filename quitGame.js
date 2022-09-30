const { alignCenter } = require("./formatText");

//********************** FUNCTION: QUIT GAME **********************
function quitGame() {
    console.clear();
    let goodbyeLength =              "                                            ";
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

/**
 * Quits the game if the given string is "quit".
 */
function maybeQuitGame(input) {
    if (input === "quit") {
        quitGame();
    }
}

module.exports = {
    maybeQuitGame: maybeQuitGame,
}

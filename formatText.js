//********************* TIC TAC TOE ASCII *********************
const ticLength = "                                                           ";
const padding = alignCenter(ticLength);
const TIC_TAC_TOE = "\n" +
    padding + " _______ _          _______             _______            \n" +
    padding + "|__   __(_)        |__   __|           |__   __|           \n" +
    padding + "   | |   _    ___     | |  __ _   ___     | |  ___    ___  \n" +
    padding + "   | |  | |  / __|    | | / _` | / __|    | | / _ \\  / _ \\ \n" +
    padding + "   | |  | | | (__     | || (_| || (__     | || (_) ||  __/ \n" +
    padding + "   |_|  |_|  \\___|    |_| \\__,_| \\___|    |_| \\___/  \\___| \n";

//*************VARIABLE FOR GETMENUOPTION & START GAME MENU****************
// TODO: Find a better variable name!
const YOUR_CHOICE_TEXT = "Your choice: "; //Used more times

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

module.exports = {
    TIC_TAC_TOE: TIC_TAC_TOE,
    YOUR_CHOICE_TEXT: YOUR_CHOICE_TEXT,
    alignCenter: alignCenter,
    displayText: displayText,
    newLine: newLine,
};

let countMoves = 9;
isWin = false;

function draw() {
    while (countMoves === 9 && isWin === false) {
        let goodbye = "\n" +
        " _____                     \n" +
        "|  __ \                    \n" +
        "| |  | |_ __ __ ___      __\n" +
        "| |  | | '__/ _` \\ \\ /\\ / /\n" +
        "| |__| | | | (_| |\\ V  V / \n" +
        "|_____/|_|  \\__,_| \\_/\\_/  \n";
        console.log(goodbye);
        process.exit();
    }  
}
draw();
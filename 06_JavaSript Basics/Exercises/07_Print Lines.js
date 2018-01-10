function printingInputLines (arr) {
    for (let line of arr) {
        if (line != "Stop") {
            console.log(line);
        } else if (line == "Stop") {
            break;
        }
    }
}

printingInputLines(['Line 1', 'Line 2', 'Line 3', 'Stop']);
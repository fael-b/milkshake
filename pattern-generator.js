function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function patternGen(colors, variations, lineLength, nbLines) {
    let returnList = createArray(nbLines, lineLength);
    for (let i=0; i<nbLines; i++) {
        for (let j=0; j<lineLength; j++) {
            let color=colors[Math.floor(Math.random() * colors.length)] 

            if (i==0 && j==0) {
                returnList[i][j] = color + (Math.floor(Math.random() * variations) + 1)
                continue
            }
            if(j>0) {
                if(i>0) {
                    if(j == lineLength-1) {
                        while (returnList[i][j-1].substr(0, returnList[i][j-1].length - 1) == color 
                        || returnList[i-1][j].substr(0, returnList[i-1][j].length - 1) == color 
                        || returnList[i-1][j-1].substr(0, returnList[i-1][j-1].length - 1) == color) {
                            color=colors[Math.floor(Math.random() * colors.length)]
                        }
                    } else {
                        while (returnList[i][j-1].substr(0, returnList[i][j-1].length - 1) == color 
                        || returnList[i-1][j].substr(0, returnList[i-1][j].length - 1) == color 
                        || returnList[i-1][j-1].substr(0, returnList[i-1][j-1].length - 1) == color
                        || returnList[i-1][j+1].substr(0, returnList[i-1][j+1].length - 1) == color) {
                            color=colors[Math.floor(Math.random() * colors.length)]
                        }
                    
                    }
                } else {
                    while (returnList[i][j-1].substr(0, returnList[i][j-1].length - 1) == color) {
                        color=colors[Math.floor(Math.random() * colors.length)]
                    }
                }
            } else {
                while (returnList[i-1][j].substr(0, returnList[i-1][j].length - 1) == color 
                || returnList[i-1][j+1].substr(0, returnList[i-1][j+1].length - 1) == color) {
                    color=colors[Math.floor(Math.random() * colors.length)]
                }
            }
            returnList[i][j] = color + (Math.floor(Math.random() * variations) + 1)
        }
    }
    return returnList
}

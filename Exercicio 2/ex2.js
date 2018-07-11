// var cA = require("../Services/changeArrayService.js")

// var strArr = [
//     "(2,1,5)", "(4,3,3)", "(6,3,1)", "(8,4,2)",
//     "(3,4,7)", "(1,6,2)", "(7,7,7)", "(5,8,1)"
// ];

var strArr = ["(2,1,5)", "(5,4,3)", "(2,2,2)", "(1,8,4)",
    "(3,4,5)", "(1,8,3)", "(7,7,7)", "(1,5,8)"
]


function changeArray(array) {
    var newArray = [];
    var newObj = {};

    for (var x = 0; x < array.length; x++) {

        // retira os parenteses
        var string = array[x].substring(1, 6);
        // coloca cada número em uma posição no array 
        string = string.split(",")

        //popula o objeto
        newObj["x"] = parseInt(string["0"]);
        newObj["y"] = parseInt(string["1"]);
        newObj["z"] = parseInt(string["2"]);

        newArray.push(newObj);

        newObj = {};
    }
    // console.log(newArray);

    return newArray;
}


function possiblesDiagonalDir() {
    var possibleDiagon = [];
    // var arrayOut = [];
    var objOut = {};
    var obj = {};
    var max = 8;
    var auxY = 8;
    var auxX = max;
    var y = 8;
    var x = max;

    // while (auxX >= 1) {
    while (x > 0) {
        // x do inicio da diagonal - para agrupar
        objOut.x = x;
        objOut.diag = [];

        while (auxY >= 1) {
            // limpa objeto
            obj = {};
            obj.x = auxX;
            obj.y = auxY;
            objOut.diag.push(obj)

            auxY--;
            auxX--;
        }

        y--;
        auxY = y

        x--;
        auxX = max
        possibleDiagon.push(objOut);
        objOut = {};

    }

    // console.log(possibleDiagon);

    return possibleDiagon;
}

function possiblesDiagonalEsq() {
    var possibleDiagon = possiblesDiagonalDir();
    // var arrayOut = [];
    var objOut = {};
    var obj = {};
    var max = 8;
    var auxY = 1;
    var auxX = max;
    var y = 1;
    var x = max;

    // while (auxX >= 1) {
    while (x >= 0) {
        // x do inicio da diagonal - para agrupar
        objOut.x = x;
        objOut.diag = [];

        while (auxX > 0) {
            // limpa objeto
            obj = {};
            obj.x = auxX;
            obj.y = auxY;
            objOut.diag.push(obj)

            auxY++;
            auxX--;
        }

        y = 1;
        auxY = y

        x--;
        auxX = x
        possibleDiagon.push(objOut);
        objOut = {};

    }

    console.log(possibleDiagon);

    return possibleDiagon;
}

function validateIfStringIsAlreadyInOutput(string, output) {
    var aux = string.substring(1, 6);
    var aux2 = string.substring(8, 13);
    var newString = aux + aux2;
    var exits = false;

    output.forEach((obj) => {
        var value = obj.indexOf(aux);
        var value2 = obj.indexOf(aux2);
        if (value != -1 && value2 != -1) {
            exits = true;
        }
    })

    return exits;



}

function Queens3D(strArr) {
    var receivedArray = changeArray(strArr);
    var possiblesDiagon = possiblesDiagonalEsq();
    var output = [];
    var string = '';

    for (var i = 0; i < receivedArray.length; i++) {
        for (var i2 = 0; i2 < receivedArray.length; i2++) {
            if (i != i2) {

                if (receivedArray[i].x == receivedArray[i2].x && receivedArray[i].z == receivedArray[i2].z) {
                    string = "(" + receivedArray[i].x + "," + receivedArray[i].y + "," + receivedArray[i].z + ")" +
                        "(" + receivedArray[i2].x + "," + receivedArray[i2].y + "," + receivedArray[i2].z + ")";
                    var exits = validateIfStringIsAlreadyInOutput(string, output);
                    if (!exits) {
                        console.log("(" + "ta na mesma coluna " + ")");
                        output.push(string);

                    }

                } else if (receivedArray[i].y == receivedArray[i2].y) {
                    string = "(" + receivedArray[i].x + "," + receivedArray[i].y + "," + receivedArray[i].z + ")" +
                        "(" + receivedArray[i2].x + "," + receivedArray[i2].y + "," + receivedArray[i2].z + ")";
                    var exits = validateIfStringIsAlreadyInOutput(string, output);
                    if (!exits) {
                        console.log("(" + "ta na mesma linha " + ")");
                        output.push(string);
                    }

                } else {
                    possiblesDiagon.forEach(obj => {
                        for (var i3 = 0; i3 < obj.diag.length; i3++) {
                            if (receivedArray[i].x == obj.diag[i3].x &&
                                receivedArray[i].y == obj.diag[i3].y) {
                                for (var i4 = 0; i4 < obj.diag.length; i4++) {
                                    if (receivedArray[i2].x == obj.diag[i4].x &&
                                        receivedArray[i2].y == obj.diag[i4].y) {
                                        string = "(" + receivedArray[i].x + "," + receivedArray[i].y + "," + receivedArray[i].z + ")" +
                                            "(" + receivedArray[i2].x + "," + receivedArray[i2].y + "," + receivedArray[i2].z + ")";

                                        var exits = false;
                                        exits = validateIfStringIsAlreadyInOutput(string, output);
                                        if (!exits) {
                                            output.push(string);
                                            console.log("(" + "ta na mesma diagonal " + ")");
                                        }
                                    }

                                }


                            }
                        }
                    });

                }

            }
        }
    }

    console.log("output: " + output);
    console.log("output(tamanho): " + output.length);
    // console.log(receivedArray);

    return output;
}

Queens3D(strArr);
// var array = [
//     "0000",
//     "1000",
//     "0002",
//     "0002"
// ];

var array = ["10000", "00200", "00000", "02000", "00000"];


console.log(array);

function changeArray(array) {
    var stringlength;
    var newArray = [];
    var newObj = {};

    for (var x = 0; x < array.length; x++) {
        stringlength = array[x].length;
        var string = array[x];

        //limpa o objeto
        newObj = {};

        //Adiciona cada linha da matriz em um objeto
        for (var y = 0; y < stringlength; y++) {
            newObj[y] = string.charAt(y);
        }

        newArray.push(newObj);
    }
    console.log(newArray);

    return newArray;
}

function closest12(array) {
    var receivedArray = changeArray(array);
    var receivedArrayLength = receivedArray.length;
    var foundOne = false;
    var foundTwo = false;
    var xOne = xTwo = yOne = yTwo = 0;
    var distance = 0;
    var distanceAlterative = 0;
    var columnqtd = 0;
    var halfColumnQtd = 0;

    for (var y = 0; y < receivedArray.length; y++) {

        for (var x in receivedArray[y]) {
            if (receivedArray[y][x] == 1 && foundOne == false) {
                foundOne = true;
                yOne = parseInt(y);
                xOne = parseInt(x);
            } else if (receivedArray[y][x] == 2 && foundTwo == false) {
                foundTwo = true;
                yTwo = parseInt(y);
                xTwo = parseInt(x);
            }
        }
        columnqtd = y + 1;
        halfColumnQtd = Math.round((columnqtd / 2));
    }

    if (!foundOne || !foundTwo)
        return 0

    console.log("xOne " + xOne);
    console.log("yOne " + yOne);
    console.log("xTwo " + xTwo);
    console.log("yTwo " + yTwo);
    console.log("halfColumnQtd " + halfColumnQtd);
    // console.log("receivedArrayLength " + receivedArrayLength / 2);

    // VERIFICA O "X" DA MATRIZ

    // verifica se x do nº 1 é igual ao do nº 2
    if (xTwo == xOne) {
        distance = 0;
        distanceAlterative = 0;
    }
    // Verifica se x do nº 1 é igual metade e x nº 2 menor que a metade
    else if (xOne == halfColumnQtd && xTwo < halfColumnQtd) {
        distance = xOne - xTwo;
    }
    // Verifica se x do nº 1 é menor que metade e x nº 2 é igual a metade
    else if (xOne < halfColumnQtd && xTwo == halfColumnQtd) {
        distance = xTwo - xOne;
    }
    // Verifica se x do nº 1 é igual metade e x nº 2 maior que a metade
    else if (xOne == halfColumnQtd && xTwo > halfColumnQtd) {
        distance = xTwo - xOne;
    }
    // Verifica se x do nº 1 é menor que a metade e x nº 2 é igual a metade
    else if (xOne < halfColumnQtd && xTwo == halfColumnQtd) {
        distance = xTwo - xOne;
    }
    // Verifica se x do nº 1 e nº 2 estão na metade esquerda do array
    else if (xOne < halfColumnQtd && xTwo < halfColumnQtd) {
        console.log("é menor que a metade");
        if (xOne > xTwo) {
            distance = xOne - xTwo;
        } else {
            distance = xTwo - xOne;
        }
    }
    // Verifica se x do nº 1 e nº 2 estão na metade direita do array
    else if (xOne > halfColumnQtd && xTwo > halfColumnQtd) {
        console.log("é maior que a metade");
        if (xOne > xTwo) {
            distance = xOne - xTwo;
        } else {
            distance = xTwo - xOne;
        }
    }
    // Verifica se x do nº 1 esta na metade direita e x do nº 2 esta na metade esquerda do array
    else if (xOne > halfColumnQtd && xTwo < halfColumnQtd) {
        console.log("xOne é maior que a metade , xTwo é menor");
        distance = xOne - xTwo;
    }
    // Verifica se x do nº 1 esta na metade esquerda e x do nº 2 esta na metade direita do array
    else if (xOne < halfColumnQtd && xTwo > halfColumnQtd) {
        console.log("xOne é maior que a metade , xTwo é menor");
        distance = xTwo - xOne;
    }

    // VERIFICA O "Y" DA MATRIZ

    // Verifica se Y do nº 1 e nº 2 estão na metade esquerda do array
    if (yTwo == yOne) {
        distanceAlterative = 0;
        distance += 0;
    } else {
        if (yOne > yTwo) {
            distanceAlterative += yOne - yTwo;
            distance += yOne - yTwo;
        } else {
            distanceAlterative += yTwo - yOne;
            distance += yTwo - yOne;
        }
    }

    // VERIFICA DISTÂNCIA ALTERNATIVA
    var copyXOne = parseInt(xOne);
    var copyXTwo = parseInt(xTwo);

    receivedArray.forEach((obj) => {
        for (var x in obj) {
            if (copyXOne != copyXTwo) {
                copyXOne--;
                if (copyXOne < 0) {
                    copyXOne = columnqtd;
                } else {
                    distanceAlterative += 1;

                }

            }
        }
    })

    console.log("distanceAlterative: " + distanceAlterative);
    console.log("Distance: " + distance);

    if (distanceAlterative < distance)
        return distanceAlterative;

    return distance;


}

closest12(array);
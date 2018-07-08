export default function changeArray(array) {
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
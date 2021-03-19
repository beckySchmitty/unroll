const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];



function unRoll(input) {

    let str = "";

    for (let i=0; i < input.length; i ++) {
            str = str + (input[i].toString()) + ","
    }

    let arr = Array.from(str)

    for (let i=0; i < arr.length; i ++) {
        if (arr[i] !== ",") {
            arr[i] = Number(arr[i])
        }
    }

    return arr;
}


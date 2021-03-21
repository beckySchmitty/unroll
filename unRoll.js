const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];


function unRoll(input) {

    let str = "";

    for (let i=0; i < input.length; i ++) {
            str = str + (input[i].toString()) + ","
    }

    let arr = Array.from(str.split(","))
    const rtrnArray = [];

    for (let i=0; i < arr.length - 1; i ++) {

        if (arr[i] !== ",") {
            rtrnArray.push(Number(arr[i]) || arr[i])
        }

    }

    return rtrnArray;
}


unRoll(square)
unRoll(smallerSquare)

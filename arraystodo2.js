// Reverse
function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}
myArray= [2,8,12,22];
reverseArray(myArray);




// Rotate
function rotateArray(arr, moveBy) {
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[arr.length - 1];
            for (var k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp; 
        }
    } else {
        
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
            
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
                
            }
            arr[arr.length - 1] = temp; 
        }
    
    }
    console.log(arr);
}
var myArray= [2,8,12,22];
var moveBy=1;
rotateArray(myArray, moveBy);






// Filter Range
function filterRange(arr, minVal, maxVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minVal || arr[i] > maxVal) {
            for (var k = i+1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr.length--;
            i--; 
        }
    }
    console.log(arr);
}
var myArray= [2,8,12,22];
var minVal=1;
var maxVal=15;
filterRange(myArray, minVal, maxVal);

var myArray= [2,8,12,22];
var minVal=1;
var maxVal=9;
filterRange(myArray, minVal, maxVal);




// Concat
function concatArrays(arr1, arr2) {
    var newArr = [];
    var curInd = 0; 
    for (var i = 0; i < arr1.length; i++) {
        newArr[curInd] = arr1[i];
        curInd++;
    }
    for (var i = 0; i < arr2.length; i++) {
        newArr[curInd] = arr2[i];
        curInd++;
    }
    console.log(newArr)
    return newArr;
    
}
var myArrayOne= [2,8,12,22];
var myArrayTwo= [9, 7, 13];
concatArrays(myArrayOne, myArrayTwo);






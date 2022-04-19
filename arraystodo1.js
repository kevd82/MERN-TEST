// Push Front
function pushFront(arr, val) {
    var temp1 = arr[0], temp2 = arr[1];
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val;
    console.log(arr);

}
myArray= [2,8,12,22];
pushFront(myArray, 66);



// Pop Front
function popFront(arr) {
    var returnVal = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
       
        arr[i-1] = arr[i];
    }
    arr.pop(); 
    console.log(returnVal);
    return returnVal;
    
}
myArray2=[2,8,12,22];
popFront(myArray2);



// Insert At
function insertAt(arr, index, val) {
    for (var i = arr.length - 1; i >= index; i--) {
        arr[i+1] = arr[i];
    }
    arr[index] = val;
    console.log(arr);
}
myArray= [2,8,12,22];
insertAt(myArray, 3, 66);

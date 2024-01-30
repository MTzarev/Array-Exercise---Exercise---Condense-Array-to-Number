function condense (arr){
    if (arr.length === 1) {
        console.log(arr[0]);
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = Number(arr[i]) + Number(arr[i + 1]);
    }
    arr.pop();
    condense(arr);
}
condense([2,10,3]);
//condenseArrayToNumber([5,0,4,1,2]);
//condenseArrayToNumber([1]);

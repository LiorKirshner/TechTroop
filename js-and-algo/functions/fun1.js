//ex1
function isEven(num){
    return (num % 2 == 0 );
}


//ex2
function odd_array(arr){
    for (let i=0;i<arr.length;i++){
        if (!isEven(arr[i])) console.log(arr[i]); 
    }

}

let arr = [3,43,2,5,6,46,46,46,2,2,21,34,5553];
odd_array(arr);
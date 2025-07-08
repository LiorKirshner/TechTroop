let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



//1.delete the second and third elements
numbers.splice(1,2);

//change the fourth element to 1
numbers[3] = 1;

//delete the last 4 elements
numbers.splice(-4,4);

//add another element 0 to the beginning of the array
numbers = [0 , ...numbers];

//print the modified array
console.log(numbers);


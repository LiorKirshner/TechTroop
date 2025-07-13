function duplicates_sort(arr) {
  arr.sort();
  let priv_print = null;
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i - 1] == arr[i]) & ( arr[i] != priv_print)){
      console.log(arr[i]);
      priv_print = arr[i];
    }
  }
}

const arr = [
  45, 5, 5, 5, 445, 2, 1, 57, 5, 4, 4565, 444, 654, 5, 46, 46564, 646, 445,
];
duplicates_sort(arr);


function duplicates_sort(arr) {
  // Sort the array so that duplicates are adjacent
  arr.sort();
  let priv_print = null;
  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Check if the current element is the same as the previous one
    // and not already printed (to avoid duplicate prints)
    if ((arr[i - 1] == arr[i]) & (arr[i] != priv_print)) {
      console.log(arr[i]);
      // Store the last printed duplicate to prevent printing it again
      priv_print = arr[i];
    }
  }
}

function duplicates_set(arr) {
  // Create a Set to store unique elements encountered
  let set = new Set();
  // Iterate through each element in the array
  for (let num of arr) {
    // If the element is already in the set, it is a duplicate
    if (set.has(num)) console.log(num);
    // Otherwise, add the element to the set
    else set.add(num);
  }
}

function duplicates_map(arr) {
  // Create a Map to count the frequency of each element
  const map = new Map();

  // Iterate through each element and update its count in the Map
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Iterate through the Map to find elements with count greater than 1
  // These elements are duplicates
  for (let [num, count] of map) {
    if (count > 1) {
      console.log(num);
    }
  }
}

const arr = [
  45, 5, 5, 5, 445, 2, 1, 57, 5, 4, 4565, 444, 654, 5, 46, 46564, 646, 445,
];
console.log("set");
duplicates_set(arr);

console.log("map");
duplicates_map(arr);

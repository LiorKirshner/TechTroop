//O(n^2)
function TwoSum_BruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) return true;
    }
  }
  return false;
}

//sort+2 pointer technique
// O(n log n) - sorting + two pointer

function TwoSum_TwoPointer(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }
  return false;
}

console.log(TwoSum_BruteForce([5, 7, 1, 78], 8));
console.log(TwoSum_TwoPointer([5, 7, 1, 78], 8));

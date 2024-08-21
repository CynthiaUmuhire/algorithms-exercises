/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
  My Steps:
  ----------
  1. Iterate over the array from the index 1 because for this insertion sort we know that the index 0 is sorted
  2. check if the item on the index 1 is actually supposed to be on index 1 or on the previous one and shift it or leave it there
  3. Go on the next number and check again ....
*/

function insertionSort(nums) {
  for (let i = 0; i< nums.length; i++){
    for (let j = i; j>=0; j--){
if ( j === 0) continue
if (nums[j] < nums[j-1]){
  const temp = nums[j-1]
  nums[j-1] = nums[j]
  nums[j] = temp
}else {
  continue
}
    }
  }
  return nums
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});


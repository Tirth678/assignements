/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const nums = [2,7,0,1];
const findLargestElement = (arr) => {
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }
    return max;
}
console.log(findLargestElement(nums))
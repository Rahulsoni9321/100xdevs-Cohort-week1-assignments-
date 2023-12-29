/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    for (let i=0;i<numbers.length-1;i++){
        if (numbers[i]>numbers[i+1]){
           let temp=numbers[i];
           numbers[i]=numbers[i+1];
           numbers[i+1]=temp;
        }
    }
    return numbers[numbers.length-1];
}

module.exports = findLargestElement;
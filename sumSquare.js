function squareSum(numbers){
 let newArr = []
 for (index = 0; index < numbers.length; index++) {
    newArr.push(numbers[index] **2)  
}
  let sum = 0
  for (index = 0; index < newArr.length; index++) {
    sum += newArr[index]
    }
  return sum;
}

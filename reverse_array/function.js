const getReverse =(array)=>{
    
const reversedArray = []

    let valueAtIndex;

for(let i = array.length - 1; i >= 0; i--) {
    valueAtIndex = array[i]
    
    reversedArray.push(valueAtIndex)
  }
  return reversedArray;
}

// find peak value from an array
// result: index: Array [ 3, 7 ]
​
//peakValue: Array [ 9, 7 ]
//const arr = [4, 3, 4, 9, 5, 2, 3, 7, 3, 2, 3, 4];
const peak = (arr = []) => {
   let index = []
   let peakValue = []
   for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i - 1]) {
         if (arr[i] > arr[i + 1]) {
            index.push(i)
            peakValue.push(arr[i])
         } else if (arr[i] === arr[i + 1]) {
            let temp = i
            while (arr[i] === arr[temp]) i++
            if (arr[temp] > arr[i]) {
                index.push(temp)
               peakValue.push(arr[temp])
            }
         }
      }
   }
   return { peakValue, index };
};
//console.log(peak(arr));

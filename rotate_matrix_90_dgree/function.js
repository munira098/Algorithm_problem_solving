


const rotateMatrixClockWise = (arr) => {

    const N = arr.length
    for(let x = 0; x < N / 2; x++){
      for(let y = x; y < N - x - 1; y++){
 
        
        let temp = arr[x][y];
 
        arr[x][y] = arr[N - 1 - y][x];
 
        arr[N - 1 - y][x] = arr[N - 1 - x][N - 1 - y];
 
        arr[N - 1 - x][N - 1 - y] = arr[y][N - 1 - x];
 
        arr[y][N - 1 - x] = temp;
      }
    }
   
   return arr;
 }

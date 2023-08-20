/* 
problem name: find the smallest number from an array
sample: [1, 23, 43,-11, 12, 54, 76, 98, 32]
result: -11
*/

const getSmallestNumber = (list) => {
    const arrlength= list.length;
    
    let min= list[0];

    for(let i=0;i<arrlength ;i++)
{

    if (list[i]<=min){

        min=list[i];
    }

}
return min;

};

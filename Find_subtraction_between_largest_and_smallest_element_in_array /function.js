
/* problem name: 11. Find the subtraction between largest and smallest element in array.
 sample [8, 23, 43,11, 12, 54, 76, 98, 32]
 result=90*/


const getSmallestNumber = (list) => {
    const arrlength= list.length;
   let sub;
    let min= list[0];

    for(let i=0;i<arrlength ;i++)
{

    if (list[i]<=min){

        min=list[i];
    }

}

let max= list[0];

for(let i=0;i<arrlength ;i++)
{

if (list[i]>=max){

    max=list[i];
}

}
sub= max-min;

return sub;

};

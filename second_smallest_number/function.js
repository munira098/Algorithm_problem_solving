/* problem name: 8.	 Find second smallest number form array.
 sample[39,45,12,43,87,-23,872,974,6752]
 result=-23*/

const sortarray = (array)=>{
const size =array.length;
    for(let i=0;i<size;i++)
    {
        for( let j=0;j<size;j++)
        {
            if(array[i]>array[j])
            {
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }

return array[size-2];

};

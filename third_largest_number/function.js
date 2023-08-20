let sortarray = (array)=>{
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
    
    return array[size-7];
    
    };

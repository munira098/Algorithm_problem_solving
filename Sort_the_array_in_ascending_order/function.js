//const array=[33,56,12,79,-33,52,-23];
const sortArray = (array) => {
array.sort(function(a,b){

 if (a>b)
 {
    
    return -1;
}
if (a<b)
{
    return +1;
}
if (a==b)
{
    return 0;
}

});

//console.log(array);
return array;
//};
};

let arr = [11, 22, 33,44,55,66,77,88,99];

let newArr = arr.filter(item => {
    if(item % 2 !== 0)
        return item;
})
console.log('newArr: ', newArr);

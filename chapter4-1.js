function findMax(arr){
    console.log(arr)
    if(arr.length ==2)
        return arr[0]>arr[1] ? arr[0]:arr[1]
    let submax = findMax(arr.slice(1,arr.length))
    return arr[0]>submax ? arr[0]:submax;
}
const check= test=>{
    return test>0 ? console.log(test +' greater than 0') : console.log(test + ' lesser than 0')
}

let list=[4,12,13,15]
let maxElement = findMax(list);
console.log(maxElement)
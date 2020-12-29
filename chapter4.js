let arr = [2,4,6];
let total = 0;
function sum(bone){
 
    if(bone.length <=0 )
        return total
    else{
        total += bone.shift()
        sum(bone)
    }
}
sum(arr)
console.log('Sum equal = '+total)
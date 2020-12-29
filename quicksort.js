function quickSort(arr){
    //console.log(arr)
    //basic case
    if(arr.length<=1)
        return arr
    if(arr.length ==2){
        return arr[0]<arr[1]? arr: [arr[0],arr[1]]=[arr[1],arr[0]]
    }

    let anchorIndex = Math.floor(arr.length/2)
    let anchorValue=arr[anchorIndex]

    let greaterHalf = []
    let lesserHalf = []

    for(let i=0; i<arr.length;i++){
        if(arr[i]<=anchorValue)
            if(i!=anchorIndex)
                lesserHalf.push(arr[i])
        if(arr[i]>anchorValue)
            greaterHalf.push(arr[i])
    }
    

    greaterHalf = quickSort(greaterHalf)
    lesserHalf= quickSort(lesserHalf)
    return [...lesserHalf,anchorValue,...greaterHalf]
    // quickSort(arr.slice(anchor,arr.length)) 

    // quickSort(arr.slice(0,anchor))
    //lesserHalf.push(greaterHalf)


}

console.log(quickSort([9,5,7,1,3,8]))
const arr = ["123456789012", "098765432109", "123456789012", "111111111111", "098765432109", "222222222222"]

function findDuplicateIDs(arr:Array<string>):Array<string>{
    const obj = {}
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }
        else{
            obj[arr[i]] = 1
        }
    }

    const result = []
    for(let i in obj){
        if(obj[i]>1){
            result.push(i)
        }
    }

    return result
}

console.log(findDuplicateIDs(arr))
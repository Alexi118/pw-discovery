const arr = [-36,37,-12, -35, -1, -10, -34, -1]

function removeDuplicate(arr:Array<number>):Array<number>{
    return arr.filter((item,index) => arr.indexOf(item) === index);
}

function findSecondLargest(arr:Array<number>):string{
    const array = removeDuplicate(arr)
    let largest = arr[0]
    let second = arr[1]

    if(array.length==1){
        return "Không có số lớn thứ hai"
    }

    for(let i=0;i<array.length;i++){
        if(array[i]>largest){
            second = largest;
            largest = array[i];
        }
        else if(array[i]<largest && array[i]>second){
            second = array[i]
        }
    }

    return `Số lớn thứ hai là: ${second}`
}

console.log(findSecondLargest(arr))
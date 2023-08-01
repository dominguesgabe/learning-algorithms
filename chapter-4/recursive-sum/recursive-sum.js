const sumArray = [9,32,14,6,17,2]

console.log(binarySearch(sumArray))

function binarySearch(sumArray) {

    console.log(sumArray)
    
    if(sumArray.length < 2) {
        return sumArray[0]
    }

    return sumArray.pop() + binarySearch(sumArray)
}
const orderedArray = [1,2,3,4,5,6,7,8,9]
binarySearch(60)

function binarySearch(search) {
    let lower = 0
    let higher = orderedArray.length - 1
    
    while (lower <= higher) {
        let middle = Math.floor((lower + higher) / 2)

        let candidate = orderedArray[middle]

        if (search === candidate) {
            return console.log('tadã!, found on array position: ', candidate)
        } else if (candidate < search) {
            lower = middle + 1
        } else if (candidate > search) {
            higher = middle - 1
        }
    }

    console.log('-1, value not found on array');
}
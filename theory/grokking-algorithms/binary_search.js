const binary_search = (arr, item) => {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let middle = Math.floor((low + high) / 2)
        let guess = arr[middle]

        if (guess === item) {
            return middle
        }
        if (guess > item) {
            high = middle - 1
        } else {
            low = middle + 1
        }
    }
    return false
}

const myArray = [1, 3, 5, 7, 9];
console.log(binary_search(myArray, 3)); //1
console.log(binary_search(myArray, 9)); //4
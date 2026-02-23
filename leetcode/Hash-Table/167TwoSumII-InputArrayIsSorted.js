const twoSum = function(numbers, target) {
    let first = 0
    let last = numbers.length - 1

    while (first < last) {

        if (numbers[first] + numbers[last] > target) {
            last--
        }

        if (numbers[first] + numbers[last] < target) {
            first++
        }

        if (numbers[first] + numbers[last] === target) {
            return [first + 1, last + 1]
        }

    }

};
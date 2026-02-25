const sortByBits = function(arr) {
    const countOnes = (n) => {
        let count = 0

        while (n > 0) {
            count += (n & 1)
            n >>= 1
        }

        return count
    }

    return arr.sort((a, b) => {
        let countA = countOnes(a)
        let countB = countOnes(b)

        if (countA !== countB) return countA - countB
        //если единиц поровну
        return a - b
    })
};
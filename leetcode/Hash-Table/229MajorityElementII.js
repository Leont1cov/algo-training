const majorityElement = function(nums) {
    let limit = nums.length / 3

    let candidate1 = null; let candidate2 = null
    let count1 = 0; let count2 = 0

    for (let current of nums) {
        if (current === candidate1) {count1++}
        else if (current === candidate2) {count2++}
        else if (count1 === 0) { candidate1 = current; count1 = 1 }
        else if (count2 === 0) { candidate2 = current; count2 = 1 }
        else { count1--; count2-- }
    }

    count1 = 0; count2 = 0
    for (let current of nums) {
        if (current === candidate1) count1++
        else if (current === candidate2) count2++
    }

    let result = []
    if (count1 > limit) result.push(candidate1)
    if (candidate2 !== candidate1 && count2 > limit) result.push(candidate2)

    return result
};
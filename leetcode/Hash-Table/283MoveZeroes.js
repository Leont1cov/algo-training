const moveZeroes = function(nums) {
    let writeNums = 0

    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            nums[writeNums] = nums[current]
            writeNums++
        }
    }

    for (let i = writeNums; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
};
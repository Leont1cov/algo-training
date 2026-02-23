const removeDuplicates = function(nums) {
    let going = 1

    for (let current = 1; current < nums.length; current++) {
        if (nums[current] !== nums[going - 1]) {
            nums[going] = nums[current]
            going++
        }
    }

    return going
};
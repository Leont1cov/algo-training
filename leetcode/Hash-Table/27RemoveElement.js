const removeElement = function(nums, val) {
    let going = 0

    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== val) {
            nums[going] = nums[current]
            going++
        }
    }

    return going
};
const singleNumber = function(nums) {
    let storage = {}

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        storage[num] = (storage[num] || 0) + 1
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (storage[num] === 1) return nums[i]
    }

};
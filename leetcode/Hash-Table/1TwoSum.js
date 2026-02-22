const twoSum = function(nums, target) {
    let storage = {}

    for (let i = 0; i < nums.length; i++) {
        let find = target - nums[i]

        if (find in storage) {
            return [storage[find], i]
        }
        storage[nums[i]] = i
    }

    return []
};
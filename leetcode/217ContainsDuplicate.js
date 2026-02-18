const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};

//2 вариант решения

const containsDuplicate2 = function(nums) {
    let storage = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in storage) {
            return true
        }
        storage[nums[i]] = true
    }
    return false
}
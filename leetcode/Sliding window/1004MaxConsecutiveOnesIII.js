const longestOnes = function(nums, k) {
    let left = 0
    let maxLen = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            k--
        }

        while (k < 0) {
            if (nums[left] === 0) {
                k++
            }
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); //[1,1,1,0,0,1,1,1,1,1,1] -> 6
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)) //[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1] -> 10
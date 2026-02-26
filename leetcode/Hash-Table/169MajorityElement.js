//Алгоритм Бойера-Мура голосование
const majorityElement = function(nums) {
    let candidate = null
    let countForCandidate = 0

    for (let currentNum = 0; currentNum < nums.length; currentNum++) {
        //Если голосов нет, то первый попавшийся кандидат занимает трон
        if (countForCandidate === 0) {
            candidate = nums[currentNum]
            countForCandidate = 1  //отдаём ему 1 голос
        } else if (nums[currentNum] === candidate) { //идём дальше (начиная с 1)
            countForCandidate++
        } else {
            countForCandidate--
        }

    }
    return candidate
};
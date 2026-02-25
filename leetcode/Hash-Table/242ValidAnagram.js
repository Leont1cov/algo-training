const isAnagram = function(s, t) {
    let storage = {}

    if (s.length !== t.length) return false

    for (let char of s) {
        storage[char] = (storage[char] || 0) + 1
    }

    for (let char of t) {
        if (!storage[char]) return false
        storage[char]--
    }

    return true
};
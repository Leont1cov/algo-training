const firstUniqChar = function(s) {
    let storage = {}

    for (let i = 0; i < s.length; i++) {
        let num = s[i]

        storage[num] = (storage[num] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        let num = s[i]

        if (storage[num] === 1) return i
    }

    return -1
};
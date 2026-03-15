const maxVowels = function(s, k) {
    let set = new Set(["a", "e", "i", "o", "u"]);
    let maxLen = 0
    let currentVowels = 0

    //считаем гласные в самом первом окне ["l", "e", "e"]
    for (let i = 0; i < k; i++) {
        if (set.has(s[i])) currentVowels++
    }
    //сохраняем первый рекорд
    maxLen = currentVowels

    //катим окно дальше по строке
    for (let right = k; right < s.length; right++) {
        //буква заходит справа ["e", "e", "t"]
        if (set.has(s[right])) currentVowels++

        //левую букву убираем ["e", "t", "c"]
        if (set.has(s[right - k])) currentVowels--

        //обновляем рекорд
        maxLen = Math.max(maxLen, currentVowels);
    }

    return maxLen

};

console.log(maxVowels("abciiidef", 3)) //3
console.log(maxVowels("aeiou", 2)) //2
console.log(maxVowels("leetcode", 3)) //2

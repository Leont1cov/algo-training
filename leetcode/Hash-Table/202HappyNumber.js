const isHappy = function(n) {
    //getNext - возвращает сумму квадратов числа n
    const getNext = (n) => {
        let totalSum = 0

        while (n > 0) {
            let digit = n % 10 //Достаём первое число
            totalSum += digit * digit //3 * 3 = прибавляем к сумме
            n = Math.floor(n / 10) //берем оставшиеся числа, округляем их вниз, если равно 0, то завершается цикл
        }
        return totalSum
    }

    let slow = n
    let fast = getNext(slow)

    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }

    return fast === 1
};
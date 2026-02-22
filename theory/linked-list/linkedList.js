class LinkedListNode {
    // инициализируем элемент
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    // Метод возвращает приведенной к строке текущий элемент
    toString() {
        return this.value
    }
}

class LinkedList {
    // не указываем head и tail в аргументах конструктора т.к. в будущем они будут сами определяться, а не явно
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const newNode = new LinkedListNode(value)

        // Если элементов нет (ни head, ни tail), то тогда наш новый элемент становится и head и tail (то есть он единственный)
        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode

            return this
        }

        // Если элементы в списке уже были, то берем хвост списка и указываем следующий элемент newNode (tail всегда указывает на null)
        this.tail.next = newNode //записали новый элемент

        this.tail = newNode //последний элемент становится хвостом

        return this
    }

    // Метод для представления списка в массиве
    toArray() {
        const nodes = []

        let currentNode = this.head

        while (currentNode) { //пока у нас существует currentNode
            nodes.push(currentNode)
            currentNode = currentNode.next //когда дойдем до конца currentNode станет равен Null и цикл завершится
        }

        return nodes
    }

    // Метод для представления списка в строке
    toString() {
        return this.toArray().map(n => n.toString()).toString()
    }
}

const list = new LinkedList()
list.append("a").append("b").append("c")

console.log(list.toArray())
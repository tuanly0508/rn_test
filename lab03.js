// 1. Xây dựng cấu trúc dữ liệu danh sách liên kết đôi (double-linked list)
// 2. Lưu trữ danh sách các số 1,4,7,8 vào danh sách liên kết
// 3. Viết hàm thêm một phần tử vào cuối danh sách
// 4. Thêm 9 vào cuối danh sách đã có
// 5. Viết hàm thêm phần tử vào đầu danh sách 
// 6. Thêm 5 vào đầu danh sách đã có
// 7. Viết hàm xóa phần tử ở đầu danh sách & trả ra giá trị bị xóa
// 8. Xóa phần tử đầu tiên ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó
// 9. Viết hàm xóa phần tử cuối cùng danh sách & trả ra giá trị bị xóa
// 10. Xóa phần cuối cùng ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó



const createNode = (value) => {
    return {
        value: value,
        next: null,
        prev: null,
    }
}

class doubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    insertTail(value) {
        this.length++
        let node = createNode(value)

        if(this.tail) {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
            return node
        }

        this.head = this.tail = node
        return node
    }

    insertHead(value) {
        this.length++
        let node = createNode(value)

        if(this.head) {
            this.head.prev = node
            node.next = this.head
            this.head = node
            return node
        }

        this.head = this.tail = node
        return node
    }

    removeHead() {
        if(this.head) {
            this.length--
            const removeHead = this.head
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            }else {
                this.tail = null
            } 
            console.log(removeHead);
            return removeHead
        }
    }

    removeTail() {
        if(this.tail) {
            this.length--
            let removeTail = this.tail
            let beforeTail = this.tail.prev

            this.tail = beforeTail
            if (this.tail) this.tail.next = null
            else this.head = null
            console.log(removeTail);
            return removeTail
        }
    }

    display() {
        let curr = this.head
        while (curr) {
            console.log(` ${curr.value} `);
            curr = curr.next
        }
    }
}
const ll = new doubleLinkedList()

ll.insertHead(8)
ll.insertHead(7)
ll.insertHead(4)
ll.insertHead(1)
ll.insertTail(9)
ll.insertHead(5)
ll.removeHead()
ll.display()

// ## STACK & QUEUE
// 11. Xây dựng cấu trúc dữ liẹu queue bằng cấu trúc dữ liệu danh sách liên kết đã xây dựng từ trước
// 12. Viết hàm thêm phần tử vào queue: function enQueue(value)
// 13. Thêm các phần 1,3,6,7 vao queue
// 14. Viết hàm lấy phần tử ra khỏi queue: function deQueue(): value

class Queue {
    constructor() {
        this.queue = new doubleLinkedList()
    }

    enQueue(value) {
        return this.queue.insertHead(value)
    }

    deQueue() {
        return this.queue.removeHead()
    }
}

const queue = new Queue()
queue.enQueue(7)
queue.enQueue(6)
queue.enQueue(3)
queue.enQueue(1)
console.log(queue);

console.log(queue.deQueue());
console.log(queue);
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        if (!data) {
            return "No data";
        }
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data) {
        if (!data) {
            return "No data";
        }
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertAfterNode(nodeData, newData) {
        if (!nodeData || !newData) {
            return "No data";
        }
        let current = this.head;
        while (current) {
            if (current.data === nodeData) {
                const newNode = new Node(newData);
                newNode.next = current.next;
                newNode.prev = current;
                current.next = newNode;
                if (newNode.next === null) {
                    this.tail = newNode;
                }
                return "Node inserted";
            }
            current = current.next;
        }
        return "Node not found";
    }

    traverse() {
        if (!this.head) {
            return "No data";
        }
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parámetro o lista";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "Node deleted";
        }
        let current = this.head;
        while (current) {
            if (current.data === element) {
                current.prev.next = current.next;
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                return "Node deleted";
            }
            current = current.next;
        }
        return "Node not found";
    }
}


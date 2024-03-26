class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    apend(data) {
        if (!data) {
            return "No data"

        }
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }


    }
    prepend(data) {
        if (!data) {
            return "No data"

        }
        const newNode = new Node();
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
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
        if (!data) {
            return "No data"
        }
        let valorActual = this.head;

        while (valorActual) {
            console.log(valorActual.data)
            valorActual = valorActual.next

        }


    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parametro o lista";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "El elemento indicado era la cabeza";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "El elemento ingresado se ha borrado y era la cola";
                }
                current.next = current.next.next;
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }
    deleteHead() {
        if (!this.head) {
            return "No hay"
        }
        this.head = this.head.next

        if (this.head === null) {
            this.tail = null
        }

    }
    deleteTail() {
        if (!this.head) {
            return "No hay"
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        let valorActual = this.head

        while (valorActual.next) {
            if (valorActual.next === this.tail) {
                this.tail = valorActual
                return "La cola ha sido reasignada"
            }
            valorActual = valorActual.next
        }
    }


}
class SLLNode { 
    constructor(val) {
        this.value = val; 
        this.next = null; 
    }
}

class SLL { 
    constructor() { 
        this.head = null;
    }



addFront(value) {
    var newNode = new SLLNode(value); 
    newNode.next = this.head; 
    this.head = newNode; 
}

removeFront() {
    if (this.head == null) {
        return this.head;
    }
    var removedNode = this.head;
    this.head = removedNode.next;
    removedNode.next = null;
    return this.head;
}

front() {
    if (this.head == null) {
        return null;
    } else { 
        return this.head.value;
    }

}

display() {
    var listString = ""; 
    if (this.head == null) {
        return ""; 
    }
    listString += this.head.value; 
    var runner = this.head.next;
    while (runner != null) {
        listString += ", " + runner.value; 
        runner = runner.next; 
    }
    return listString;
}
}


class LinkedList {
  constructor(value) {
    this.value = value // reference to existing node instance
  }

  append(value) { // add node to end of list
    let tmp = this.value
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode      
    }
    const newNode = new Node(value)
    tmp.nextNode = newNode
  }

  prepend(value) { // add node to start of list
    const newNode = new Node(value)
    newNode.nextNode = this.value
    this.value = newNode
  }

  size() { // return number of nodes
    let tmp = this.value
    let index = 0
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode
      index++
    }
    return index + 1
  }

  head() { // return first node
    return this.value
  }

  tail() { // return last node
    let tmp = this.value
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode      
    }
    return tmp
  }

  at(index) { // get node at index
    let tmp = this.value
    if (index === 0) return tmp
    for (let i = 1; i <= index; i++) {
      tmp = tmp.nextNode
      if (tmp === null && index >= i) return undefined // specified index out of range
    }
    return tmp
  }

  pop() { // remove final node
    let tmp = this.value
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode      
    }
    tmp.nextNode = null
  }

  contains(value) { // return true if value is in list, or false otherwise
    let tmp = this.value
    while (tmp.nextNode !== null) { // check for value in all nodes except tail
      if (tmp.value === value) return true
      tmp = tmp.nextNode
    }
    if (tmp.value === value) return true // check for value in tail node
    
    return false
  }

  find(value) { // return index of node containing value, or null otherwise
    let tmp = this.value
    let index = 0
    while (tmp.nextNode !== null) { // check for value in all nodes except tail
      if (tmp.value === value) return index
      tmp = tmp.nextNode
      index++
    }
    if (tmp.value === value) return index // check for value in tail node
    
    return null
  }

  toString() { // return linked list as a string
    let str = ''
    let tmp = this.value
    while (tmp.nextNode !== null) { // add each node value except tail
      str += `( ${tmp.value} ) -> `
      tmp = tmp.nextNode
    }
    str += `( ${tmp.value} ) -> ` // add tail value
    str += `null`
    return str
    
    // return JSON.stringify(this.value)
  }

  insertAt(value, index) { // insert a new node with the provided value at the given index
    let currentTmp = this.value
    let previousTmp
    if (index === 0) {
      value.nextNode = this.value
      this.value = value
      return true
    }
    for (let i = 0; i < index; i++) {
      if (currentTmp === null && index >= i) return undefined // specified index out of range
      previousTmp = currentTmp
      currentTmp = currentTmp.nextNode
    }
    value.nextNode = currentTmp
    previousTmp.nextNode = value
    return true
  }

  removeAt(index) { // remove the node at the given index
    let currentTmp = this.value
    let previousTmp
    if (index === 0) {
      this.value = this.value.nextNode
      return true
    }
    for (let i = 0; i < index; i++) {
      if (currentTmp === null && index >= i) return undefined // specified index out of range
      previousTmp = currentTmp
      currentTmp = currentTmp.nextNode
    }
    previousTmp.nextNode = currentTmp.nextNode
    return true
  }
}


class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}



// const linkedList = new LinkedList()
const linkedList = new LinkedList(new Node('test1'))

linkedList.append('test2')
linkedList.append('test3')
linkedList.append('test4')
linkedList.prepend('test5')
linkedList.prepend('test6')

console.log('\nLINKED LIST');
console.log(linkedList);
console.log('\nTO STRING');
console.log(linkedList.toString());
console.log('\nSIZE');
console.log(linkedList.size());
console.log('\nHEAD');
console.log(linkedList.head());
console.log('\nTAIL');
console.log(linkedList.tail());
console.log('\nFIND');
console.log(linkedList.find('test1'));
console.log('\nCONTAINS');
console.log(linkedList.contains('test6'));
console.log('\nAT');
console.log(linkedList.at(5));
console.log('\nINSERT AT');
console.log(linkedList.insertAt(new Node('hello'), 1));
console.log('\nTO STRING');
console.log(linkedList.toString());
console.log('\nREMOVE AT');
console.log(linkedList.removeAt(3));
console.log('\nTO STRING');
console.log(linkedList.toString());


linkedList.pop()
linkedList.pop()
linkedList.pop()
// console.log(linkedList.toString());


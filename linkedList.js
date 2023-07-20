import Node from "./node.js"

export default class LinkedList {
  constructor() {
    this.headNode = null // head node will need to be appended to instance of LinkedList
  }

  append(value) { // add node to end of list
    let tmp = this.headNode
    if (tmp === null) {
      this.headNode = new Node(value)
      return
    }
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode      
    }
    tmp.nextNode = new Node(value)
  }

  prepend(value) { // add node to start of list
    let tmp = this.headNode
    if (tmp === null) {
      this.headNode = new Node(value)
      return
    } 
    const newNode = new Node(value)
    newNode.nextNode = this.headNode
    this.headNode = newNode
  }

  size() { // return number of nodes
    let tmp = this.headNode
    let index = 0
    if (tmp === null) return null
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode
      index++
    }
    return index + 1
  }

  head() { // return first node
    return this.headNode
  }

  tail() { // return last node
    let tmp = this.headNode
    if (tmp === null) return null
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode      
    }
    return tmp
  }

  at(index) { // get node at index
    let tmp = this.headNode
    if (index === 0) return tmp
    for (let i = 1; i <= index; i++) {
      tmp = tmp.nextNode
      if (tmp === null && index >= i) return undefined // specified index out of range
    }
    return tmp
  }

  pop() { // remove final node
    let tmp = this.headNode
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode      
    }
    tmp.nextNode = null
  }

  contains(value) { // return true if value is in list, or false otherwise
    let tmp = this.headNode
    if (tmp === null) return null
    while (tmp.nextNode !== null) { // check for value in all nodes except tail
      if (tmp.value === value) return true
      tmp = tmp.nextNode
    }
    if (tmp.value === value) return true // check for value in tail node
    
    return false
  }

  find(value) { // return index of node containing value, or null otherwise
    let tmp = this.headNode
    let index = 0
    if (tmp === null) return undefined
    while (tmp.nextNode !== null) { // check for value in all nodes except tail
      if (tmp.value === value) return index
      tmp = tmp.nextNode
      index++
    }
    if (tmp.value === value) return index // check for value in tail node
    
    return undefined
  }

  toString() { // return linked list as a string
    let str = ''
    let tmp = this.headNode
    if (tmp === null) return undefined
    while (tmp.nextNode !== null) { // add each node value except tail
      str += `( ${tmp.value} ) -> `
      tmp = tmp.nextNode
    }
    str += `( ${tmp.value} ) -> ` // add tail value
    str += `null`
    return str
    
    // return JSON.stringify(this.headNode)
  }

  insertAt(value, index) { // insert a new node with the provided value at the given index
    let currentTmp = this.headNode
    let previousTmp
    if (index === 0) {
      value.nextNode = this.headNode
      this.headNode = value
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
    let currentTmp = this.headNode
    let previousTmp
    if (index === 0) {
      this.headNode = this.headNode.nextNode
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
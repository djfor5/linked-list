import LinkedList from "./linkedList.js";
import Node from "./node.js";

const linkedList = new LinkedList();

linkedList.append("test1");
linkedList.append("test2");
linkedList.append("test3");
linkedList.append("test4");
linkedList.prepend("test5");
linkedList.prepend("test6");

console.log("\nLINKED LIST");
console.log(linkedList);
console.log("\nTO STRING");
console.log(linkedList.toString());
console.log("\nSIZE");
console.log(linkedList.size());
console.log("\nHEAD");
console.log(linkedList.head());
console.log("\nTAIL");
console.log(linkedList.tail());
console.log("\nFIND");
console.log(linkedList.find("test1"));
console.log("\nCONTAINS");
console.log(linkedList.contains("test6"));
console.log("\nAT");
console.log(linkedList.at(5));
console.log("\nINSERT AT");
console.log(linkedList.insertAt(new Node("hello"), 3));
console.log("\nTO STRING");
console.log(linkedList.toString());
console.log("\nREMOVE AT");
console.log(linkedList.removeAt(2));
console.log("\nTO STRING");
console.log(linkedList.toString());

linkedList.pop();
linkedList.pop();
linkedList.pop();
console.log(linkedList.toString());

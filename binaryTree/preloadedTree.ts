import Node from './Node';

let a: Node<string> = new Node('a');
let b: Node<string> = new Node('b');
let c: Node<string> = new Node('c');

let d: Node<string> = new Node('d');

let e: Node<string> = new Node('e');

let f: Node<string> = new Node('f');

let g: Node<string> = new Node('g');
let h: Node<string> = new Node('h');

a.setRightChild(c);
a.setLeftChild(b);

c.setLeftChild(d);
c.setRightChild(e);

d.setLeftChild(f);
d.setRightChild(h);


e.setRightChild(g);

export default a;

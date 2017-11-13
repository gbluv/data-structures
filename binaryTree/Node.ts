export default class Node<T> {
	data: T;

	constructor( data: T ) {
		this.data = data;
	}

	private leftChild: Node<T>;
	private rightChild: Node<T>;

	setLeftChild(leftChild: Node<T>): void{
		this.leftChild = leftChild;
	}

	setRightChild(rightChild: Node<T>): void{
		this.rightChild = rightChild;
	}

	getLeftChild<T>(): Node<T>{
		return this.leftChild;
	}

	getRightChild<T>(): Node<T>{
		return this.rightChild;
	}

	getData(): T{
		return this.data;
	}
}
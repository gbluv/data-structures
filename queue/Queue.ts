
export default class Queue<T>{
	topElement: T;
	
	elements: T[] = [];

	enqueue(data: T){
		this.elements.push(data);
		this.topElement = data;
	}

	dequeue(): T{
	 	return this.elements.pop();
	 	this.topElement = this.elements.length ? this.elements[this.elements.length] : null;
	}

	peek(): T{
		return this.topElement;
	}


}
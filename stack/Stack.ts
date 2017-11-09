import Element from './Element';

export default class Stack<T> {
	largestElement: Element<T>;
	sizeOfElements: number = 0;
	topOfTheSet: Element<T> = null;

	push( data: T ) {
		const currentTop = this.topOfTheSet;
		const newElement = new Element(data , currentTop);

		this.topOfTheSet = newElement;
		this.sizeOfElements += 1;
		if( !this.largestElement || this.largestElement.getData() < data ) {
			this.largestElement = newElement;
		}
	}

	pop(): T {
		const nextElement = this.topOfTheSet.getNext();
		this.topOfTheSet = nextElement;
		this.sizeOfElements -= 1;
	}

	peek(): T{
		return this.topOfTheSet;
	}
	size(): number{
		return this.sizeOfElements;
	}
	largest(){
		return this.largestElement
	}
	

}
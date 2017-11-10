import Element from './Element';

const convertStackToArray = ( stack: Stack<Element> ) => {
	const results = [];
	const showEl = ( el: Element<T> ) => {
		if( !el ) {
			return;
		}
		results.push(el.getData());
		showEl(el.getNext())
	};

	showEl(stack.peek());
	return results;
};

export default class Stack<T> {
	largestElement: Element<T>;
	sizeOfElements: number = 0;
	topOfTheSet: Element<T> = null;

	isEmpty(){
		return this.sizeOfElements == 0;
	}

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
		const popedElement = this.topOfTheSet;
		
		this.topOfTheSet = nextElement;
		this.sizeOfElements -= 1;
		return  popedElement;
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

	toArray(){
		convertStackToArray(this.topOfTheSet)
	}
	

}
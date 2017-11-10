
const maxSize = 15;
const specialEmptyValue = -1;


export default class Queue<T>{
	topElement: T;
	tailIndex = specialEmptyValue;
	headIndex = specialEmptyValue;

	elements: T[] = [];

	constructor(){
		this.elements.length = maxSize;
	}

	/* hear we will only move head forward, the tail will stay the same. */
	/* ONLY TAIL MOVES AND THE HEAD STAYS PUT */
	enqueue(data: T){
		this.tailIndex = (this.tailIndex + 1) % this.elements.length;
		this.elements[this.tailIndex] = data;

		if(this.headIndex == specialEmptyValue){
			this.headIndex = this.tailIndex;
		}
	}

	dequeue(): T{
		const data: T =   this.elements[this.headIndex];
	 	if(this.headIndex == this.tailIndex){
	 		this.headIndex = specialEmptyValue;
		}else{
	 		this.headIndex = (this.headIndex + 1 ) % this.elements.length;
		}

		return  data;

	}

	peek(): T{
		return this.topElement;
	}

	isEmpty(): boolean{
		return this.headIndex == specialEmptyValue;
	}

	/* this means that closer next index to the head index the more full the queue is. */
	isFull(): boolean {
		let nextIndex = (this.tailIndex + 1) % this.elements.length;
		return nextIndex == this.headIndex;
	}

}
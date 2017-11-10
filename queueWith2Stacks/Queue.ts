import Stack from '../stack/Stack';
import Element from '../stack/Element';

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



export default class  Queue<T>{
	forwardStack: Stack<T> = new Stack<T>();
	reverseStack: Stack<T> = new Stack<T>();

	enqueue(data: T){

		if(!this.reverseStack.isEmpty()){
			while(!this.reverseStack.isEmpty()){
				this.forwardStack.push(this.reverseStack.pop());
			}
		}

		this.forwardStack.push(data);
	}

	dequeue(): T{
		while(!this.forwardStack.isEmpty()){
			this.reverseStack.push(this.forwardStack.pop());
		}
		const {data: data} = this.reverseStack.pop();
	   	return data;
	}

	stringElements(){
		return convertStackToArray(this.forwardStack);
	}
}
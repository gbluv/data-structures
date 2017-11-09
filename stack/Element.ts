export default class Element<T>{
	private data: T;
	private next: Element<T>;

	constructor(data: T, nextElement: Element<T>){
	   this.data = data;
	   this.next = nextElement;
	}

	getData(): T{
		return this.data;
	}

	setData(data: T){
		this.data = data;
	}

	getNext(){
		return this.next;
	}

}
import Stack from '../Stack';

var expect = require('expect.js');

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

var assert = require('assert');
describe('[Stack]' , function() {
	describe('[Stack] size' , function() {
		it('should be able to provide total size ' , function() {
			const myStack = new Stack();
			myStack.push(1);
			myStack.push(2);
			myStack.push(3);

			expect(myStack.size()).to.be(3);

		});
		it('should be able to decrease total size after pop ' , function() {
			const myStack = new Stack();
			myStack.push(1);
			myStack.push(2);
			myStack.push(3);
			myStack.pop();
			expect(myStack.size()).to.be(2);

		}); 
	});

	describe('[Stack] largestElement value',() => {
		const myStack = new Stack();
		myStack.push(1);
		myStack.push(4);
		myStack.push(2);

		expect(myStack.largest().getData()).to.be(4)
	});

	describe('[push functionality]' , function() {
		it('should be able to push in elements' , function() {
			const myStack = new Stack();

			myStack.push(1);
			myStack.push(2);
			myStack.push(3);
			expect(convertStackToArray(myStack)).to.eql([ 3 , 2 , 1 ])
		});
	});
	describe('[pop functionlity]' , () => {
		it('should be able to pop elements' , () => {
			const myStack = new Stack();

			myStack.push(1);
			myStack.push(2);
			myStack.pop();
			myStack.push(3);
			expect(convertStackToArray(myStack)).to.eql([ 3 , 1 ])
		});
	});


});
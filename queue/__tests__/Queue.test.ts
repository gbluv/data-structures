import Queue from '../Queue';

var expect = require('expect.js');

describe("[Queue]",() => {
	describe("[Queue] Enque",() =>{
		it("should be able to add elements to the queue",() => {
			const queue = new Queue();
			queue.enqueue(1);
			queue.enqueue(2);
			queue.enqueue(3);

			expect(queue.elements).to.eql([1,2,3]);
		})
	});
	describe("[Queue] Deque",() => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		queue.dequeue();
		queue.dequeue();
		expect(queue.elements).to.eql([1]);
	});

	describe("[Queue] Peek",() => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.peek()).to.eql(3);
	});
});
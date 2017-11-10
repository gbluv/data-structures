import Queue from '../Queue';

var expect = require('expect.js');

describe("[Queue with 2 satcks]" , () => {
	it("should be able to enque elements " , () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		expect(queue.stringElements()).to.eql([3,2,1])
	});

	it("should be able to deque elements ", () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		let data = queue.dequeue();
		expect(data.data).to.be(1);
	});
});
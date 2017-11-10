import Queue from '../Queue';

var expect = require('expect.js');

describe("[Queue]" , () => {
	describe("[Queue] Enque" , () => {
		it("should be able to add elements to the queue" , () => {
			const queue = new Queue();
			queue.enqueue(1);
			queue.enqueue(2);
			queue.enqueue(3);

			expect(queue.elements).to.eql([ 1 , 2 , 3 ]);
		})
	});
	
	describe("[Queue] Deque" , () => {

		it("should return proper data when dequeing " , () => {
			const queue = new Queue();
			queue.enqueue(1);
			queue.enqueue(2);
			queue.enqueue(3);

			const data1 = queue.dequeue();
			expect(data1).to.be.eql(1);
			const data2 = queue.dequeue();
			expect(data2).to.be.eql(2);

			expect(queue.elements.length).to.be(15);
		});
	});

});
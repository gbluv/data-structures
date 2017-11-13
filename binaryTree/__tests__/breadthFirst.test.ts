import  root from '../preloadedTree';
import breadthFirstTraversal from '../breadthFirst';
import {print} from '../../utils/utils';

const expect = require('expect.js');


describe('[Breadth First]' , () => {
	it('have proper position ' , () => {
		let result = breadthFirstTraversal(root , print);
		expect(result).to.eql([ 'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'h' , 'g' ])
	});
});                                   	




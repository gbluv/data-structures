let expect = require('expect.js');
import {preOrder , inOrder, postOrder} from "../depthFirst";
import root from '../preloadedTree';

describe('[DEPTH-FIRST]' , () => {
	xdescribe('pre-order' , () => {
		it('should be able to traverse data in a coorect order ' , () => {
			preOrder(root);
		});
	});
	xdescribe('in-order' , () => {
		it( 'should be able to traverse data in-order', () => {
				inOrder(root);
			}) ;
	});
	describe('post-order', () => {
		it('shoulbe be able to traverse the tree in a post-order traversal order', () => {
			postOrder(root);
		});
	});

});
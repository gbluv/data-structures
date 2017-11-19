let expect = require('expect.js');
import {preOrder , inOrder, postOrder} from "../depthFirst";
import root from '../preloadedTree';

describe('[DEPTH-FIRST]' , () => {
	describe('pre-order' , () => {
		it('should be able to traverse data in a coorect order ' , () => {
			preOrder(root);
		});
	});
	describe('in-order' , () => {
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
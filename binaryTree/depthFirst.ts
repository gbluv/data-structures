import Node from './Node';

/**
 * Left Subtree -> Node -> Right Subtree
 * @param {Node<string>} root
 */
export const preOrder = (root: Node<string>) => {
	if(!root){
		return;
	}
	console.log(root.getData());
	preOrder(root.getLeftChild());
	preOrder(root.getRightChild());
};

/**
 * Left Subtree -> Node -> Right Subtree
 * @param {Node<string>} root
 */
export const inOrder = (root: Node<string>) => {
	if(!root){
		return;
	}
	inOrder(root.getLeftChild());
	/* here it will go all the way down to the left side and then traverse up
	  and then the same for the right side.
	 */
	console.log(root.getData());
	inOrder(root.getRightChild());
};

/**
 * Left Subtree -> Right Subtree -> Node processed Lest
 * @param {Node<string>} root
 */
export const postOrder = (root: Node<string>) => {
	if(!root){
		return;
	}
	postOrder(root.getLeftChild());
	postOrder(root.getRightChild());

	console.log(root.getData());
};




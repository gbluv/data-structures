import Node from  './Node';
import Queue from '../queue/Queue';


const breadthFirstTraversal = (root: Node<string>,printer): string[] => {
	let result: string[] = [];
	
	let queue: Node<string> = new Queue();

	if(!root){
		return;
	}

	queue.enqueue(root);


	while(!queue.isEmpty()){
		let node: Node<string> = queue.dequeue();
		result.push(node.data);

		if(node.getLeftChild()){
			queue.enqueue(node.getLeftChild());
		}
		if(node.getRightChild()){
			queue.enqueue(node.getRightChild());
		}
	}
	return result;
};


export default breadthFirstTraversal;







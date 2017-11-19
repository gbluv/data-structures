# Datastructure: Tree

1. Unlike in stacks or queues, order is not important in trees
2. A tree is typically used to represent a hierarchical information
3. In A binary tree each node can have 0, 1 or 2 children
4. Every tree has exactly one root

**Tree Traversal** a way of visiting nodes of a tree

##Some Terminology

**Breadth-First** means visiting all nodes of a level before moving to the next level.

**Depth-First** means reach in to a tree as deep as possible, get to a leaf node a process it.

There are 3 types of Depth-First traversals

1. Pre-Order

	Node that we visit is processed first before processing any other nodes.
	
2. In-Order

	Left subtree is processed then the root and then the right subtree

3. Post-Order

	Node its self is processed only after the whole tree has been processed.
	
Essentially this processing is related to the top node:

1. before - Pre-order
2. In-Between - In-Order
3. After - Post-Order 	
	

**Level** is a distance from the root



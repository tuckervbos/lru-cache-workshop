import { Node } from "./Node.js";

export class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.map = new Map();
		this.head = null;
		this.tail = null;
	}

	get(key) {
		// TODO: Implement get logic
		// find/get the node
		if (!this.map.has(key)) return null;
		const node = this.map.get(key);
		// move
		this._moveToHead(node);
		// return the node
		return node.value;
	}

	put(key, value) {
		// TODO: Implement put logic
	}

	_moveToHead(node) {
		this._removeNode(node);
		this._addNodeToHead(node);
	}

	// removes node from its position in linked list
	_removeNode(node) {
		if (node.prev) {
			node.prev.next = node.next;
		}
	}

	// Helper methods you might implement:
	// - moveToHead(node)
	// - removeNode(node)
	// - addNodeToHead(node)
	// - removeTail()
}

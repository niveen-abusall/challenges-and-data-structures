class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    preOrder() {
        const result = [];
        
        const traverse = (node) => {
            if (node) {
                result.push(node.value);    // Root
                traverse(node.left);        // Left
                traverse(node.right);       // Right
            }
        };

        traverse(this.root);
        return result;
    }

    inOrder() {
        const result = [];
        
        const traverse = (node) => {
            if (node) {
                traverse(node.left);        // Left
                result.push(node.value);    // Root
                traverse(node.right);       // Right
            }
        };

        traverse(this.root);
        return result;
    }

    postOrder() {
        const result = [];
        
        const traverse = (node) => {
            if (node) {
                traverse(node.left);        // Left
                traverse(node.right);       // Right
                result.push(node.value);    // Root
            }
        };

        traverse(this.root);
        return result;
    }

    print() {
        if (!this.root) {
            console.log("Empty tree");
            return;
        }

        const printNode = (node, prefix = "", isLeft = true) => {
            if (node === null) return;

            console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);

            printNode(node.left, prefix + (isLeft ? "│   " : "    "), true);
            printNode(node.right, prefix + (isLeft ? "│   " : "    "), false);
        };

        console.log(this.root.value);
        printNode(this.root.left, "", true);
        printNode(this.root.right, "", false);
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const insertNode = (node, newNode) => {
            if (newNode.value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        insertNode(this.root, newNode);
    }

    contains(value) {
        let current = this.root;

        while (current) {
            if (value === current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    remove(value) {
        const removeNode = (node, value) => {
            if (!node) {
                return null;
            }

            if (value === node.value) {
                // Node with no children
                if (!node.left && !node.right) {
                    return null;
                }
                // Node with no left child
                if (!node.left) {
                    return node.right;
                }
                // Node with no right child
                if (!node.right) {
                    return node.left;
                }
                // Node with two children
                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else {
                node.right = removeNode(node.right, value);
                return node;
            }
        };

        this.root = removeNode(this.root, value);
    }
}

// Example usage:
// Create a binary tree
console.log("Binary Tree Example:");
const bTree = new BinaryTree();
bTree.root = new Node(1);
bTree.root.left = new Node(2);
bTree.root.right = new Node(3);
bTree.root.left.left = new Node(4);
bTree.root.left.right = new Node(5);

console.log("PreOrder traversal:", bTree.preOrder());
console.log("InOrder traversal:", bTree.inOrder());
console.log("PostOrder traversal:", bTree.postOrder());
console.log("\nTree structure:");
bTree.print();

// Create a binary search tree
console.log("\nBinary Search Tree Example:");
const bst = new BinarySearchTree();
bst.add(5);
bst.add(3);
bst.add(7);
bst.add(2);
bst.add(4);
bst.add(6);
bst.add(8);

console.log("Contains 4:", bst.contains(4));  // true
console.log("Contains 9:", bst.contains(9));  // false

bst.remove(3);
console.log("After removing 3, contains 3:", bst.contains(3));  // false

module.exports = {
    Node,
    BinaryTree,
    BinarySearchTree
};

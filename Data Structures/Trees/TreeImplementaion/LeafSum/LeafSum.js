const { Node, BinaryTree } = require('../TreeImplementation');

function LeafSum(node) {
    try {
        // Base case: if node is null, return 0
        if (node === null) {
            return 0;
        }

        // Check if current node is a leaf (no children)
        if (node.left === null && node.right === null) {
            return node.value;
        }

        // Recursive case: sum of leaf nodes in left and right subtrees
        return LeafSum(node.left) + LeafSum(node.right);
    } catch (error) {
        console.error("Error calculating leaf sum:", error.message);
        return 0;
    }
}

// Example usage and testing
console.log("=== LeafSum Challenge ===\n");

// Example 1: Binary Tree from the original file
console.log("Example 1: Basic Binary Tree");
const tree1 = new BinaryTree();
tree1.root = new Node(1);
tree1.root.left = new Node(2);
tree1.root.right = new Node(3);
tree1.root.left.left = new Node(4);
tree1.root.left.right = new Node(5);

console.log("Tree structure:");
tree1.print();
console.log("\nLeaf nodes: 4, 5, 3");
console.log("Sum of leaf nodes:", LeafSum(tree1.root));
console.log("Expected: 12 (4 + 5 + 3)\n");

// Example 2: Larger tree
console.log("Example 2: Larger Binary Tree");
const tree2 = new BinaryTree();
tree2.root = new Node(10);
tree2.root.left = new Node(5);
tree2.root.right = new Node(15);
tree2.root.left.left = new Node(3);
tree2.root.left.right = new Node(7);
tree2.root.right.right = new Node(18);

console.log("Tree structure:");
tree2.print();
console.log("\nLeaf nodes: 3, 7, 18");
console.log("Sum of leaf nodes:", LeafSum(tree2.root));
console.log("Expected: 28 (3 + 7 + 18)\n");

// Example 3: Single node tree
console.log("Example 3: Single Node Tree");
const tree3 = new BinaryTree();
tree3.root = new Node(42);

console.log("Tree structure:");
tree3.print();
console.log("\nLeaf nodes: 42");
console.log("Sum of leaf nodes:", LeafSum(tree3.root));
console.log("Expected: 42\n");

// Example 4: Empty tree
console.log("Example 4: Empty Tree");
const tree4 = new BinaryTree();
console.log("Sum of leaf nodes:", LeafSum(tree4.root));
console.log("Expected: 0\n");

// Example 5: Skewed tree (all nodes on left)
console.log("Example 5: Left-Skewed Tree");
const tree5 = new BinaryTree();
tree5.root = new Node(10);
tree5.root.left = new Node(8);
tree5.root.left.left = new Node(6);
tree5.root.left.left.left = new Node(4);

console.log("Tree structure:");
tree5.print();
console.log("\nLeaf nodes: 4");
console.log("Sum of leaf nodes:", LeafSum(tree5.root));
console.log("Expected: 4\n");

module.exports = LeafSum;
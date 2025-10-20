const { Node, BinaryTree, BinarySearchTree } = require('./TreeImplementation.js');

describe('Binary Tree', () => {
    let tree;

    beforeEach(() => {
        tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);
        /*
            Tree structure:
                 1
               /   \
              2     3
             / \
            4   5
        */
    });

    test('pre-order traversal should return correct sequence', () => {
        // Root -> Left -> Right
        const expected = [1, 2, 4, 5, 3];
        expect(tree.preOrder()).toEqual(expected);
    });

    test('in-order traversal should return correct sequence', () => {
        // Left -> Root -> Right
        const expected = [4, 2, 5, 1, 3];
        expect(tree.inOrder()).toEqual(expected);
    });

    test('post-order traversal should return correct sequence', () => {
        // Left -> Right -> Root
        const expected = [4, 5, 2, 3, 1];
        expect(tree.postOrder()).toEqual(expected);
    });
});

describe('Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    test('should add nodes correctly', () => {
        bst.add(5);
        bst.add(3);
        bst.add(7);
        bst.add(2);
        bst.add(4);

        expect(bst.root.value).toBe(5);
        expect(bst.root.left.value).toBe(3);
        expect(bst.root.right.value).toBe(7);
        expect(bst.root.left.left.value).toBe(2);
        expect(bst.root.left.right.value).toBe(4);
    });

    test('should correctly check if nodes exist', () => {
        bst.add(5);
        bst.add(3);
        bst.add(7);
        bst.add(2);
        bst.add(4);

        expect(bst.contains(5)).toBeTruthy();
        expect(bst.contains(2)).toBeTruthy();
        expect(bst.contains(7)).toBeTruthy();
        expect(bst.contains(9)).toBeFalsy();
        expect(bst.contains(1)).toBeFalsy();
    });

    test('should correctly remove leaf nodes', () => {
        bst.add(5);
        bst.add(3);
        bst.add(7);
        bst.add(2);
        bst.add(4);

        bst.remove(2);
        expect(bst.contains(2)).toBeFalsy();
        expect(bst.root.left.left).toBeNull();
    });

    test('should correctly remove nodes with one child', () => {
        bst.add(5);
        bst.add(3);
        bst.add(7);
        bst.add(2);

        bst.remove(3);
        expect(bst.contains(3)).toBeFalsy();
        expect(bst.root.left.value).toBe(2);
    });

    test('should correctly remove nodes with two children', () => {
        bst.add(5);
        bst.add(3);
        bst.add(7);
        bst.add(2);
        bst.add(4);

        bst.remove(3);
        expect(bst.contains(3)).toBeFalsy();
        expect(bst.root.left.value).toBe(4);
        expect(bst.root.left.left.value).toBe(2);
        expect(bst.root.left.right).toBeNull();
    });
});
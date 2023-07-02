class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// integer tree
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2)
const f = new Node(5);

// // char tree
// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");
// const e = new Node("E")
// const f = new Node("F");


a.left = b;
a.right = c;
b.left = d;
b.right = e
c.right = f

/**
 * 
 * @param {Node} root the root of the tree to be traversed
 */
// iterative traversal
const BFSPrint = (root) => {
    const stack = [root];

    while (stack.length) {
        const currNode = stack.pop();
        console.log(currNode.data);

        if (currNode.right) {
            stack.push(currNode.right);
        }

        if (currNode.left) {
            stack.push(currNode.left);
        }
    }
}

// BFSPrint(a);


/**
 * 
 * @param {Node} root 
 */
const BFSPrintRecursive = (root) => {
    if (root === null) return;
    console.log(root.data);
    BFSPrintRecursive(root.left);
    BFSPrintRecursive(root.right);
}


/**
 * 
 * @param {Node} root 
 */
// pre-order traversal
const preOrder = (root) => {
    if (root === null) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}


/**
 * 
 * @param {Node} root 
 */
// inOrder traversal
const bfs = (root) => {
    if (root === null) return;
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}


/**
 * 
 * @param {Node} root 
 */
// postOrder traversal
const postOrder = (root) => {
    if (root === null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}


const treeSum = (root) => {
    if (root === null) return 0;
    const stack = [root];
    let sum = 0;

    while (stack.length) {
        const currNode = stack.pop();
        sum += currNode.data;

        if (currNode.right) stack.push(currNode.right);
        if (currNode.left) stack.push(currNode.left);
    }

    return sum;
}


// console.log(treeSum(a));

const treeSumRecursive = (root) => {
    if (root === null) return 0;
    return root.data + treeSumRecursive(root.right) 
                      + treeSumRecursive(root.left);
};

// console.log(treeSumRecursive(a));

const treeIncludes = (root, target) => {
    if (root === null) return false;
    if (root.data === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

// console.log(treeIncludes(a, 7));
// console.log(treeIncludes(a, 10));
// console.log(treeSumRecursive(a));

const treeMinRecursive = (root) => {
    if (root === null) return Infinity;
    return Math.min(root.data, treeMinRecursive(root.left), treeMinRecursive(root.right));
};

console.log(treeMinRecursive(a));


// depth first search iterative approach.
const treeMin = (root) => {
    let smallest = Infinity;
    const stack = [ root ];

    while (stack.length) {
        const currNode = stack.pop();
        if (currNode.data < smallest) smallest = currNode.data;

        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
    }

    return smallest;
};

console.log(treeMin(a));

const treeMaxPathSum = (root) => {
    // check for non-leaf node with null child (left or right)
    if (root === null) return -Infinity;
    // check for a leaf node. Return the value of a leafnode
    if (root.left === null && root.right === null) return root.data;

    return root.data + Math.max(treeMaxPathSum(root.left), treeMaxPathSum(root.right));
};


console.log(treeMaxPathSum(a));
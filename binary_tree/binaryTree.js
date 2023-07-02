class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// integer tree
// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(4);
// const e = new Node(-2)
// const f = new Node(5);

// char tree
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E")
const f = new Node("F");


a.left = b;
a.right = c;
b.left = d;
b.right = e
c.right = f



// root is the root of a binary tree.
const bfs = (root, target) => {
    const queue = [root];
    while (queue.length) {
        const curr = queue.shift();
        if (curr.data === target) return true;

        if (curr.left) {
            if (curr.left.data === target) {
                return true
            } else {
                queue.push(curr.left);
            }
        }

        if (curr.right) {
            if (curr.right.data === target) {
                return true;
            } else {
                queue.push(curr.right);
            }
        }
    }
    return false;
};

const bfss = (root, target) => {
    const queue = [root];
    while (queue.length) {
        const curr = queue.shift();
        if (curr.data === target) return true;

        // if there is a left child and its data is
        // our target, return true, else push it to 
        // the queue for processing 
        if (curr.left && (curr.left.data === target)) {
            return true;
        } else {
            queue.push(curr.left);
        }

        // same as above
        if (curr.right && (curr.right.data === target)) {
            return true;
        } else {
            queue.push(curr.right);
        }
    }
    return false;
};

// console.log(bfs(a, "F"));
// console.log(bfs(a, "z"));

// console.log(bfss(a, "F"));
// console.log(bfss(a, "E"));
// console.log(bfss(a, "Z"));

// shorter function: if a child if not null
// push it to the queue for processing
const bfsss = (root, target) => {
    const queue = [root];
    while (queue.length) {
        const curr = queue.shift();
        if (curr.data === target) return true;
        
        if (curr.left !== null) {
            queue.push(curr.left);
        }
        
        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }
    return false;
};

// console.log(bfsss(a, "F"));
// console.log(bfsss(a, "E"));
// console.log(bfsss(a, "Z"));

// even shorter method: if there is a child push
// it to the queue for further processing
const bfssss = (root, target) => {
    const queue = [root];
    while (queue.length) {
        const curr = queue.shift();
        if (curr.data === target) return true;
        
        if (curr.left) queue.push(curr.left);  
        if (curr.right) queue.push(curr.right);
    }
    return false;
};

const treeSum = (root) => {
    let sum = 0;
    const queue = [root];
    while (queue.length) {
        const curr = queue.shift();

        if (curr.data) {
            sum += curr.data;
        }

        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }
    }

    return sum;
};

// console.log(treeSum(a));
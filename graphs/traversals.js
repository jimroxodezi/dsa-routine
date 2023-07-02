

const directedGraph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["E"],
    "D": ["F"],
    "E": [ ],
    "F": [ ]
};


const DFS = (graph, node) => {
    const stack = [ node ];

    while (stack.length) {
        const currNode = stack.pop();
        console.log(currNode);

        for (const neighbour of graph[currNode]) {
            stack.push(neighbour);
        }
    }
};

// const DFSRecursive = (node) => {
//     if (node !== null) console.log(node);
// }

const BFS = (graph, node) => {
    const queue = [ node ];

    while (queue.length) {
        const currNode = queue.shift();
        console.log(currNode);

        for (const neighbour of graph[currNode]) {
            queue.push(neighbour);
        }
    }
};


console.log("==========================DFS====================");
DFS(directedGraph, "A");
console.log("==========================BFS====================");
BFS(directedGraph, "A")



// adjacency list representation of a graph
class GraphNode {
    constructor(data) {
        this.data = data;
        this.edgeList = [];
    }

    connect(node) {
        // undirected graph; edges go both ways
        this.edgeList.push(node);
        node.edgeList.push(this);
    }

    adjacentNodes() {
        // return a list containing the data contained
        // in each node rather than the whole node structure.
        return this.edgeList.map(edge => edge.data);
    }

    isConnected(otherNode) {
        for (let i = 0; i < this.edgeList.length; i++) {
            if (this.edgeList[i].data === otherNode) return true;
        }
        return false;

        // // downside: new array from map consumes memory
        // return this.edgeList.map(edge => edge.data).includes(otherNode)
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }

    addToGraph(node) {
        this.nodes.push(node);
    }
}
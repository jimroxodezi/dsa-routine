


// vertices list and edges list representation of a graph
const vertices = ["A", "B", "C", "D", "E"];

const edges = [
    ["A", "B"],
    ["A", "D"],
    ["B", "C"],
    ["C", "D"],
    ["C", "E"],
    ["D", "E"]
];


const findAdjacentNodes = (node) => {
    const adjacentNodes = [];

    for (let edge of edges) {
        const nodeIndex = edge.indexOf(node);
        // if the node is in the edge, it's index will be greater than -1
        if (nodeIndex > -1) {
            // if the node is the first node in the edge, the adjacent
            // node will definitely be the second, else it wiil be the 
            // first node in the edge
            let adjacentNode = nodeIndex === 0 ? edge[1] : edge[0];
            adjacentNodes.push(adjacentNode);
        }
    }

    return adjacentNodes;
};

// two connected nodes must be in the same
// edge. isConnected checks the index of 
// the two nodes to determine if they are
// in an edge.
const isConnected = (node1, node2) => {
    // return edges.some((edge) => {
    //     return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
    // })

    // another implementation of the function
    for (const edge of edges) {
        if (edge.includes(node1) && edge.includes(node2)) return true;
    }

    return false;
};










// adjacency matrix representation of a graph.
const AdjacencyMatrixVertices = ["A", "B", "C", "D", "E"];
const AdjacencyMatrix = [
    [0,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,1,1],
    [1,0,1,0,1],
    [0,0,1,1,0]
];


const findAdjacentNodesOfAdjacencyMatrix = (node) => {
    const adjacentNodes = [];
    const nodeIndex = AdjacencyMatrixVertices.indexOf(node);
    // for each index of the array in the matrix
    for (let i = 0; i < AdjacencyMatrix[nodeIndex].length; i++) {
        if (AdjacencyMatrix[nodeIndex][i] === 1) {
            // let _node = AdjacencyMatrixVertices[i];
            // adjacentNodes.push(_node);
            adjacentNodes.push(AdjacencyMatrixVertices[i]);
        }
    }
    return adjacentNodes;
};

// // // buggy code. Why??
// const findAdjacentNodesAM = (node) => {
//     const adjacentNodes = [];
//     const nodeIndex = AdjacencyMatrixVertices.indexOf(node);
//     // for each index of the array in the matrix
//     for (const _node of AdjacencyMatrix[nodeIndex]) {
//         if (_node === 1) {
//             adjacentNodes.push(AdjacencyMatrixVertices[AdjacencyMatrix.indexOf(_node)]);
//         }
//     }
//     return adjacentNodes;
// };

const isConnectedAdjacencyMatrix = (node1, node2) => {
    const indexOfNode1 = AdjacencyMatrixVertices.indexOf(node1);
    const indexOfNode2 = AdjacencyMatrixVertices.indexOf(node2);

    return AdjacencyMatrix[indexOfNode1][indexOfNode2] === 1;
    // return !!AdjacencyMatrix[indexOfNode1][indexOfNode2];
};

// console.log(findAdjacentNodesOfAdjacencyMatrix("A"));
// console.log(isConnectedAdjacencyMatrix("A","B"));




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


const nodeA = new GraphNode("A")
const nodeB = new GraphNode("B")
const nodeC = new GraphNode("C")
const nodeD = new GraphNode("D")
const nodeE = new GraphNode("E")

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

// for (const node of graph.nodes) {
//     console.log(`GraphNode(${node.data})`);
//     for (const connectedNode of node.edgeList) {
//         console.log(`GraphNode(${node.data}) is connected to GraphNode(${connectedNode.data})`);
//     }
// }


console.log(nodeC.adjacentNodes());
console.log(nodeA.isConnected("B"));





const BFS = (node) => {
    const queue = [ node ];
    const visited = new Set();
    visited.add(node);

    while (queue.length) {
        const currNode = queue.shift();
        // visited.add(currNode);
        console.log(currNode.data);

        for (const neighbour of currNode.edgeList) {
            if (!visited.has(neighbour)) {
                queue.push(neighbour);
                visited.add(neighbour);
            }
        }
    }
};

// BFS(nodeA);
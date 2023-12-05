import Edge from "./Edge";
import Graph from "./Graph";
import Vertex from "./Vertex";

class GraphTester {
    static testGraph() {
        const graph = new Graph();

        // Add vertices and edges to the graph for testing
        // Example:
        const vertex1 = new Vertex("1");
        const vertex2 = new Vertex("2");
        const edge1 = new Edge(vertex1, vertex2, 5);

        graph.addVertex(vertex1);
        graph.addVertex(vertex2);
        graph.addEdge(edge1);

        const spanningTree = graph.buildSpanningTree();
        const minimumSpanningTree = graph.buildMinimumSpanningTree();

        console.log('------------------------------------')
        console.log('Task 1:')

        console.log("Original Graph:", graph.toString());
        console.log("Spanning Tree:", spanningTree.toString());
        console.log("Minimum Spanning Tree:", minimumSpanningTree.toString());
    }
}

export default GraphTester
import Edge from "./Edge";
import Vertex from "./Vertex";


// Клас графу
class Graph {
    private vertices: Vertex[] = [];
    private edges: Edge[] = [];

    // Add a vertex to the graph
    addVertex(vertex: Vertex): void {
        this.vertices.push(vertex);
    }

    // Remove a vertex from the graph along with its incident edges
    removeVertex(vertex: Vertex): void {
        this.vertices = this.vertices.filter(v => v !== vertex);
        this.edges = this.edges.filter(e => e.startVertex !== vertex && e.endVertex !== vertex);
    }

    // Add an edge to the graph
    addEdge(edge: Edge): void {
        this.edges.push(edge);
    }

    // Remove an edge from the graph
    removeEdge(edge: Edge): void {
        this.edges = this.edges.filter(e => e !== edge);
    }

    // Build a spanning tree using Depth-First Search (DFS)
    buildSpanningTree(): Graph {
        const visited: { [key: string]: boolean } = {};
        const spanningTree = new Graph();

        const dfs = (currentVertex: Vertex) => {
            visited[currentVertex.id] = true;
            spanningTree.addVertex(currentVertex);

            const neighbors = this.edges
                .filter(edge => edge.startVertex === currentVertex || edge.endVertex === currentVertex)
                .map(edge => (edge.startVertex === currentVertex ? edge.endVertex : edge.startVertex));

            for (const neighbor of neighbors) {
                if (!visited[neighbor.id]) {
                    spanningTree.addEdge(new Edge(currentVertex, neighbor, 0));
                    dfs(neighbor);
                }
            }
        };

        this.vertices.forEach(vertex => {
            if (!visited[vertex.id]) {
                dfs(vertex);
            }
        });

        return spanningTree;
    }

    // Build a Minimum Spanning Tree using Kruskal's algorithm
    buildMinimumSpanningTree(): Graph {
        const sortedEdges = [...this.edges].sort((a, b) => a.weight - b.weight);
        const parent: { [key: string]: string } = {};
        const minimumSpanningTree = new Graph();

        const find = (vertexId: string): string => {
            if (parent[vertexId] === undefined) return vertexId;
            return find(parent[vertexId]);
        };

        const union = (root1: string, root2: string): void => {
            parent[root1] = root2;
        };

        this.vertices.forEach(vertex => {
            minimumSpanningTree.addVertex(vertex);
        });

        for (const edge of sortedEdges) {
            const root1 = find(edge.startVertex.id);
            const root2 = find(edge.endVertex.id);

            if (root1 !== root2) {
                minimumSpanningTree.addEdge(edge);
                union(root1, root2);
            }
        }

        return minimumSpanningTree;
    }

    toString(): string {
        const vertexString = this.vertices.map(vertex => vertex.toString()).join(", ");
        const edgeString = this.edges.map(edge => edge.toString()).join(", ");
        return `Graph { vertices: [${vertexString.toString()}], edges: [${edgeString.toString()}] }`;
    }
}

export default Graph
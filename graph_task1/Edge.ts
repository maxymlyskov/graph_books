import Vertex from "./Vertex";

// Клас ребра графу
class Edge {
    constructor(public startVertex: Vertex, public endVertex: Vertex, public weight: number) { }
    toString(): string {
        return `Edge { startVertex: ${this.startVertex.toString()}, endVertex: ${this.endVertex.toString()}, weight: ${this.weight} }`;
    }
}

export default Edge
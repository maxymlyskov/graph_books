// Клас вершини графу
class Vertex {
    constructor(public id: string) { }
    toString(): string {
        return `Vertex { id: '${this.id}' }`;
    }
}

export default Vertex
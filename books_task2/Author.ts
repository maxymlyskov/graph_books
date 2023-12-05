class Author {
    constructor(public name: string) { }

    toString(): string {
        return `Author { name: '${this.name}' }`;
    }
}

export default Author
import Author from "./Author";
import Character from "./Character";

class Book {
    constructor(
        public title: string,
        public authors: Author[],
        public publicationDate: Date,
        public pages: number,
        public annotation: string,
        public characters: Character[] = []
    ) { }

    toString(): string {
        return `Book { title: '${this.title}', authors: [${this.authors.join(', ')}], publicationDate: ${this.publicationDate}, pages: ${this.pages}, annotation: '${this.annotation}', characters: [${this.characters.join(', ')}] }`;
    }
}

export default Book
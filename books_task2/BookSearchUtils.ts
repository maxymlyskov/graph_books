import Book from "./Book";

class BookSearchUtils {
    static searchBooks(books: Book[], criteria: string): Book[] {
        return books.filter(book => this.doesBookMatchCriteria(book, criteria));
    }

    private static doesBookMatchCriteria(book: Book, criteria: string): boolean {
        return (
            this.containsIgnoreCase(book.title, criteria) ||
            this.hasMatchingAuthor(book, criteria) ||
            this.hasMatchingCharacter(book, criteria)
        );
    }

    private static containsIgnoreCase(source: string, target: string): boolean {
        return source.toLowerCase().includes(target.toLowerCase());
    }

    private static hasMatchingAuthor(book: Book, criteria: string): boolean {
        return book.authors.some(author => this.containsIgnoreCase(author.name, criteria));
    }

    private static hasMatchingCharacter(book: Book, criteria: string): boolean {
        return book.characters.some(character => this.containsIgnoreCase(character.name, criteria));
    }
}

export default BookSearchUtils;

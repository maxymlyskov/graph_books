import Author from "./Author";
import Book from "./Book";
import BookDatabaseUtils from "./BookDatabaseUtils";
import BookSearchUtils from "./BookSearchUtils";

class BookDatabase {
    private books: Book[] = [];
    private authors: Author[] = [];

    // Додавання книги
    addBook(book: Book): void {
        this.books.push(book);

        BookDatabaseUtils.updateAuthorsList(this.authors, book.authors);
    }

    // Видалення книги
    removeBook(book: Book): void {
        this.books = this.books.filter(existingBook => existingBook !== book);
    }

    // Апдейт книги
    updateBook(bookToUpdate: Book, newInformation: Partial<Book>): void {
        const index = this.findIndexInBooks(bookToUpdate);

        if (index === -1) {
            console.error('Book not found in the database. Update failed.');
            return;
        }

        const updatedBook: Book = this.createUpdatedBook(bookToUpdate, newInformation);
        this.updateBookInList(index, updatedBook);
        this.updateAuthorsList(updatedBook.authors);

        console.log(`Book "${bookToUpdate.title}" updated successfully.`);
    }

    private findIndexInBooks(book: Book): number {
        return this.books.findIndex(existingBook => existingBook === book);
    }

    private createUpdatedBook(bookToUpdate: Book, newInformation: Partial<Book>): Book {
        return {
            ...bookToUpdate,
            ...newInformation,
        } as Book;
    }

    private updateBookInList(index: number, updatedBook: Book): void {
        this.books[index] = updatedBook;
    }

    private updateAuthorsList(authors: Author[]): void {
        authors.forEach(author => {
            if (!this.authors.some(existingAuthor => existingAuthor.name === author.name)) {
                this.authors.push(author);
            }
        });
    }


    static searchBooks(books: Book[], criteria: string): Book[] {
        return BookSearchUtils.searchBooks(books, criteria)
    }


    toString(): string {
        return `BookDatabase { books: [${this.books.join(', ')}], authors: [${this.authors.join(', ')}] }`;
    }
}


export default BookDatabase
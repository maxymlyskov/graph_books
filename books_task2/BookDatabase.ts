import Author from "./Author";
import Book from "./Book";

class BookDatabase {
    private books: Book[] = [];
    private authors: Author[] = [];

    // Додавання книги
    addBook(book: Book): void {
        this.books.push(book);

        // Додаємо авторів до списку авторів
        book.authors.forEach(author => {
            if (!this.authors.some(existingAuthor => existingAuthor.name === author.name)) {
                this.authors.push(author);
            }
        });
    }

    // Видалення книги
    removeBook(book: Book): void {
        this.books = this.books.filter(existingBook => existingBook !== book);
    }

    updateBook(bookToUpdate: Book, newInformation: Partial<Book>): void {
        const index = this.books.findIndex(book => book === bookToUpdate);

        if (index !== -1) {
            const updatedBook: Book = {
                ...bookToUpdate,
                ...newInformation,
            } as Book;

            this.books[index] = updatedBook;

            updatedBook.authors.forEach(author => {
                if (!this.authors.some(existingAuthor => existingAuthor.name === author.name)) {
                    this.authors.push(author);
                }
            });

            console.log(`Book "${bookToUpdate.title}" updated successfully.`);
        } else {
            console.error('Book not found in the database. Update failed.');
        }
    }

    // Пошук книг за критеріями
    searchBooks(criteria: string): Book[] {
        // Логіка для пошуку книг за критеріями

        // Example: Basic linear search
        return this.books.filter(book => {
            // Check if the book matches the criteria
            return (
                book.title.toLowerCase().includes(criteria.toLowerCase()) ||
                book.authors.some(author => author.name.toLowerCase().includes(criteria.toLowerCase())) ||
                book.characters.some(character => character.name.toLowerCase().includes(criteria.toLowerCase()))
            );
        });
    }

    toString(): string {
        return `BookDatabase { books: [${this.books.join(', ')}], authors: [${this.authors.join(', ')}] }`;
    }
}


export default BookDatabase
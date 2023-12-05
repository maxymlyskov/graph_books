import Author from "./Author";
import Book from "./Book";
import BookDatabase from "./BookDatabase";
import Character from "./Character";


class BookTester {
    static testBooksDatabase(): void {
        const bookDatabase = new BookDatabase();

        const author1 = new Author('Author 1');
        const author2 = new Author('Author 2');

        const character1 = new Character('Character 1', 'Main');
        const character2 = new Character('Character 2', 'Supporting');

        const book1 = new Book('Book 1', [author1], new Date(), 200, 'Annotation 1', [character1]);
        const book2 = new Book('Book 2', [author1, author2], new Date(), 250, 'Annotation 2', [character2]);

        bookDatabase.addBook(book1);
        bookDatabase.addBook(book2);

        console.log('------------------------------------')
        console.log('Task 2:')

        console.log('Books:', bookDatabase.toString());


        // Test searching for books
        const searchCriteria1 = 'Updated';
        const searchCriteria2 = 'Author 2';
        const searchCriteria3 = 'Character 1';

        const searchResults1 = bookDatabase.searchBooks(searchCriteria1);
        const searchResults2 = bookDatabase.searchBooks(searchCriteria2);
        const searchResults3 = bookDatabase.searchBooks(searchCriteria3);

        console.log(`Search Results for "${searchCriteria1}":`, searchResults1.toString());
        console.log(`Search Results for "${searchCriteria2}":`, searchResults2.toString());
        console.log(`Search Results for "${searchCriteria3}":`, searchResults3.toString());
    }
}

// Запуск тестів
export default BookTester
import Author from './Author'

class BookDatabaseUtils {
    static updateAuthorsList(authors: Author[], newAuthors: Author[]): void {
        newAuthors.forEach(author => {
            if (!authors.some(existingAuthor => existingAuthor.name === author.name)) {
                authors.push(author);
            }
        });
    }
}

export default BookDatabaseUtils
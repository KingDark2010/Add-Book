//global var
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
// book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

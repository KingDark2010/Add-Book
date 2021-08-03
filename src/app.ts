//global var

const title = document.getElementById('title') as HTMLInputElement;
const author = document.getElementById('author') as HTMLInputElement;
const isbn = document.getElementById('isbn') as HTMLInputElement;

// book class
class Book {
    constructor(public title: string, public author: string, public isbn: string) {}
}


//global var

const title = document.getElementById('title') as HTMLInputElement;
const author = document.getElementById('author') as HTMLInputElement;
const isbn = document.getElementById('isbn') as HTMLInputElement;

// book class
class Book {
    constructor(public title: string, public author: string, public isbn: string) {}
}

class UI {
    addBook(book) {
        // add book to the list
        const bookList = document.querySelector('.book-list');
        // create a new table raw element
        const tableRw = document.createElement('tr');
        // add raw content to the table
        tableRw.innerHTML = `<td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.isbn}</td>
                            <td>
                                <a class="waves-effect waves-light delete"><i class="small material-icons ">delete_forever</i></a>
                            </td>`;
        // append the table to the book list
        bookList.appendChild(tableRw);
    }
/*     removeBook(target) {
    } */
    showAlert(message, className) {
        //create a new alert element
        const alert = document.createElement('div');
        //add the alert class
        alert.className = `alert ${className}`;
        //add the message
        alert.innerHTML = message;
        //append the alert to the body
        const container = document.querySelector('.container');
        const form = document.querySelector('.form');
        container.insertBefore(alert, form);
        //remove the alert after 3 seconds
        setTimeout(() => { container.removeChild(alert); }, 3000);
    }
    clearForm() {
        //clear the form
        title.value = '';
        author.value = '';
        isbn.value = '';
    }
}
//event listener
document.querySelector('.form').addEventListener('submit', (event) => {
    
    //get the form values
    const titleValue = title.value;
    const authorValue = author.value;
    const isbnValue = isbn.value;
    console.log(titleValue, authorValue, isbnValue);
    //check if the form is valid
    if (titleValue === '' || authorValue === '' || isbnValue === '') {
        //show alert
        const ui = new UI();
        ui.showAlert('Please fill in all the fields', 'danger');
    } else {
        // check if the isbn already exists
        const book = new Book(titleValue, authorValue, isbnValue);
        const bookList = document.querySelector('.book-list');
        const bookListItems = bookList.querySelectorAll('tr');
        let existInLinst: boolean = false;
        for (let i = 0; i < bookListItems.length; i++) {
            const bookListItem = bookListItems[i];
            const bookListItemIsbn = bookListItem.querySelector('td:nth-child(3)').innerHTML;
            if (bookListItemIsbn === book.isbn) {
                existInLinst = true;
                const ui = new UI();
                ui.showAlert('the isbn already exist', 'warning');
            }
        }
        if (existInLinst === false){
            //create a new book
            const book = new Book(titleValue, authorValue, isbnValue);
            //add the book to the list
            const ui = new UI();
            ui.showAlert('the isbn already exist', 'success');
            ui.addBook(book);
            //clear the form
            ui.clearForm();
        }
    }
    event.preventDefault();
});
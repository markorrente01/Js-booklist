import { Book } from "./components/Book";
import { HandleUi } from "./components/HandleUi";
import { Ui } from "./components/Ui";

const handleUi = new HandleUi(); 
    handleUi.checkTableEmpty()
    handleUi.updateUi()
const ui = new Ui();
    ui.addBook.addEventListener('click', function(){
        const bookTitle = ui.bookTitle.value.trim(),
            author = ui.author.value.trim(),
            isbn = ui.isbn.value.trim();
        const book = new Book(bookTitle, author, isbn);

        if (book.title === '' || book.author === '' || book.isbn === '') {
            handleUi.showAlert('please fill the required inputs!!', '#eef2ff', ' #ef4444', 'block');
        } else {
            ui.tableContent.innerHTML = '';
            handleUi.addBook(book);
            handleUi.updateUi();
            handleUi.checkTableEmpty();
            handleUi.clearFields();
            handleUi.showAlert('Book added successfully', '#a16207', '  #fffacd', 'block');
        }
        })
// delete using event delegation

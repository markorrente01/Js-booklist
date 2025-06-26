import { Book } from "./components/Book";
import { HandleUi } from "./components/HandleUi";
import { Ui } from "./components/Ui";

const handleUi = new HandleUi(); 
    handleUi.checkTableEmpty();
const ui = new Ui();
    ui.addBook.addEventListener('click', function(){
        const bookTitle = ui.bookTitle.value.trim(),
            author = ui.author.value.trim(),
            isbn = ui.isbn.value.trim();
        const book = new Book(bookTitle, author, isbn);

        if (bookTitle === '' || author === '' || isbn === '') {
            handleUi.showAlert('please fill the required inputs!!', '#eef2ff', ' #ef4444', 'block');
        } else {
            handleUi.addBook(book);
            handleUi.checkTableEmpty();
            handleUi.clearFields();
            handleUi.showAlert('Book added successfully', '#a16207', '  #fffacd', 'block');
        }
        })
// delete using event delegation
ui.tableContent.addEventListener('click', (e)=>{
    if(e.target.id = 'delete_svg'){
        e.target.parentElement.parentElement.parentElement.remove();
        handleUi.showAlert('Book deleted!', '#eef2ff', ' #ef4444', 'block')
    }
})
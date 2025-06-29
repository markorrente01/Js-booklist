import {Ui} from "./Ui";
import { Store } from "./Store";
const store = new Store();
let allBooks = store.getFromStore();
export function HandleUi(){};
    const uiHandler = new HandleUi();
const ui = new Ui();
HandleUi.prototype.addBook = function (book) {
    const bookObject = {
        title: book.title,
        author: book.author,
        isbn: book.isbn
    }
    allBooks.push(bookObject);
    store.addToStore(allBooks);
    return;
}
// create the tr elements
HandleUi.prototype.createTr = function(book){
    const tr = document.createElement('tr');
        tr.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td>
                <button id="delete_btn" title="Delete" data-isbn="${book.isbn}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ef4444">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z"/>
                  </svg>
              </button>
            </td>
        `;
        tr.querySelector('#delete_btn').addEventListener('click', (e)=>{
            const isbnToDelete = e.currentTarget.dataset.isbn; 
            const uiHandler = new HandleUi();
            allBooks = allBooks.filter(book => book.isbn !== isbnToDelete);
            store.addToStore(allBooks);
            ui.tableContent.innerHTML = '';
            uiHandler.updateUi();
            e.currentTarget.closest('tr').remove();
            uiHandler.checkTableEmpty();
        })
    return tr;
}
// update ui from local storage
HandleUi.prototype.updateUi = function (){
    const tableBody = ui.tableContent;
    for(let x in allBooks){
        tableBody.appendChild(uiHandler.createTr(allBooks[x]))
    }
    uiHandler.checkTableEmpty();
}
HandleUi.prototype.showAlert = function (msg, fontColor, bgColor, display) {
    const alertMessage = ui.alertMessage;
        alertMessage.textContent = msg;
        alertMessage.style.display = display;
        alertMessage.style.color = fontColor;
        alertMessage.style.backgroundColor = bgColor;
    setTimeout(()=>{
        alertMessage.style.display = 'none';
    }, 3000)
    return;
}
HandleUi.prototype.clearFields = function (){
    ui.bookTitle.value = '';
    ui.author.value = '';
    ui.isbn.value = '';
}
HandleUi.prototype.checkTableEmpty = function () {
    const emptyMessage = ui.emptyMessage;
    const tableBody = ui.tableContent;
    const rows = tableBody.getElementsByTagName('tr');
    if (rows.length === 0) {
        emptyMessage.classList.add('show')
    } else {
        emptyMessage.classList.remove('show')
    }
}
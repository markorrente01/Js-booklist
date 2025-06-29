export function Store(){};
Store.prototype.getFromStore = function (){
    const getAllBooks = localStorage.getItem('allBook') || '[]';
    return JSON.parse(getAllBooks);
}
Store.prototype.addToStore = function (x){
    localStorage.setItem('allBook', JSON.stringify(x))
}


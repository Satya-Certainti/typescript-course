const books = [ '1984', 'Brave New World', 'Farenheit 451' ];

let foundBook;

for (let book of books) {
    if (book === '1984') {
        foundBook = book;
        break;
    }
}

console.log(foundBook);

const books = [ '1984', 'Brave New World', 'Farenheit 451' ];

let foundBook:string | undefined;

for (let book of books) {
    if (book === '1984') {
        foundBook = book;
        console.log(foundBook.length);
        
        break;
    }  
}

foundBook?.length

console.log(foundBook?.length);

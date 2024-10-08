let books = [];
const APIEndPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getSearchForBooksFromAPI();

async function getSearchForBooksFromAPI() {
    const res = await fetch(APIEndPoint);
    books = await res.json();

    let booksWithDiscount = applyDiscount(books);
    showBooksOnScreen(booksWithDiscount);
}


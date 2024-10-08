let btnOrderByPrice = document.getElementById('btnOrderByPrice');
btnOrderByPrice.addEventListener('click', orderByPrice);

function orderByPrice() {
    let booksOrdered = books.sort((a, b) => a.preco - b.preco);

    showBooksOnScreen(booksOrdered);
}
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    console.log(btnElement)
    const category = btnElement.value;

    let booksFiltered = category == 'disponivel'? filterByAvaliabilty() : filterByCategory(category);
    showBooksOnScreen(booksFiltered);
    if(category == 'disponivel') {
        const total = calculateTotalOfAvaliables(booksFiltered);
        showTotalOfAvaliableBooks(total);
    }
}``

function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterByAvaliabilty() {
    return books.filter(book => book.quantidade > 0);
}

function showTotalOfAvaliableBooks(total) {
    totalOfAvaliableBooks.innerHTML = `    <div class="books__avaliable">
      <p>Todos os livros disponíveis por R$ <span id="value">${total}</span></p>
    </div>`
}
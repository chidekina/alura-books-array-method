const InsertElementBooks = document.getElementById('books');
const totalOfAvaliableBooks = document.getElementById('total_value_books_avaliable');

function showBooksOnScreen(BookList) {
    totalOfAvaliableBooks.innerHTML = '';
    InsertElementBooks.innerHTML = '';
    BookList.forEach(book => {
        let avaliability = book.quantidade > 0 ? 'book__images' : 'book__images unavailable'
        InsertElementBooks.innerHTML += `<div class="book">
      <img class="${avaliability}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="book__title">
       ${book.titulo}
      </h2>
      <p class="book__description">${book.autor}</p>
      <p class=book__price" id="price">R$${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>`
    });
}
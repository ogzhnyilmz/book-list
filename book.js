let books = JSON.parse(localStorage.getItem("books")) || [];

if (localStorage.getItem("books")) {
    products = JSON.parse(localStorage.getItem("books"));
};

function mainMenu() {
    const choice = prompt("1-Kitap Ekleme\n2-Kitap Listeleme\n3-Kitap Silme");
    if (choice == 1) {
        return addBook();
    } else if (choice == 2) {
        return listBook();
    } else if (choice == 3) {
        return deleteBook();
    }
}
mainMenu()

function addBook() {
    const bookName = prompt("Kitabın ismini giriniz.");
    const authorName = prompt("Yazarın ismini giriniz.");
    const type = prompt("Kitabın türünü giriniz.");
    books.push(
        {
            bookName,
            authorName,
            type
        }
    )
    localStorage.setItem("books", JSON.stringify(books));
    alert("Kitap başarıyla eklendi");
    return mainMenu();
}

function listBook() {
    const bookList = books.map((book, index) => `${index + 1} Kitap: ${book.bookName} Yazar: ${book.authorName} Tür: ${book.type}`).join("\n");

    alert(bookList);
    return mainMenu();
}

function deleteBook() {
    const bookList = books.map((book, index) => `${index + 1} Kitap: ${book.bookName}, Yazar: ${book.authorName}, Tür: ${book.type}`).join("\n");

    const bookDelete = prompt(`Silmek istediğiniz kitabı seçiniz.\n${bookList} `);

    const findBook = books.findIndex(book => book.index === bookDelete);

    books.splice(findBook, 1);

    alert("Kitap Başarıyla Silindi.")
    localStorage.setItem("books", JSON.stringify(books));

    return mainMenu();
}




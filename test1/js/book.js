class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = "available";
  }

  borrow() {
    if (this.status === "available") {
      this.status = "borrowed";
      return true;
    }
    return false;
  }

  // Метод для изменения статуса книги на "доступна"
  returnBook() {
    if (this.status === "borrowed") {
      this.status = "available";
      return true;
    }
    return false;
  }
}

// Класс Library для управления библиотекой
class Library {
  constructor() {
    this.books = [];
  }

  // Метод для добавления новой книги
  addBook(book) {
    this.books.push(book);
  }

  // Метод для взятия книги
  borrowBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (book.borrow()) {
        console.log(`Книга '${book.title}' взята.`);
      } else {
        console.log(`Книга '${book.title}' уже взята.`);
      }
    } else {
      console.log("Книга  не найдена.");
    }
  }

  // Метод для возврата книги
  returnBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (book.returnBook()) {
        console.log(`Книга '${book.title}' возвращена.`);
      } else {
        console.log(`Книга '${book.title}' не была взята.`);
      }
    } else {
      console.log("Книга  не найдена.");
    }
  }

  // Метод для вывода списка доступных книг
  listAvailableBooks() {
    const availableBooks = this.books.filter(
      (book) => book.status === "available"
    );
    if (availableBooks.length > 0) {
      console.log("Доступные книги:");
      availableBooks.forEach((book) => {
        console.log(`${book.title} (${book.author})`);
      });
    } else {
      console.log("Нет доступных книг.");
    }
  }
}

const book1 = new Book("Руслан и Людмила", "Пушкин А. С.", "1");
const book2 = new Book("Молох", "Куприн А. И.", "2");
const book3 = new Book("Обломов", "Гончаров И. А.", "3");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Показываем доступные книги
library.listAvailableBooks();

// Берем книгу
library.borrowBook("1");
library.borrowBook("1");
library.borrowBook("2");

// Показываем доступные книги после взятия одной
library.listAvailableBooks();

// Возвращаем книгу
library.returnBook("1");
library.returnBook("3");

// Показываем доступные книги после возврата
library.listAvailableBooks();

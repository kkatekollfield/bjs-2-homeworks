class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        console.log(`Name: ${this.name}, Release Date: ${this.releaseDate}, Pages Count: ${this.pagesCount}, State: ${this.state}, Type: ${this.type}`);
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

console.log("Creating a new PrintEditionItem instance:");
const printEditionItem = new PrintEditionItem("The Great Gatsby", 1925, 218);
console.log(`State before fixing: ${printEditionItem.state}`);
printEditionItem.fix();
console.log(`State after fixing: ${printEditionItem.state}`);


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
        console.log(`Type: ${this.type}`);
    }
}

console.log("Creating a new Magazine instance:");
const magazine = new Magazine("National Geographic", 2021, 100);
console.log(`State before fixing: ${magazine.state}`);
magazine.fix();
console.log(`State after fixing: ${magazine.state}`);


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
        console.log(`Author: ${this.author}, Type: ${this.type}`);
    }
}

console.log("Creating a new Book instance:");
const book = new Book("F. Scott Fitzgerald", "The Great Gatsby", 1925, 218);
console.log(`State before fixing: ${book.state}`);
book.fix();
console.log(`State after fixing: ${book.state}`);

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
        console.log(`Type: ${this.type}`);
    }
}

console.log("Creating a new NovelBook instance:");
const novelBook = new NovelBook("George Orwell", "1984", 1949, 328);
console.log(`Author: ${novelBook.author}, Name: ${novelBook.name}, Release Date: ${novelBook.releaseDate}, Pages Count: ${novelBook.pagesCount}, State: ${novelBook.state}, Type: ${novelBook.type}`);

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
        console.log(`Type: ${this.type}`);
    }
}

console.log("Creating a new FantasticBook instance:");
const fantasticBook = new FantasticBook("J.K. Rowling", "Harry Potter and the Sorcerer's Stone", 1997, 309);
console.log(`Author: ${fantasticBook.author}, Name: ${fantasticBook.name}, Release Date: ${fantasticBook.releaseDate}, Pages Count: ${fantasticBook.pagesCount}, State: ${fantasticBook.state}, Type: ${fantasticBook.type}`);

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
        console.log(`Type: ${this.type}`);
    }
}

console.log("Creating a new DetectiveBook instance:");
const detectiveBook = new DetectiveBook("Arthur Conan Doyle", "The Adventures of Sherlock Holmes", 1892, 307);
console.log(`Author: ${detectiveBook.author}, Name: ${detectiveBook.name}, Release Date: ${detectiveBook.releaseDate}, Pages Count: ${detectiveBook.pagesCount}, State: ${detectiveBook.state}, Type: ${detectiveBook.type}`);

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } else {
            console.log(`The book "${book.name}" is in poor condition and cannot be added to the library.`);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }
        return null;
    }

}

console.log("Creating a new Library instance:");
const library = new Library('Библиотека имени Ленина');
console.log("Adding books to the library:");
library.addBook(novelBook);
library.addBook(fantasticBook);
library.addBook(detectiveBook);

console.log("Finding a book by name:");
const foundBook = library.findBookBy('name', '1984');
if (foundBook) {
    console.log(`Found book: ${foundBook.name} by ${foundBook.author}`);
}

console.log("Giving a book by name:");
const givenBook = library.giveBookByName('1984');
if (givenBook) {
    console.log(`Given book: ${givenBook.name} by ${givenBook.author}`);
}

console.log("Trying to find the given book again:");
const notFoundBook = library.findBookBy('name', '1984');
if (!notFoundBook) {
    console.log(`Book with name "1984" not found.`);
}

console.log("Trying to give a book that is not in the library:");
const notGivenBook = library.giveBookByName('1984');
if (!notGivenBook) {
    console.log(`Book with name "1984" is not available in the library.`);
}

console.log("Trying to add a book in poor condition:");
const poorConditionBook = new Book("Author Name", "Poor Condition Book", 2020, 150);
poorConditionBook.state = 20;
library.addBook(poorConditionBook);

console.log("Trying to add a book in good condition:");
const goodConditionBook = new Book("Author Name", "Good Condition Book", 2020, 150);
goodConditionBook.state = 80;
library.addBook(goodConditionBook);

console.log("Finding the good condition book by name:");
const foundGoodBook = library.findBookBy('name', 'Good Condition Book');
if (foundGoodBook) {
    console.log(`Found book: ${foundGoodBook.name} by ${foundGoodBook.author}`);
}

console.log("Trying to give the good condition book by name:");
const givenGoodBook = library.giveBookByName('Good Condition Book');
if (givenGoodBook) {
    console.log(`Given book: ${givenGoodBook.name} by ${givenGoodBook.author}`);
}

console.log("Trying to find the given good condition book again:");
const notFoundGoodBook = library.findBookBy('name', 'Good Condition Book');
if (!notFoundGoodBook) {
    console.log(`Book with name "Good Condition Book" not found.`);
}

console.log("Trying to give a book that is not in the library:");
const notGivenGoodBook = library.giveBookByName('Good Condition Book');
if (!notGivenGoodBook) {
    console.log(`Book with name "Good Condition Book" is not available in the library.`);
}

console.log("All tests completed.");
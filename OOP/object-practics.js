/* 
Copy the Book, AudioBook, and Borrower class code from the lesson above into a file on your computer. Write code to do the following:

Add a function on Borrower called getLastBook() that returns the last book they borrowed
Create at least 2 instances of Borrower, 2 instances of regular Book, and 2 instances of AudioBook
Make one borrower check out 3 books
Log the Books the person borrowed
Log the last Book the person borrowed
For an extra challenge, add the following functions to the Borrower class and test them:

favoriteAuthor() returns the author that the Borrower has borrowed the most books from
returnBook(bookId) removes the book with the given ID from the Borrower's list of books
*/


class Book {
    constructor(id, title, authorFirstName, authorLastName) {
        this.id = id;
        this.title = title;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.renewalLimit = 5;
    }
    calculateDueDate(borrowedDate) {
        return borrowedDate.setDate(borrowedDate.getDate() + 21);  // 21 days is 3 weeks
    }
    summary() {
        return (
            this.title +
            ' (' +
            this.authorLastName +
            ', ' +
            this.authorFirstName +
            ')'
        );
    }
}

class AudioBook extends Book {
    constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
        super(id, title, authorFirstName, authorLastName);
        this.lengthInMinutes = 90;
        this.renewalLimit = 1;
    }
    calculateDueDate(borrowedDate) {
        return borrowedDate.setDate(borrowedDate.getDate() + 14);  // 14 days is 2 weeks
    }
}

class Borrower {
    constructor(id, firstName, middleInitial, lastName, phoneNumber) {
        this.id = id;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.libraryBooks = []; // list of books checked out from library
    }
    checkOut(book) {
        this.libraryBooks.push(book);
        const borrowedDate = new Date();
        const dueDate = book.calculateDueDate(borrowedDate);
        return dueDate;
    }
    getLastBook() {
        // return the last book they borrowed
        return this.libraryBooks[this.libraryBooks.length - 1];
    }
    // favoriteAuthor() returns the author that the Borrower has borrowed the most books from
    favoriteAuthor() {
        
    }
    // returnBook(bookId) removes the book with the given ID from the Borrower's list of books
    returnBook(bookId) {
        for (let i = 0; i < this.libraryBooks.length; i++) {
            if (this.libraryBooks[i][bookId] === bookId ) {
                this.libraryBooks[i].pop()
                console.log(`did this return the proper bookd id? ${this.libraryBooks}`);
            }
        }
    }
}

//Create at least 2 instances of Borrower, 2 instances of regular Book, and 2 instances of AudioBook

let leia = new Borrower(123, "Leia", "V", "Q");
let avery = new Borrower(234, "Avery", "?", "?");
let witchery = new Book(1543, "Witchery", "Juliet", "Diaz");
let aDifferentMirror = new Book(1233, "A Different Mirror", "Ronald", "Takaki");
let eloquentJavascript = new AudioBook(1333, "Eloquent JavaScript", "Marijn", "Haverbeke", 400);
let ydkjsy = new AudioBook(1423, "You Don't Know JavaScript, Yet", "Kyle", "Simpson", 400);

// Make one borrower check out 3 books
leia.checkOut(witchery);
leia.checkOut(aDifferentMirror);
leia.checkOut(eloquentJavascript);

// Log the Books the person borrowed
console.log(leia.libraryBooks);

// Log the last Book the person borrowed
console.log(leia.getLastBook());

// For an extra challenge, add the following functions to the Borrower class and test them:
// favoriteAuthor() returns the author that the Borrower has borrowed the most books from
// returnBook(bookId) removes the book with the given ID from the Borrower's list of books
leia.returnBook(1543);
console.log(leia.libraryBooks);
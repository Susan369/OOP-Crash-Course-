class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
  
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Subclass
class Magazie extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiante Magazine
const mag1 = new Magazie('Mag One', 'John Doe', '2018', 'jan');

console.log(mag1.getSummary());
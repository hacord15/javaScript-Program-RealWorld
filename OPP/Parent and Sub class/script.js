class Book {
    constructor(title, author, publicationYear) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
    }
  
    displayDetails() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Publication Year: ${this.publicationYear}`);
    }
  }
  
  class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
      super(title, author, publicationYear);
      this.price = price;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Price: $${this.price}`);
    }
  }
  
  // Create an instance of the Ebook class
  const ebook = new Ebook('Don Quixote', 'Miguel de Cervantes', 1605, 21.49);
  
  // Display the ebook details
  ebook.displayDetails();
  
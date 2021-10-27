const getTotalBooksCount = books => {
  let totalBooks = 0;

  // Add to totalBooks every time it goes through an element
  for(let book in books) {
    totalBooks++;
  }

  return totalBooks;
};

const getTotalAccountsCount = accounts => {
  let totalAccounts = 0;

  // Add to totalAccounts every time it goes through an element
  for(let account in accounts) {
    totalAccounts++;
  }

  return totalAccounts;
};

const getBooksBorrowedCount = books => {
  let totalBorrowed = 0;
  
  // Filter through books to get to borrows 
  // Filter through borrows to get to returned
  // If returned is false, add to totalBorrowed
  borrowed = books.filter((book) => book.borrows.filter((borrow) => {
    if (borrow.returned !== true) totalBorrowed++;
  }));

  return totalBorrowed;
};

// Helper function to getMostCommonGenres
const getBookGenreCount = books => {
  // Place holder to keep count of book genres
  let count = {};
  books.forEach((book) => {
    if (count[book.genre] != null) {
      count[book.genre]++;
    }
    else {
      count[book.genre] = 1;
    }
  })

  return count;
}

const getMostCommonGenres = books => {
  // Easy access to helper function
  let genreCount = getBookGenreCount(books);
  // Place holder to push names and count 
  let commonGenres = [];
  // Use entries to utilize helper function
  // Get keys and values from helper function
  // Push results into commonGenres
  for (const [name, count] of Object.entries(genreCount)) {
    commonGenres.push({
      "name": name,
      "count": count
    });
  }

  // Descending order
  commonGenres.sort((firstBook, secondBook) => secondBook.count - firstBook.count);

  // Limit to five genres
  return commonGenres.slice(0, 5);
};

const getMostPopularBooks = books => {
  // Place holder to keep popular books
  let popularBooks = [];
  const borrows = books.reduce((acc, book) => { 
    popularBooks.push({
      name: book.title, 
      count: book.borrows.length
    }); 
  },[]);
 
  // Descending order
  popularBooks.sort((firstBook, secondBook) => secondBook.count - firstBook.count);
  
  // Limit to five books
  return popularBooks.slice(0, 5);
};

const getMostPopularAuthors = (books, authors) => {
  // Place holder to keep popular authors
  let popularAuthors = [];
  authors.forEach((author) => {
    let authorCount = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) authorCount.count += book.borrows.length;
    });
    popularAuthors.push(authorCount);
  });
  
  // Descending order
  popularAuthors.sort((firstPublish, secondPublish) => secondPublish.count - firstPublish.count);

  // Limit to five authors
  return popularAuthors.slice(0,5);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

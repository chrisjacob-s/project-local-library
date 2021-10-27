const findAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
};

const findBookById = (books, id) => {
  return books.find((book) => book.id === id);
};

const partitionBooksByBorrowedStatus = books => {
  // borrowedBooks filter books that have not been returned
  let borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned !== true));
  // availableBooks filter books that have been returned
  let availableBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  // partitionBooks holds the borrowedBooks info and availableBooks info in an array
  let partitionBooks = [[...borrowedBooks], [...availableBooks]];

  return partitionBooks;
};

const getBorrowersForBook = (books, accounts)  => {
  let borrowers = books.borrows.map((borrower) => {
    let findAccount = accounts.find((account) => account.id === borrower.id);

    // Returns info for borrowers and accounts
    return {...borrower, ...findAccount};
  });

  // Limit to ten borrowers
  return borrowers.slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

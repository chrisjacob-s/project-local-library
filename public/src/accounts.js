const findAccountById = (accounts, id) => {
  return accounts.find((account) => account.id === id);
};

const sortAccountsByLastName = accounts => {
  return accounts.sort((firstAccount, secondAccount) => firstAccount.name.last > secondAccount.name.last ? 1 : -1);
};

const getTotalNumberOfBorrows = (accounts, books) => {
  let totalBorrows = 0;
  
  books.forEach((book) => book.borrows.forEach((borrow) => accounts.id === borrow.id && totalBorrows++));

  return totalBorrows;
};

const getBooksPossessedByAccount = (accounts, books, authors) => {
  let booksPossessed = [];

  books.forEach((book) => {
    if (book.borrows.find((borrow) => borrow.id === accounts.id && !borrow.returned)) {
      booksPossessed.push(book);
    }
  });

  booksPossessed.forEach((books) => {
    let bookAuthor = authors.find((author) => author.id === books.authorId);
    books['author'] = bookAuthor;
  });

  return booksPossessed;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

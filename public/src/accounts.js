function findAccountById(accounts, id) {
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i]
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => 
  (nameA.name.last > nameB.name.last ? 1 : -1));
  return accounts 
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
        total += 1;
      }
    }
  }
  return total 
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let match = [];
  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {}
    };
const { id, title, genre, authorID, author, borrows } = book;
    borrowed.forEach((borrow) => {
 if (borrow.id === account.id && borrow.returned === false) {
  result.push(book);
   match.push(borrow);
   book.borrows = match;
book.author = authors.filter((auth) => auth.id === book.authorId)[0];
      }
    });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let checkedOut = books.filter((book) => book.borrows.filter((record) => record.returned === false).length > 0);
  return checkedOut.length;
  }
// It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
function getMostCommonGenres(books) {
  let map = {};
  books.forEach((number) => {
    if (map[number.genre]) {
      map[number.genre]++;
    } else {
      map[number.genre] = 1;
    }
    });
  return Object.entries(map)
  .map(([name, count]) => {
    return {
      name, count
    };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}
//It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
function getMostPopularBooks(books) {
  return books
  .map((book) => {
    return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}
// It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let key = {
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        key.count += book.borrows.length;
      }
    });
    result.push(key);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

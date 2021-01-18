import React from 'react';
import PropTypes from 'prop-types';
import TheBookShelf from './TheBookShelf';

const BooksList = props => {
  const { books, changeShelf } = props;
  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {shelfTypes.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="TheBookShelf" key={index}>
            <h2 className="TheBookShelf-title">{shelf.title}</h2>
            <div className="TheBookShelf-books">
              <TheBookShelf books={shelfBooks} changeShelf={changeShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BooksList;

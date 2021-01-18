import React from 'react';
import PropTypes from 'prop-types';
import ChangeShelf from './ChangeShelf';

const Book = props => {
  const { book, books, changeShelf } = props;
  const bookImg = book.imageLinks.thumbnail;
  const title = book.title;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 150, height: 200, backgroundImage: `url(${bookImg})` }}
          />

          <ChangeShelf book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;

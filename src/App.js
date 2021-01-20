import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksList from './BooksList';
import { Link } from 'react-router-dom';
import Search from './Search';

class BooksApp extends React.Component {
  state = { books: [] };

  async componentDidMount() {
    this.setState({ books: await BooksAPI.getAll() });
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== changedBook.id)
          .concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
        <Route path='/search'>
  <Search books={books} changeShelf={this.changeShelf} />
</Route>
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads V.1</h1>
                </div>
                <BooksList books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          
        </Switch>
      </div>
    );
  }
}

export default BooksApp;

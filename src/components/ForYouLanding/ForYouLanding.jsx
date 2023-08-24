import React, { useEffect, useState } from "react";
import "./ForYouLanding.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ForYouLanding.css";
import Book from "../ui/Book/Book";

function ForYouLanding() {
  const [selectedBook, setSelectedBook] = useState({});
  const [recommendedBooks, setRecommended] = useState([]);
  const [suggestedBooks, setSuggested] = useState([]);

  async function getSelectedBook() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );

    const bookData = data[0];
    setSelectedBook(bookData);
  }

  async function getRecommendedBooks() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    );

    setRecommended(data);
  }

  async function getSuggestedBooks() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    );

    setSuggested(data);
  }

  useEffect(() => {
    getSelectedBook();
    getRecommendedBooks();
    getSuggestedBooks();
  }, []);

  return (
    <div className="row">
      <div className="container">
        <div className="foryou__wrapper">
          <div className="foryou__title">Selected just for you</div>
          <Link to={`/book/${selectedBook.id}`} className="selected__book">
            <div className="selected__subtitle">{selectedBook.subTitle}</div>
            <div className="selected__line"></div>
            <div className="selected__content">
              <figure className="book__image--wrapper selected__image--wrapper">
                <img
                  src={selectedBook.imageLink}
                  alt=""
                  className="book__image"
                />
              </figure>
              <div className="selected__text">
                <div className="selected__title">{selectedBook.title}</div>
                <div className="selected__author">{selectedBook.author}</div>
              </div>
            </div>
          </Link>

          <>
            <div className="foryou__title">Recommended for you</div>
            <div className="foryou__subtitle">We think you'll like these</div>
            <div className="books__container">
              {recommendedBooks.map((book) => (
                <Book book={book} key={book.id} />
              ))}
            </div>
          </>

          <>
            <div className="foryou__title">Suggested books</div>
            <div className="foryou__subtitle">Browse these books</div>
            <div className="books__container">
              {suggestedBooks.map((book) => (
                <Book book={book} key={book.id} />
              ))}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default ForYouLanding;

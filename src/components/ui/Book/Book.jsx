import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import { AiOutlineStar } from "react-icons/ai";

function Book({ book }) {
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    if (book.subscriptionRequired === true) {
      setPremium(true);
    }
  }, [book.subscriptionRequired]);

  return (
    <Link to={`/book/${book.id}`} className="book__anchor">
      {premium && (
        <div className="premium__wrapper">
          <div className="premium__text">Premium</div>
        </div>
      )}

      <figure className="book__image--wrapper">
        <img src={book.imageLink} alt="" className="book__image" />
      </figure>
      <div className="book__title">{book.title}</div>
      <div className="book__author">{book.author}</div>
      <div className="book__subtitle">{book.subTitle}</div>
      <div className="book__details--wrapper">
        <div className="book__details">
          <div className="book__details--icon">
            <AiOutlineStar />
          </div>
          <div className="book__details--text">{book.averageRating}</div>
        </div>
      </div>
    </Link>
  );
}

export default Book;

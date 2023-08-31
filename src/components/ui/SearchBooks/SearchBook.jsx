import React from "react";
// import { Link } from "react-router-dom";
import "./SearchBook.css";

function SearchBook({ book }) {
  return (
    // not sure why link doesnt work properly
    <a href={`/book/${book.id}`} className="search__book--anchor">
      <figure className="search__img--wrapper">
        <img src={book.imageLink} alt="" className="search__book--img" />
      </figure>
      <div className="search__book--wrapper">
        <div className="search__book--title">{book.title}</div>
        <div className="search__book--author">{book.author}</div>
        {/* <div className="search__book--duration">00:00</div> */}
      </div>
    </a>
  );
}

export default SearchBook;

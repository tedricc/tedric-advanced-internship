import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

function Search() {
  return (
    <div className="search__background">
      <div className="search__wrapper">
        <div></div>
        <div className="search__content">
          <div className="search">
            <div className="search__input--wrapper">
              <input
                type="text"
                className="search__input"
                placeholder="Search for books"
                name=""
                id=""
              />
              <div className="search__icon">
                <BsSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

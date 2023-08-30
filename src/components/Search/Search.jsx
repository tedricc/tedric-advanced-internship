import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";
import axios from "axios";
import SearchBook from "../ui/SearchBooks/SearchBook";
import Skeleton from "../ui/Skeleton/Skeleton";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searching, setSearching] = useState(false);
  const [completedSearch, setCompletedSearch] = useState(true);

  function handleSearch(event) {
    if (event.target.value) {
      setCompletedSearch(false);
      setSearching(true);
      setTimeout(() => {
        setSearchTerm(event.target.value);
      }, 3000);
    } else {
      setSearching(false);
    }
  }

  async function getData(input) {
    if (input) {
      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${input}`
      );
      console.log(data);
      setSearchData(data);
      setCompletedSearch(true);
    } else {
      setSearchData([]);
      setCompletedSearch(true);
    }
  }

  useEffect(() => {
    getData(searchTerm);
  }, [searchTerm]);

  return (
    <div className="search__background">
      <div className="search__wrapper">
        <div></div>
        <div className="search__content">
          <div className="search">
            <div className="search__input--wrapper">
              <input
                type="text"
                onChange={handleSearch}
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
        {searching ? (
          <div className="search__books--wrapper">
            {searchData.length === 0
              ? new Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton id={index} height="80px" width="400px" />
                  ))
              : searchData.map((book) => (
                  <SearchBook key={book.id} book={book} />
                ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;

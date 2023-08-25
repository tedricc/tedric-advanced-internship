import React, { useEffect, useState } from "react";
import "./BookInfoDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsStar, BsMic, BsLightbulb, BsBookmark, BsBook } from "react-icons/bs";

function BookInfoDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  async function getBookDetails() {
    const { data } = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );

    setBook(data);
  }

  useEffect(() => {
    getBookDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      <div className="container">
        <div className="book__info--wrapper">
          <div className="book__info">
            <div className="book__info--title">{book.title}</div>
            <div className="book__info--author">{book.author}</div>
            <div className="book__info--subtitle">{book.subTitle}</div>

            <div className="book__info--details">
              <div className="book__sub--wrapper">
                <div className="book__sub--info">
                  <div className="book__sub--icon">
                    <BsStar />
                  </div>
                  <div className="book__sub--text">
                    {book.averageRating} ({book.totalRating} ratings)
                  </div>
                </div>

                <div className="book__sub--info">
                  <div className="book__sub--icon">
                    <BsMic />
                  </div>
                  <div className="book__sub--text">{book.type}</div>
                </div>

                <div className="book__sub--info">
                  <div className="book__sub--icon">
                    <BsLightbulb />
                  </div>
                  <div className="book__sub--text">
                    {book.keyIdeas} Key Ideas
                  </div>
                </div>
              </div>
            </div>

            <div className="book__btn--wrapper">
              <button className="book__btn">
                <div className="book__btn--icon">
                  <BsBook />
                </div>
                <div className="book__btn--text">Read</div>
              </button>

              <button className="book__btn">
                <div className="book__btn--icon">
                  <BsMic />
                </div>
                <div className="book__btn--text">Listen</div>
              </button>
            </div>

            <div className="book__info--bookmark">
              <div className="bookmark__icon">
                <BsBookmark />
              </div>
              <div className="bookmark__text">Add Title to My Library</div>
            </div>

            <div className="book__info--about">What is it about?</div>

            <div className="book__info--tags">
              {book.tags?.map((tag, index) => (
                <div className="book__info--tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>

            <div className="book__info--description">
              {book.bookDescription}
            </div>

            <div className="book__info--about">About the author</div>

            <div className="book__info--description">
              {book.authorDescription}
            </div>
          </div>

          <figure className="info__image--wrapper">
            <img src={book.imageLink} className="info__image" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default BookInfoDetails;

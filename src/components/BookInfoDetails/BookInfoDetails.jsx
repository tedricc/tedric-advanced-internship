import React, { useEffect, useState } from "react";
import "./BookInfoDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BsStar, BsMic, BsLightbulb, BsBookmark, BsBook } from "react-icons/bs";
import Skeleton from "../ui/Skeleton/Skeleton";

function BookInfoDetails({ modal, toggleModal, user }) {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  async function getBookDetails() {
    const { data } = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );

    setBook(data);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getBookDetails();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      <div className="container">
        <div className="book__info--wrapper">
          <div className="book__info">
            {!loading && Object.keys(book).length > 0 ? (
              <>
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
                  <Link to={`/player/${id}`} className="book__btn">
                    <div className="book__btn--icon">
                      <BsBook />
                    </div>
                    <div className="book__btn--text">Read</div>
                  </Link>

                  <Link to={`/player/${id}`} className="book__btn">
                    <div className="book__btn--icon">
                      <BsMic />
                    </div>
                    <div className="book__btn--text">Listen</div>
                  </Link>
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
              </>
            ) : (
              <>
                <Skeleton width="600px" height="40px" />
                <Skeleton width="200px" height="20px" />
                <Skeleton width="400px" height="20px" />
                <Skeleton width="400px" height="80px" />
                <Skeleton width="200px" height="40px" />
                <Skeleton width="200px" height="20px" />
                <Skeleton width="100px" height="20px" />
                <Skeleton width="400px" height="40px" />
                <Skeleton width="600px" height="200px" />
                <Skeleton width="100px" height="20px" />
                <Skeleton width="600px" height="200px" />
              </>
            )}
          </div>

          {!loading && Object.keys(book).length > 0 ? (
            <>
              <figure className="info__image--wrapper">
                <img src={book.imageLink} className="info__image" alt="" />
              </figure>
            </>
          ) : (
            <>
              <Skeleton width="300px" height="300px" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookInfoDetails;

import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";
import BookInfoDetails from "../components/BookInfoDetails/BookInfoDetails";
import LoginModal from "../components/LoginModal/LoginModal";

function BookInfo({ modal, toggleModal, user }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {modal && <LoginModal toggleModal={toggleModal} />}

      <div className="wrapper">
        <SideBar modal={modal} toggleModal={toggleModal} user={user} />
        <Search />
        <BookInfoDetails modal={modal} toggleModal={toggleModal} user={user} />
      </div>
    </>
  );
}

export default BookInfo;

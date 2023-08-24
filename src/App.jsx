import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import ForYou from "./pages/ForYou";
import BookInfo from "./pages/BookInfo";

const firebaseConfig = {
  apiKey: "AIzaSyBcboQFWC77VkPAZzcyDApJhwtnYrLKLAU",
  authDomain: "tedric-advanced-internship.firebaseapp.com",
  projectId: "tedric-advanced-internship",
  storageBucket: "tedric-advanced-internship.appspot.com",
  messagingSenderId: "588751824281",
  appId: "1:588751824281:web:996bc2510d895eccab5f08",
};

initializeApp(firebaseConfig);

function App() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home modal={modal} toggleModal={toggleModal} />}
        />
        <Route
          path="/for-you"
          element={<ForYou modal={modal} toggleModal={toggleModal} />}
        />
        <Route path="/book/:id" element={<BookInfo />} />
      </Routes>
    </Router>
  );
}

export default App;

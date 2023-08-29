import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import ForYou from "./pages/ForYou";
import BookInfo from "./pages/BookInfo";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Player from "./pages/Player";
import ChoosePlan from "./pages/ChoosePlan";
import Settings from "./pages/Settings";

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
  const [user, setUser] = useState(false);

  function toggleModal() {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user;
        console.log(uid);
        setUser(true);
        // ...
      } else {
        // User is signed out
        setUser(false);
        console.log("User Logged Out");
        // ...
      }
    });
  }, [auth]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home modal={modal} toggleModal={toggleModal} user={user} />}
        />
        <Route
          path="/for-you"
          element={
            <ForYou modal={modal} toggleModal={toggleModal} user={user} />
          }
        />
        <Route
          path="/book/:id"
          element={
            <BookInfo modal={modal} toggleModal={toggleModal} user={user} />
          }
        />
        <Route
          path="/player/:id"
          element={
            <Player modal={modal} toggleModal={toggleModal} user={user} />
          }
        />
        <Route path="/choose-plan" element={<ChoosePlan />} />
        <Route
          path="/settings"
          element={
            <Settings modal={modal} toggleModal={toggleModal} user={user} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

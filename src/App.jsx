import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import ForYou from "./pages/ForYou";
import BookInfo from "./pages/BookInfo";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Player from "./pages/Player";
import ChoosePlan from "./pages/ChoosePlan";
import Settings from "./pages/Settings";
import app from "./firebase/firebase";
import getPremiumStatus from "./stripe/getPremiumStatus";

function App() {
  const firebase = app;

  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

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

  useEffect(() => {
    const checkPremium = async () => {
      const newPremiumStatus = auth.currentUser
        ? await getPremiumStatus(firebase)
        : false;
      setIsPremium(newPremiumStatus);
    };
    checkPremium();
  }, [firebase, auth.currentUser?.uid, auth.currentUser]);

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
            <BookInfo
              modal={modal}
              toggleModal={toggleModal}
              user={user}
              isPremium={isPremium}
            />
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
            <Settings
              modal={modal}
              toggleModal={toggleModal}
              user={user}
              isPremium={isPremium}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

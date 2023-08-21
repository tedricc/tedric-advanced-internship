import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Numbers from "../components/Numbers";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}

export default Home;

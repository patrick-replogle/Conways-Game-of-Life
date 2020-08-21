import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <p>Rules of Game</p>
      <Footer />
    </div>
  );
};

export default About;

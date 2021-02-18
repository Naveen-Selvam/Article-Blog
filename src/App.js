import React from "react";
import Formcontainer from "./components/Formcontainer";
import image1 from "../src/image/image.png";
const App = (props) => {
  return (
    <div style={{ backgroundColor: "0000FF" }}>
      <div style={{ display: "flex" }}>
        <img src={image1} style={{ width: "8rem", height: "6rem" }}></img>
        <h1 className="style">Blog Articles</h1>
      </div>
      <Formcontainer />
    </div>
  );
};

export default App;

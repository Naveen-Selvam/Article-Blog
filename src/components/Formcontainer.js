import React, { useState } from "react";
import Form from "./Form";
import Publish from "./Publish";
import Search from "./Search";

const Formcontainer = (props) => {
  const [form, setForm] = useState(false);
  const [publishedPost, setPublishedPost] = useState(false);
  const [search, setSearch] = useState("");

  const handlePost = () => {
    setForm(!form);
  };
  const handlePublished = () => {
    setPublishedPost(!publishedPost);
  };
  const toggleFunc = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Search toggleFunc={toggleFunc} />
      </div>

      <div className="container">
        <div className="left">
          <button className="button" onClick={handlePost}>
            New Post
          </button>
          {form && <Form />}
        </div>

        <div className="right">
          <button className="button" onClick={handlePublished}>
            {publishedPost ? "close" : "Published Post"}
          </button>
          {publishedPost && <Publish search={search} />}
        </div>
      </div>
    </div>
  );
};

export default Formcontainer;

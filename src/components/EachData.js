import React from "react";
import MDEditor from "@uiw/react-md-editor";

const EachData = (props) => {
  const { title, text } = props;

  return (
    <div className="eachData">
      <h3>{title}</h3>
      <MDEditor.Markdown source={text} />
    </div>
  );
};

export default EachData;

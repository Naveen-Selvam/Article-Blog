import React from "react";
import EachData from "./EachData";
import { useSelector } from "react-redux";

const Publish = (props) => {
  const { search } = props;

  let formData = useSelector((state) => state.formData);

  return (
    <div style={{ overflowY: "auto", height: "60vh" }}>
      {formData.length > 0 ? (
        formData
          .filter((data) => {
            return data.title.toLowerCase().includes(search);
          })
          .map((data, i) => {
            return <EachData key={i} {...data} />;
          })
      ) : (
        <h2>No Articles Found</h2>
      )}
    </div>
  );
};

export default Publish;

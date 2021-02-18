import React, { useState } from "react";
import Alert from "./Alert";
import { useDispatch } from "react-redux";
import { addFormData } from "../actions/form-action";
import MDEditor from "@uiw/react-md-editor";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [formErrors, setFormErrrors] = useState({});
  const dispatch = useDispatch();

  const errors = {};

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "text") {
      setText(e.target.value);
    }
  };

  const runValidation = () => {
    if (title.trim().length === 0) {
      errors.title = "Title cannot be empty";
    } else if (text.trim().length === 0) {
      errors.text = "Content cannot be empty";
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "title") {
      if (title.trim().length === 0) {
        errors.title = "Title cannot be empty";
      }
      setFormErrrors(errors);
    } else if (e.target.name === "text") {
      if (text.trim().length === 0) {
        errors.text = "Content cannot be empty";
      }
      setFormErrrors(errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      text,
    };
    runValidation();
    setFormErrrors(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(addFormData(formData));
      setTitle("");
      setText("");
      setFormErrrors({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="title"
          style={{ borderColor: formErrors?.title && "red" }}
          onBlur={handleBlur}
          type="text"
          value={title}
          placeholder="Title .."
          name="title"
          onChange={handleChange}
        />
        <br />
        {formErrors?.title && <Alert formErrors={formErrors.title} />}
        <br />

        <div style={{ paddingLeft: "3.2rem" }}>
          <MDEditor
            className="textarea"
            style={{ borderColor: formErrors?.text && "red" }}
            value={text}
            name="text"
            onChange={setText}
          />
        </div>

        <br />
        {formErrors?.text && <Alert formErrors={formErrors.text} />}
        <br />
        <input type="submit" value="Publish" />
      </form>
    </div>
  );
};

export default Form;

import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormHandler() {
  const [inputType, setInputType] = useState("password");

  function handlerFormSubmit(e) {
    e.preventDefault();
    console.log("Form is submitted succesfully");
  }
  function handlerInputChange(e) {
    console.log(e.target.value);
  }

  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    console.log("I have been called");
  }
  return (
    <TextInputForm
      inputType={inputType}
      handlerFormSubmit={handlerFormSubmit}
      handlerInputChange={handlerInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormHandler;

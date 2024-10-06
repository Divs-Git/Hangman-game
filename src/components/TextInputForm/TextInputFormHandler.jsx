import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormHandler() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  function handlerFormSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      if (value) {
        navigate("/play");
      }
    }, 5000);
  }
  function handlerInputChange(e) {
    setValue(e.target.value);
  }

  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
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

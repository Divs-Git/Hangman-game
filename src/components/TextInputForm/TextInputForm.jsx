import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  inputType,
  handlerFormSubmit,
  handlerInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handlerFormSubmit}>
      <TextInput
        inputType={inputType}
        label="Enter your text here"
        placeholder="Type here"
        inputChangeHandler={handlerInputChange}
      />

      <Button
        label={inputType === "password" ? "Show" : "Hide"}
        buttonStyleType="warning"
        onClickHandler={handleShowHideClick}
      />

      <Button label="Submit" buttonStyleType="primary" type="submit" />
    </form>
  );
}

export default TextInputForm;

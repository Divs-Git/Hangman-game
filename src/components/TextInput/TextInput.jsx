function TextInput({
  label,
  inputType = "text",
  placeholder = "Enter Your Text Here",
  inputChangeHandler,
}) {
  return (
    <label>
      <span className="text-gray-500">{label}</span>
      <input
        type={inputType}
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        placeholder={placeholder}
        onChange={inputChangeHandler}
      />
    </label>
  );
}

export default TextInput;

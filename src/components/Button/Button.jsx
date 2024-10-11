import getButtonStyleType from './getButtonStyleType';

function Button({
  buttonStyleType = 'primary',
  label,
  type = 'button',
  onClickHandler,
}) {
  return (
    <button
      className={`text-white ${getButtonStyleType(
        buttonStyleType
      )} focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 my-4`}
      type={type}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}

export default Button;

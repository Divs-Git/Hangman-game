export default function getButtonStyleType(buttonType) {
  switch (buttonType) {
    case "primary":
      return "bg-blue-700";
    case "success":
      return "bg-green-700";
    case "warning":
      return "bg-yellow-400";
    case "error":
      return "bg-red-700";
  }
}

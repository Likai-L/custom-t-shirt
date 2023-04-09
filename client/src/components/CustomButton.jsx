import { useSnapshot } from "valtio";
import state from "../store";

export default function CustomButton({
  title,
  customStyles,
  type,
  handleClick,
}) {
  const generateStyle = (type) => {
    const snap = useSnapshot(state);
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      type="button"
      className={`${customStyles} px-2 py-1.5 rounded-md`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

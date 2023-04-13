import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

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
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
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

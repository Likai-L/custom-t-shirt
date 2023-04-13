import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

export default function Tab({ isFilterTab, isActive, handleClick, tab }) {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActive
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorhism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? "" : "w-[80%] h-[80%]"}`}
      />
    </div>
  );
}

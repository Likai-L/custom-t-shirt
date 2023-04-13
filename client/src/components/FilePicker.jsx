import React from "react";

import CustomButton from "./CustomButton";
export default function FilePicker({ file, setFile, readFile }) {
  return (
    <div className="filepicker-container">
      <div className="flex-1 fkex fkex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-600 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CustomButton
            type="outline"
            title="Set Logo"
            handleClick={() => readFile("logo")}
            customStyles="text-xs"
          />
          <CustomButton
            type="filled"
            title="Set Texture"
            handleClick={() => readFile("full")}
            customStyles="text-xs"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";

import CustomButton from "./CustomButton";

export default function AIPicker({
  prompt,
  setPrompt,
  generatingImage,
  handleSubmit,
}) {
  return (
    <div className="aipicker-container">
      <p className="text-[14px] text-center font-bold">AI Image</p>
      <textarea
        placeholder="Describe the image in your mind..."
        rows={6}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImage ? (
          <CustomButton
            type="outline"
            title="AI is working on your image, please wait..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => {
                handleSubmit("logo");
              }}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Texture"
              handleClick={() => {
                handleSubmit("full");
              }}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
}

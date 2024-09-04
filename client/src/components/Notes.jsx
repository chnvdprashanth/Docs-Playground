import React, { useEffect, useRef, useState } from "react";
import { IoCheckboxOutline, IoImageOutline } from "react-icons/io5";
import { LuRedo2, LuUndo2 } from "react-icons/lu";

const Notes = ({ setNotes, setToggleNotes }) => {
  const textAreaRef = useRef(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const handleCreateNote = async () => {
    if (title === null || desc === null) {
      setToggleNotes(false);
      return;
    }

    try {
      await fetch("https://docs-playground.onrender.com/user", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          desc: desc,
          image: image,
        }),
      });

      // setNotes((prevNote) => [...prevNote, note]);
      setToggleNotes(false);
    } catch (err) {}
  };

  const handleImageInput = () => {
    setImage(null);
  };

  useEffect(() => {
    const textArea = textAreaRef.current;
    const handleInput = () => {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    };

    textArea?.addEventListener("input", handleInput);

    return () => {
      textArea?.removeEventListener("input", handleInput);
    };
  });

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-y-2">
        <input
          type="text"
          placeholder="Title here"
          name="docs-title"
          id="docs-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none bg-zinc-800 py-2"
        />
        <textarea
          ref={textAreaRef}
          type="text"
          name="docs-text"
          id="docs-text"
          placeholder="Take a note..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="outline-none text-base bg-zinc-800"
          style={{ resize: "none" }}
        />
      </div>
      <div className="w-full flex items-center gap-x-4 max-sm:gap-x-2 p-2">
        <div className="w-full flex items-center gap-x-4 max-sm:gap-x-2">
          <IoImageOutline
            className="w-6 h-6 cursor-pointer"
            onClick={() => handleImageInput}
          />
          <IoCheckboxOutline className="w-6 h-6 cursor-pointer" />
          <LuUndo2 className="w-4 h-4 text-white cursor-pointer" />
          <LuRedo2 className="w-4 h-4 text-white cursor-pointer" />
        </div>
        <div className="flex justify-center items-center">
          <p
            onClick={handleCreateNote}
            className="text-base cursor-pointer font-normal"
          >
            Close
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notes;

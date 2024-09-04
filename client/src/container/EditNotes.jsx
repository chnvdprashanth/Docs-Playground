import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineSaveAs } from "react-icons/md";

const EditNotes = () => {
  const { noteId } = useParams();
  const note = JSON.parse(localStorage.getItem(noteId));
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteDesc, setNoteDesc] = useState(note.desc);

  useEffect(() => {
    const saveNote = () => {
      localStorage.setItem(
        noteId,
        JSON.stringify({
          _id: noteId,
          title: noteTitle,
          desc: noteDesc,
        })
      );
    };

    saveNote();
  }, [noteId, noteTitle, noteDesc]);

  return (
    <div className="fixed flex flex-col w-full h-screen bg-zinc-800 text-white">
      <div className="absolute z-10 right-8 top-6 text-2xl bg-zinc-400 p-2 text-black rounded-md">
        <Link to="/">
          <MdOutlineSaveAs />
        </Link>
      </div>
      <textarea
        className="min-w-[400px] overflow-hidden border-b-2 border-zinc-600 max-sm:h-20 sm:h-20  outline-none resize-none px-4 pt-6 bg-zinc-800
        text-2xl font-semibold mx-4 text-zinc-300"
        type="text"
        placeholder="Title here"
        onChange={(e) => setNoteTitle(e.target.value)}
        value={noteTitle}
      />
      <textarea
        className="w-auto h-7/8 m-4 text-lg no-scrollbar outline-none px-4 py-2 resize-none bg-zinc-800"
        type="text"
        placeholder="Type your notes here..."
        onChange={(e) => setNoteDesc(e.target.value)}
        value={noteDesc}
      />
    </div>
  );
};

export default EditNotes;

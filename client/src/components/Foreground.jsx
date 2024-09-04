import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { getDataFromLocalStorage } from "../utils/data";
import Login from "./Login";
import User from "./User";
import NoteBar from "./NoteBar";

const Foreground = () => {
  const ref = useRef(null);
  const [notes, setNotes] = useState([]);
  const [toggleNotes, setToggleNotes] = useState(false);
  const [loginStatus, setLoginStatus] = useState(true);

  useEffect(() => {
    const storedData = getDataFromLocalStorage();
    setNotes(storedData);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user") === null) setLoginStatus(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-2 absolute z-[100]">
      <div className="w-full mt-4 flex sm:justify-center justify-items-start items-center">
        <div className="w-1/2 max-sm:w-4/5 max-sm:mx-2 rounded-md border-[1px] shadow-lg border-zinc-400">
          <NoteBar setNotes={setNotes} toggleState = {{toggleNotes,setToggleNotes}} />
        </div>
        <div className="fixed top-3 right-5 max-sm:right-1 text-white w-14 h-14 shadow-lg bg-zinc-600 flex items-center justify-center rounded-full">
          {loginStatus ? <User /> : <Login setLoginStatus={setLoginStatus} />}
        </div>
      </div>
      <div
        ref={ref}
        className={`w-full h-full overflow-x-hidden overflow-y-auto ${
          toggleNotes ? "top-[30%]" : "top-[15%]"
        } flex flex-wrap gap-5 no-scrollbar`}
      >
        {notes?.map((note, index) => (
          <Card
            reference={ref}
            note={note}
            id={note._id}
            key={index}
            setNotes={setNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default Foreground;

import Notes from "./Notes";
import { IoCheckboxOutline, IoImageOutline } from "react-icons/io5";
const NoteBar = ({ setNotes, toggleState }) => {
  return (
    <div className="w-full flex items-center text-lg font-medium text-zinc-50 px-4">
            {!toggleState.toggleNotes ? (
              <div className="w-full flex gap-x-2 items-center">
                <p className="w-full py-2" onClick={() => toggleState.setToggleNotes(true)}>
                  Take a note...
                </p>
                <div className="flex items-center gap-x-4">
                  <IoImageOutline className="w-6 h-6" />
                  <IoCheckboxOutline className="w-6 h-6" />
                </div>
              </div>
            ) : (
              <Notes setNotes={setNotes} setToggleNotes={toggleState.setToggleNotes} />
            )}
          </div>
  )
}

export default NoteBar
import { Note } from "../models/notes.js";

export const updateNoteWithId = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const updatedNote = {
      title : req.body.title,
      desc : req.body.desc,
      image : req.body.image,
    }
    const note = await Note.findByIdAndUpdate({ _id:noteId }, updatedNote, {
      new: true,
      runValidators: true,
    });

    if (!note) {
      return res.status(404).send("Note not found");
    }

    return res.status(200).json(note);
  } catch (err) {
    return res.status(500).send("Error in updating note.");
  }
};

export const removeNoteWithId = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const note = await Note.findOneAndDelete({ _id : noteId });

    if (!note) {
      return res.status(404).send("Note not found.");
    }

    return res.status(200).send("Note deleted successfully.");
  } catch (err) {
    return res.status(500).send("Error in deleting note.");
  }
};

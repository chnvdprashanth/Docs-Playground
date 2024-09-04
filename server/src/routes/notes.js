import express from "express";
import { removeNoteWithId, updateNoteWithId } from "../controllers/index.js";

const notesRouter = express.Router();

notesRouter
  .route("/:noteId")
  .patch(updateNoteWithId)
  .delete(removeNoteWithId);

export default notesRouter;

import express from "express";
import { getNotesOfAUser, createNotesOfAUser, updateNoteWithId, removeNoteWithId } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.route("/").get(getNotesOfAUser).post(createNotesOfAUser);

userRouter
  .route("/note/:noteId")
  .patch(updateNoteWithId)
  .delete(removeNoteWithId);

export default userRouter;

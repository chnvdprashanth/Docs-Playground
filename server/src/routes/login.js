import express from "express";
import { createUser } from "../controllers/index.js";

const loginRouter = express.Router();

loginRouter.post("/", createUser);

export default loginRouter;
import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getNote } from "../controllers/notesController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { noteSchema } from "../schemas/notesSchemas.js";

const noteRouter = Router();

noteRouter.post("/note", joiValidation(noteSchema),createNote)
noteRouter.get("/notes",getAllNotes)
noteRouter.get("/note/:id",getNote)
noteRouter.delete("/note/:id",deleteNote)

export default noteRouter;
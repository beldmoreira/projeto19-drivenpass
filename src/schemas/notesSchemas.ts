import Joi from "joi";
import { CreateNoteData } from "../services/noteService";

export const noteSchema = Joi.object <CreateNoteData> ({
    title: Joi.string().max(50).required(),
    note:Joi.string().max(1000).required()      
});
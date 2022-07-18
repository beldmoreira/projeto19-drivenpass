import { Note } from "@prisma/client";
import notesRepository from "../repositories/notesRepository.js";

export type CreateNoteData = Note;

async function insert(createNoteData: CreateNoteData) {
  await notesRepository.insert(createNoteData);
}

export default {
  insert
};
import { Request, Response } from "express";
import noteService,{CreateNoteData} from "../services/noteService.js";

export async function createNote(req: Request, res: Response) {
    const note: CreateNoteData = req.body;
    const {id} = res.locals.user;
    await noteService.create({...note, userId:id})
    return res.sendStatus(200)
}

export async function getAllNotes(req: Request, res: Response) {
    const {id} = res.locals.user;
    const notes = await noteService.getNotes(id);
    return res.status(200).send(notes)
}

export async function getNote(req: Request, res: Response) {
    const {id} = res.locals.user;
    const noteId = req.params.id;
    const note = await noteService.getOneNote(id,noteId)
    return res.status(200).send(note)
}

export async function deleteNote(req: Request, res: Response) {
    const {id} = res.locals.user;
    const noteId = req.params.id;
    await noteService.deleteNote(id,noteId)
    return res.sendStatus(200);
}
import { prisma } from "../config/database.js";
import {CreateNoteData} from "../services/noteService.js";

async function insert(createNoteData:CreateNoteData) {
    await prisma.note.create({
        data: createNoteData
    });
}

async function findNotes(id:number) {
    return await prisma.note.findMany({
        where: {
        userId: id,
    },
    
});
}

async function findNotesById(id:number) {
    return await prisma.note.findUnique({
        where: {
        id:id,
    },
});
}
async function findNotesByTitle(title: string, userId: number) {
    await prisma.note.findMany({
        where: {
            title,
            userId
        },
    });
}

async function deleteNotes (id:number) {
    await prisma.note.delete({
        where: {
            id:id
        },
    });
}

export default {
    insert,
    findNotes,
    findNotesById,
    findNotesByTitle,
    deleteNotes
}
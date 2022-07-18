import { prisma } from "../config/database.js";
import {CreateCardData} from "../services/cardService.js";


async function insert (createCardData:CreateCardData) {
    await prisma.card.create({
        data: createCardData
      });
}

async function findCards (id:number) {
    return await prisma.card.findMany({
        where: {
        userId: id,
    },
    
});
}

async function findCardsById (id:number) {
    return await prisma.card.findUnique({
            where: {
            id:id,
        },
});
}

async function deleteCards (id:number) {
    await prisma.card.delete({
        where: {
            id:id
        },
    });
}

async function findCardByTitle (title: string, userId: number){
    await prisma.card.findMany({
        where: {
            title,
            userId
        },
    });
}

export default {
    insert,
    findCards,
    findCardsById,
    deleteCards,
    findCardByTitle

}
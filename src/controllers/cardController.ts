import { Request, Response } from "express";
import cardService,{CreateCardData} from "../services/cardService.js";

export async function createCard(req: Request, res: Response) {
    const card: CreateCardData = req.body;
    const {id} = res.locals.user;
    await cardService.create({...card,userId:id})
    return res.sendStatus(200)
}

export async function getAllCards(req: Request, res: Response) {
    const {id} = res.locals.user;
    const cards = await cardService.getCards(id);
    return res.status(200).send(cards);
}

export async function getCard(req: Request, res: Response) {
    const {id} = res.locals.user;
    const cardId = req.params.id;
    const card = await cardService.getOneCard(id,cardId)
    return res.status(200).send(card)
}

export async function deleteCard (req: Request, res: Response) {
    const {id} = res.locals.user;
    const cardId = req.params.id;
    await cardService.deleteCard(id,cardId)
    return res.sendStatus(200)
}

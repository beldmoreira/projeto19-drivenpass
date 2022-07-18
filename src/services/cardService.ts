import { Card } from "@prisma/client";
import cardRepository from "../repositories/cardsRepository.js";

export type CreateCardData = Card;

async function create(card: CreateCardData) {
  const checkTitle = await cardRepository.findCardByTitle(
    card.title,
    card.userId
  )
  if (checkTitle) {
    throw {
      status: 409,
      message:"There is already a user with this title"
    }
    
  } 
 
}

async function getCards(id: number) {
  
}

async function getOneCard (id: number, cardId: number) {
  const card = await cardRepository.findCardsById(cardId);
  if (!card) {
      throw {
          status: 404,
          message: "The card was not found"
      };
  }
  if (card.userId != id) {
      throw {
          status: 401,
          message: "Unauthorized"
      };
}
}

async function deleteCard (id: number, cardId: number) {
  const card = await getOneCard(id,cardId);
  await cardRepository.deleteCards(card.id); 
  
}

export default {
  create,
  getCards,
  getOneCard,
  deleteCard
};

import {Router} from "express";
import {createCard,getAllCards,getCard,deleteCard} from "../controllers/cardController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { cardSchema } from "../schemas/cardsSchemas";

const cardsRouter = Router();

cardsRouter.post("/card",joiValidation(cardSchema),createCard)
cardsRouter.get("/cards",getAllCards)
cardsRouter.get("/card/:id",getCard)
cardsRouter.delete("/card/:id",deleteCard)


export default cardsRouter;

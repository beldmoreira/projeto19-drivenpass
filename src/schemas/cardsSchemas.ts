import Joi from "joi";
import { CreateCardData } from "../services/cardService";

export const cardSchema = Joi.object <CreateCardData> ({
    title:Joi.string().required(),
    cardName: Joi.string().required(),
    cardNumber: Joi.string().required(),
    cvc: Joi.string().required(),
    expirationDate: Joi.string().required(),
    password: Joi.string().required(),
    isItVirtual: Joi.boolean().required(),
    type: Joi.string().required() 
  
});
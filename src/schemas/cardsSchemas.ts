import Joi from "joi";

export const cardSchema = Joi.object ({
    title:Joi.string().required(),
    cardName: Joi.string().required(),
    cardNumber: Joi.string().required(),
    cvc: Joi.string().required(),
    expirationDate: Joi.string().required(),
    password: Joi.string().required(),
    isItVirtual: Joi.boolean().required(),
    type: Joi.string().required() 
  
});
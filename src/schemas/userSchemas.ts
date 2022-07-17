import Joi from "joi";

export const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
})
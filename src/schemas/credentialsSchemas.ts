import Joi from "joi";

export const credentialSchema = Joi.object ({
    title: Joi.string().required(),
    username: Joi.string().required(),
    url: Joi.string().required(),
    password: Joi.string().required()  
});

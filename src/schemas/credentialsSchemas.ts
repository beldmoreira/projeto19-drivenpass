import Joi from "joi";
import { CreateCredentialData } from "../services/credentialService";

export const credentialSchema = Joi.object <CreateCredentialData>({
    title: Joi.string().required(),
    username: Joi.string().required(),
    url: Joi.string().required(),
    password: Joi.string().required()  
});

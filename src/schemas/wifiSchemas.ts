import Joi from "joi";

export const wifiSchema = Joi.object({
    wifiName: Joi.string().required(),
    password: Joi.string().required(),
    ssid: Joi.string().required()
})
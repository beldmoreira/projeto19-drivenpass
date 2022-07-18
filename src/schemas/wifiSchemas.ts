import Joi from "joi";
import { CreateWifiData } from "../services/wifiService";


export const wifiSchema = Joi.object <CreateWifiData>({
    wifiName: Joi.string().required(),
    password: Joi.string().required(),
    ssid: Joi.string().required()
})
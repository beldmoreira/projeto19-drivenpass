import { Router } from "express";
import { createWifi, deleteWifi, getOneWifi, getWifis } from "../controllers/wifiController.js"
import joiValidation from "../middlewares/joiValidation.js";
import { wifiSchema } from "../schemas/wifiSchemas.js";

const wifiRouter = Router();

wifiRouter.post("/wifi",joiValidation(wifiSchema),createWifi)
wifiRouter.get("/wifis",getWifis)
wifiRouter.get("/wifi/:id",getOneWifi)
wifiRouter.delete("/wifi/:id",deleteWifi)

export default wifiRouter;
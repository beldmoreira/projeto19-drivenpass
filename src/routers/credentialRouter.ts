import { Router } from "express";
import {createCredential,getCredential,getCredentials,deleteCredential} from "../controllers/credentialController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { credentialSchema } from "../schemas/credentialsSchemas.js";

const credentialRouter = Router();

credentialRouter.post("/credential",joiValidation(credentialSchema),createCredential)
credentialRouter.get("/credentials",getCredentials)
credentialRouter.get("/credential/:id",getCredential)
credentialRouter.delete("/credential/:id",deleteCredential)

export default credentialRouter;
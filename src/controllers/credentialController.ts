import { Request, Response } from "express";
import credentialService, {CreateCredentialData} from "../services/credentialService.js";


export async function createCredential(req: Request, res: Response) {
    const credential: CreateCredentialData = req.body
    const {id} = res.locals.user;
    await credentialService.create({...credential,userId:id})
    return res.sendStatus(200)
}

export async function getCredentials(req: Request, res: Response) {
    const {id} = res.locals.user;
    const credentials = await credentialService.getAllCredentials(id)
    return res.status(200).send(credentials);
}

export async function getCredential(req: Request, res: Response) {
    const {id} = res.locals.user;
    const credentialId = req.params.id;
    const credential = await credentialService.getOneCredential(id,credentialId)
    return res.status(200).send(credential)

}

export async function deleteCredential(req: Request, res: Response) {
    const {id} = res.locals.user;
    const credentialId = req.params.id;
    await credentialService.deleteCredential(id,credentialId)
    return res.sendStatus(200)
}
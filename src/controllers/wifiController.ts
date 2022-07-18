import { Request, Response } from "express";
import wifiService, {CreateWifiData} from "../services/wifiService.js";


export async function createWifi(req: Request, res: Response){
    const wifi: CreateWifiData = req.body;
    const {id} = res.locals.user;
    await wifiService.create({...wifi,userId:id})
    return res.sendStatus(201)
}

export async function getWifis(req: Request, res: Response){
    const {id} = res.locals.user;
    const wifis = await wifiService.getAllWifis(id)
    return res.status(200).send(wifis)
}

export async function getOneWifi(req: Request, res: Response) {
    const {id}= res.locals.user;
    const wifiId = req.params.id;
    const wifi = await wifiService.getWifi(id,wifiId)
    return res.status(200).send(wifi)
}

export async function deleteWifi(req: Request, res: Response) {
    const {id}= res.locals.user;
    const wifiId = req.params.id;
    await wifiService.deleteWifi(id,wifiId)
    return res.sendStatus(200);
}
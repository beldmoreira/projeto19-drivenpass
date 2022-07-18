import { prisma } from "../config/database.js";
import {CreateWifiData} from "../services/wifiService.js";

async function insert(createWifiData: CreateWifiData) {
    await prisma.wifi.create({
        data: createWifiData
    })
}

async function findWifiById(id:number) {
    await prisma.wifi.findMany({
        where:{
            id:id,
        },
       
    });
}

async function findWifis(id:number) {
    return await prisma.wifi.findMany({
        where: {
        userId: id,
    },
    
});
}

async function deleteWifis(id:number) {
    await prisma.wifi.delete({
        where:{
            id:id
        }
    })
}

export default {
    insert,
    findWifiById,
    findWifis,
    deleteWifis
}
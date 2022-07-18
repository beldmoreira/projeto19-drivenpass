import { prisma } from "../config/database.js";
import {CreateCredentialData} from "../services/credentialService.js"

async function insert (createCredentialData:CreateCredentialData) {
    await prisma.credential.create({
        data: createCredentialData
    });
}

async function findCredentials (id:number) {
    return await prisma.credential.findMany({
        where: {
        userId: id,
    },
    
});
}

async function findCredentialsById(id:number) {
    return await prisma.credential.findUnique({
        where: {
        id:id,
    },
});
}

async function findCredentialsByTitle(title: string, userId: number) {
    await prisma.credential.findMany({
        where: {
            title,
            userId
        },
    });
}

async function deleteCredentials (id:number) {
    await prisma.credential.delete({
        where: {
            id:id
        },
    });
}

export default {
    insert,
    findCredentials,
    findCredentialsById,
    findCredentialsByTitle,
    deleteCredentials
}
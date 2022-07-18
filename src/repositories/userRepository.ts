import { prisma } from "../config/database.js";
import { CreateUserData } from "../services/userService.js";

async function insert (createUserData:CreateUserData) {
    await prisma.user.create({
        data: createUserData
    });
}

async function findUserById(id:number) {
    return await prisma.user.findMany({
        where: {
            id:id,
        },
    });
}

async function findUserByEmail(email:string) {
    await prisma.user.findMany({
        where: {
            email:email
        },
    });
}

export default {
    insert,
    findUserById,
    findUserByEmail

}
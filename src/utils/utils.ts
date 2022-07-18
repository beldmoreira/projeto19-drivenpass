import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cryptr from "cryptr";


async function encryptPassword(password:string){
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}

function encryptData(data:string){
    const encryptedData = cryptr.encrypt(data);
    return encryptedData;
}

function decryptData(encrypted:string){
    const decryptedData = cryptr.decrypt(encrypted);
    return decryptedData;
}

function checkToken(token:string){
    const secretKey = process.env.JWT_SECRET;
    const check = jwt.verify(token, secretKey);
    return check;
}

export default{
    encryptPassword,
    encryptData,
    decryptData,
    checkToken
}
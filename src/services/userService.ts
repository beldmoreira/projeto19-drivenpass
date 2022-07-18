import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";

export type CreateUserData = User;

async function insert(createUserData: CreateUserData) {
  await userRepository.insert(createUserData);
}

async function findUserById(id: number) {
  const user = await userRepository.findUserById(id);
  if (!user) {
      throw {
          status: 404,
          message: "The user not found",
      };
  }
  return user[0];
}

async function findUserByEmail(email:string) {
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
      throw {
          status: 404,
          message: "The user not found",
      };
  }
  return user;
}
export default {
  insert,
  findUserById,
  findUserByEmail
};
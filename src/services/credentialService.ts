import { Credential } from "@prisma/client";
import credentialRepository from "../repositories/credentialRepository.js";

export type CreateCredentialData = Credential;

async function insert(createCredentialData: CreateCredentialData) {
  await credentialRepository.insert(createCredentialData);
}

export default {
  insert
};

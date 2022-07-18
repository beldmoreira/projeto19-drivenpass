import { Wifi } from "@prisma/client";
import wifiRepository from "../repositories/wifiRepository.js";

export type CreateWifiData = Wifi;

async function insert(createWifiData: CreateWifiData) {
  await wifiRepository.insert(createWifiData);
}

export default {
  insert
};
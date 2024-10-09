import {Connection, PublicKey} from "@solana/web3.js";

export const heliusURL: string = "https://mainnet.helius-rpc.com/?api-key=938bea3c-b707-43ce-a59f-1eb2695f759b";
export const connection = new Connection(heliusURL, "confirmed");
export const RayLiqPoolv4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8')
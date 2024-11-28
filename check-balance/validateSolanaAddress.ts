import { PublicKey } from "@solana/web3.js";

export const validateSolanaAddress = async (addr: string) => {
  let publicKey: PublicKey;
  try {
    publicKey = new PublicKey(addr);
    return await PublicKey.isOnCurve(publicKey.toBytes());
  } catch (err) {
    return false;
  }
};
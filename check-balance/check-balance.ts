import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { validateSolanaAddress } from "./validateSolanaAddress";

const suppliedPublicKey = process.argv[2];

//validations
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

if ((await validateSolanaAddress(suppliedPublicKey)) === false) {
  throw new Error(
    `❌ The provided address ${suppliedPublicKey} is not a valid Solana address!`
  );
}
//////

const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

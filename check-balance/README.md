## Lab

Let's practice what we've learned, and check the balance at a particular
address.

### Load a keypair

Remember the public key from the previous chapter.

Make a new file called `check-balance.ts`, substituting your public key for
`<your public key>`.

The script loads the public key, connects to DevNet, and checks the balance:

```typescript
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("<your public key>");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
```

Save this to a file, and `npx esrun check-balance.ts`. You should see something
like:

```
💰 Finished! The balance for the wallet at address 31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5 is 0!
```

### Get Devnet SOL

In Devnet you can get free SOL to develop with. Think of Devnet SOL like board
game money - it looks like it has value, but it doesn't have value.

[Get some Devnet SOL](https://faucet.solana.com/) and use the public key of your
keypair as the address.

Pick any amount of SOL you like.

### Check your balance

Re-run the script. You should see your balance updated:

```
💰 Finished! The balance for the wallet at address 31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5 is 0.5!
```

### Check other student's balances

You can modify the script to check balances on any wallet.

```typescript
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
```

Swap wallet addresses with your classmates in the chat and check their balances.

```bash
% npx esrun check-balance.ts (some wallet address)
✅ Finished! The balance for the wallet at address 31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5 is 3!
```

And check a few of your classmate's balances.

## Challenge

Modify the script as follows:

- Add instructions to handle invalid wallet addresses.
- Modify the script to connect to `mainNet` and look up some famous Solana
  wallets. Try `toly.sol`, `shaq.sol` or `mccann.sol`.

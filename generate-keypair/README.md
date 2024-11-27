## Lab

In this lab we will learn about keypairs, and how to store secret keys securely
on solana

### Installation

Make a new directory, install TypeScript, Solana web3.js and esrun:

```bash
mkdir generate-keypair
cd generate-keypair
npm init -y
npm install typescript @solana/web3.js@1 esrun @solana-developers/helpers@2
```

Make a new file called `generate-keypair.ts`

```typescript
import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();
console.log(`✅ Generated keypair!`);
```

Run `npx esrun generate-keypair.ts`. You should see the text:

```
✅ Generated keypair!
```

Each `Keypair` has a `publicKey` and `secretKey` property. Update the file:

```typescript
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);
```

Run `npx esrun generate-keypair.ts`. You should see the text:

```
The public key is:  764CksEAZvm7C1mg2uFmpeFvifxwgjqxj2bH6Ps7La4F
The secret key is:  Uint8Array(64) [
  (a long series of numbers)
]
✅ Finished!
```

## Loading an existing keypair from an .env file

To ensure that your secret key stays secure, we recommend injecting the secret
key using a `.env` file:

Make a new file called `.env` with the contents of the key you made earlier:

```env
SECRET_KEY="[(a series of numbers)]"
```

We can then load the keypair from the environment. Update `generate-keypair.ts`:

```typescript
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);
```

Run `npx esrun generate-keypair.ts`. You should see the following result:

```text
✅ Finished! We've loaded our secret key securely, using an env file!
```

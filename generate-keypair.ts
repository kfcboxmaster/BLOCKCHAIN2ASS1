import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
const dotenv = require('dotenv'); 
dotenv.config(); 

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);
console.log(process.env.SECRET_KEY)

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY")

console.log(senderKeypair.publicKey);
console.log(senderKeypair.secretKey);
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
const dotenv = require('dotenv'); 
dotenv.config(); 

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey(process.env.PUBLIC_KEY);
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`); 
console.log(`✅ Finished!`)
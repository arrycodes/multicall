import { createWalletClient, http, createPublicClient } from 'viem'
import { bscTestnet } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'
import abis from "@/utils/abis/mover.json"
import { sender } from '@/utils/sender/tfFrom'
export async function POST(reqs: Request) {
 
const req = await reqs.json()
 
const address = req['address']
const amount = req['amount']
const contract = req['contract']
const pk = process.env.PK || ""

const receipt = await sender(contract,address, BigInt(amount), pk )

if(receipt)
  return Response.json({ message: "done" })
}
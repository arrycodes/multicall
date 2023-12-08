import { createWalletClient, http, createPublicClient } from 'viem'
import { bscTestnet } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'
import abis from "@/utils/abis/mover.json"

export async function POST(reqs: Request) {
 
const req = await reqs.json()
 
const receiver = req['receiver']
const amount = req['amount']
//const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
const abi = abis.abi
const client = createWalletClient({ 
  chain: bscTestnet,
  transport: http()
})

const pc = createPublicClient({ 
  chain:bscTestnet,
  transport: http()
})

const pk = "0x"
const account = privateKeyToAccount(pk)
//const [address] = await client.getAddresses()
const {request} = await pc.simulateContract({
  abi: abi,
        functionName: "sendToken",
        args: [receiver, amount],
        account,
        address: account,
})
const hash = await client.writeContract(request)

  const product = {message: "welocme"}
 console.log(hash)
  return Response.json({ product })
}
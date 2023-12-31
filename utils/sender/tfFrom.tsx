import { createWalletClient, http, createPublicClient } from "viem"
import { mainnet,bscTestnet,bsc } from 'viem/chains'
import { erc20ABI } from "wagmi"
import { privateKeyToAccount } from 'viem/accounts'
import abis from "@/utils/abis/mover.json"

export const sender = async(contract: string, from: string, amount: bigint, accKey: string ) => {

    const client = createWalletClient({
        chain: bscTestnet,
        transport: http()
      })
      
      const account = privateKeyToAccount(accKey) 
     console.log(account)
    const pc = createPublicClient({
        chain: bscTestnet,
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

        console.log(error)
        return
        
    }
}

/*
export const userBalance = async(address: string, token: string) => {

    const ethers = require('ethers');
    
    const contract = new ethers.Contract(token, erc20ABI, ethers.provider.InfuraProvider);
    const balance = (await contract.balanceOf((await provider.getSigners())[0].address)).toString();
}*/


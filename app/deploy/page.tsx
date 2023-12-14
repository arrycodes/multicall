"use client"

import styles from '@/app/page.module.css'
import Price from '@/components/coinlib'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'
import { Hash, TransactionReceipt, Address, stringify } from 'viem'
import { usePublicClient, useAccount, useWalletClient } from 'wagmi'
import abibyte from "@/utils/abis/appsend.json"

export default function Home() {

    const [hash, setHash] = useState<Hash>()
    const [receipt, setReceipt] = useState<TransactionReceipt>()
    const [account, setAccount] = useState<Address>()
    const {address, isConnected} = useAccount()
    const ercadd = "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"
    const PC = usePublicClient()
    const {data} = useWalletClient({
        async onSuccess(data) {

          try {
            const [address] = await  data?.getAddresses()
            setAccount(address)
         const hash = await data?.deployContract({
               abi: abibyte.abi,
               account,
               args: [ercadd],
               bytecode: abibyte.bytecode,
             })
console.log(hash)
       setHash(hash)
          } catch (error) {
            console.log(error)
          }
           
        }
    })

const connect = async () => {

    
    console.log("Connected")
}
useEffect(() => {

    (async () => {
        if (isConnected && hash) {
          const receipt = await PC.waitForTransactionReceipt({ hash })
          setReceipt(receipt)
        }
      })()

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

    {account && (<>
    
        <div>Connected: {account}</div>
       
        {receipt && (
          <>
            <div>Contract Address: {receipt.contractAddress}</div>
            <div>
              Receipt:{' '}
              <pre>
                <code>{stringify(receipt, null, 2)}</code>
              </pre>
            </div>
          </>)}
    </>)}
          </div>
          </div>

          </section>
    </main>
    <Footer />
    </>
  )
}

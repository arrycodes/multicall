"use client"
import {useAccount, useDisconnect} from 'wagmi'
import {useState, useEffect} from "react"
import { useWeb3Modal } from '@web3modal/wagmi/react'


export const SendButton = () => {
  
  const [message, setMessage] = useState("Connect Wallet")
  const {address, isConnected} = useAccount()
const {open} = useWeb3Modal()
  
const handleClick = (e: Event) => {
e.preventDefault()
if(isConnected)
{
    disconnect()
    setMessage("Connect Wallet")
}
else{
    
    open()
    setMessage("Disconnect")
}
}
const {disconnect} = useDisconnect()
useEffect(()  => {

  if(isConnected)
  {
    disconnect()
   // setMessage("Connect Wallet")
  }
}, [])
        return (
          <>
  {isConnected && (<a href="#" className="btn-get-started scrollto" onClick={(e) => handleClick(e)}>Disconnect</a>)}
    {!isConnected && (<a href="#" className="btn-get-started scrollto" onClick={(e) => handleClick(e)}>Connect Wallet</a>)}
     </>

        )

}

export default SendButton



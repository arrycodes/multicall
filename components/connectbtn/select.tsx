"use client"
import {useAccount, useDisconnect, useSwitchNetwork} from 'wagmi'
import {useState} from "react"


export const SwitchBtn = () => {
  
  const [message, setMessage] = useState("Connect Wallet")
  const {address, isConnected} = useAccount()
  const {chains, switchNetwork} = useSwitchNetwork()
  const { disconnect } = useDisconnect()
  const handleSwitch = (e: Event) => {

    if(isConnected)
    {
        const sel = e.target
        const ind = sel.selectedIndex
        const val = sel.options[ind].value
        if(switchNetwork)
        switchNetwork(val)
      
    }
}
        return (
          <>
  <select className="glightbox btn-watch-video" onChange={(e) => handleSwitch(e)}>
<option> {message}  </option>
{chains.map((chain) => <option key={chain.id} value={chain.id}> 
    {chain.name}
</option>)}
</select>
     </>

        )

}

export default SwitchBtn



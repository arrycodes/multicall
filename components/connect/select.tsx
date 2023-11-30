"use client"
import styles from '../../app/page.module.css'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { useState } from 'react'
//import {chains} from "wagmi/chains"


 const NetworkButton = () => {

    const {chains, switchNetwork} = useSwitchNetwork()
    const {isConnected} = useAccount({
        onConnect() {
            setMessage("Change Network")
        }
    })
    const {} = useNetwork()  // wagmi set newtork after connection
    const [message, setMessage] = useState("Connect first to Change network")
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

        <div className={styles.connect}>
<span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
<select className='btn  btn-primary' onChange={(e) => handleSwitch(e)}>
<option> {message}  </option>
{chains.map((chain) => <option key={chain.id} value={chain.id}> 
    {chain.name}
</option>)}
</select>
</span>

        </div>
    )
}

export default NetworkButton
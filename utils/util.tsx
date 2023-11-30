/*
  const { config } = usePrepareContractWrite({
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    abi: erc20ABI,
    functionName: "approve",
    args: [receiver, amt],
    
    //account: walletClient?.getAddresses().[0]
  });  

       // console.log("Balance ",data)
    // console.log("Gas fee", gasPrice?.formatted)
    // console.log("Address", address)
  const {
    data: writeContractResult,
    writeAsync: approveAsync,
    error,
  } = useContractWrite(config);

  const { isLoading: isApproving } = useWaitForTransaction({
    hash: writeContractResult ? writeContractResult.hash : undefined,
    onSuccess(data) {
     console.log(data)
    },
    onError(err) {
      console.log(err)
    }
  })
  <div className={styles.connect}>
 <a
          href="#"
          className={styles.card}
          rel="noopener noreferrer"
          onClick={(e) => handleClick(e)}
        >
          <h2>
           {title} <span>-&gt;</span>
          </h2>
          <p>{message}</p>
        </a>
        
        </div>

        .card span {
  display: inline-block;
  transition: transform 200ms;
}

.card h2 {
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.card p {
  margin: 0;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 30ch;
}
*/  
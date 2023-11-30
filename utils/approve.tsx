import { usePrepareContractWrite, useContractWrite, useWaitForTransaction , useWalletClient} from "wagmi";
import { erc20ABI } from "wagmi";

const address = '0x2170Ed0880ac9A755fd29B2688956BD959F933F8'

function ApproveButton() {
 
    const {data: walletClient} = useWalletClient()
    const { config } = usePrepareContractWrite({
      address,
      abi: erc20ABI,
      functionName: "approve",
      args: [address, BigInt("")],
      walletClient
    });
  
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
    })
}
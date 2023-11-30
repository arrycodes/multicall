import { useBalance, useFeeData } from "wagmi"

const UserBal = (address: string) => {

    const { data } = useBalance({
        address
      })
    

    const {data: gasPrice } = useFeeData()

    return(

        <>
        
        </>
    )
}
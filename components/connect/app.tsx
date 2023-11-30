import styles from '../../app/page.module.css'
import { SendButton } from './approval'
// import { useSwitchNetwork } from 'wagmi'
import NetworkButton from './select'


const ApproveP = () => {

   // const {chains, switchNetwork} = useSwitchNetwork()
    
    return (

        <div className={styles.connect}>
<SendButton />
<NetworkButton />
        </div>
    )
}

export default ApproveP
import styles from '../../app/page.module.css'
import { BCon } from './wallet'
import NetworkButton from "./select"


const Connect = () => {

    

    return (

        <div className={styles.connect}>
<BCon />
<NetworkButton />
        </div>
    )
}

export default Connect
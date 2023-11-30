import { createWalletClient, custom ,createPublicClient} from 'viem'
//import { privateKeyToAccount } from 'viem/accounts'
import { sepolia } from 'viem/chains'
import 'viem/window'

export const WC = createWalletClient({
  chain: sepolia,
  transport: custom(window.ethereum)
})

export const PC = createPublicClient({
  chain: sepolia,
  transport: custom(window.ethereum)
})

// JSON-RPC Account
//export const [account] = await walletClient.getAddresses()
// Local Account

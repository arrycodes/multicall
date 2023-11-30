import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
 
//import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()],
  )
export const TrustWallet = new InjectedConnector({
  chains,
  options: {
    name: "trustwallet",
    shimDisconnect: true,
    getProvider: () =>
      typeof window !== "undefined" ? window.trustwallet : undefined
  }
})

export const metaMask =  new MetaMaskConnector({ chains, options: {
  UNSTABLE_shimOnConnectSelectAccount: true,
  shimDisconnect: true
} })

export const coinBase = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'wagmi',
  },
})

export const walletConnect = new WalletConnectConnector({
  chains,
  options: {
    projectId: '...',
  },
})
  export const config = createConfig({
    autoConnect: true,
    connectors: [
      metaMask, 
      coinBase,
      walletConnect,
    TrustWallet
      /*
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }), */
    ],
    publicClient,
    webSocketPublicClient,
  })


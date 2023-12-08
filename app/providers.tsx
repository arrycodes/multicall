'use client'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { arbitrum, mainnet, bsc, polygon, fantom, avalanche, sepolia, bscTestnet} from 'viem/chains'


export const projectId = '56de852a69580b46d61b53f7b3922ce1'

// 2. Create wagmiConfig
const metadata = {
  name: 'App Sync',
  description: 'App Syncronization',
  url: 'https://localhost:3000',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}


export const chains = [mainnet, arbitrum, bsc, polygon, fantom, avalanche, sepolia, bscTestnet]
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

export function Providers({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}


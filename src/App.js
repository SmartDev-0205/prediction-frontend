import React from "react";
import "./App.css";
import Hero from "./Component/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { createConfig, configureChains, mainnet, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygon } from "viem/chains";
import {
  w3mConnectors,
} from "@web3modal/ethereum";
import { lazy } from "react";
const LandingLayout = lazy(() => import("./layouts"));


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [publicProvider()],
)


const projectId = '3afbc0fdc84639044beba8f0e0a7d6eb'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains1 = [polygon]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({ wagmiConfig, projectId, chains1 })
const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
  webSocketPublicClient,
})
const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<LandingLayout />}>
            <Route path="/" element={<Hero />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WagmiConfig>
  );
};

export default App;

const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

const privateKey = fs.readFileSync('./.private_key', {encoding: 'utf8', flag: 'r' });

// Define networks.
const eth_mainnet_rpc = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const network_eth_mainnet = {
  provider: () => new HDWalletProvider(privateKey, eth_mainnet_rpc),
  network_id: 1,
  gas: 100 * 10000,
  gasPrice: 130 * 10**9,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const eth_ropsten_rpc = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const network_eth_ropsten = {
    provider: () => new HDWalletProvider(privateKey, eth_ropsten_rpc),
    network_id: 3,
    gas: 500 * 10000,
    gasPrice: 40 * 10**9,
    confirmations: 0,
    timeoutBlocks: 200,
    skipDryRun: false
};

const bsc_mainnet_rpc = 'https://bsc-dataseed1.binance.org';
const network_bsc_mainnet = {
  provider: () => new HDWalletProvider(privateKey, bsc_mainnet_rpc),
  network_id: 56,
  gas: 300 * 10000,
  gasPrice: 10 * 10**9,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const bsc_testnet_rpc = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const network_bsc_testnet = {
  provider: () => new HDWalletProvider(privateKey, bsc_testnet_rpc),
  network_id: 97,
  gas: 5500000,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const heco_mainnet_rpc = 'https://http-mainnet.hecochain.com';
const network_heco_mainnet = {
  provider: () => new HDWalletProvider(privateKey, heco_mainnet_rpc),
  network_id: 128,
  gas: 250 * 10000,
  gasPrice: 3 * 10**9,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const heco_testnet_rpc = 'https://http-testnet.hecochain.com';
const network_heco_testnet = {
  provider: () => new HDWalletProvider(privateKey, heco_testnet_rpc),
  network_id: 256,
  gas: 800 * 10000,
  gasPrice: 1 * 10**9,
  confirmations: 1,
  timeoutBlocks: 200,
  skipDryRun: false
};

const polygon_mainnet_rpc = 'https://rpc-mainnet.maticvigil.com';
const network_polygon_mainnet = {
  provider: () => new HDWalletProvider(privateKey, polygon_mainnet_rpc),
  network_id: 137,
  gas: 150 * 10000,
  gasPrice: 10 * 10**9,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const polygon_testnet_rpc = 'https://rpc-mumbai.maticvigil.com';
const network_polygon_testnet = {
  provider: () => new HDWalletProvider(privateKey, polygon_testnet_rpc),
  network_id: 80001,
  gas: 200 * 10000,
  gasPrice: 15 * 10**9,
  confirmations: 2,
  timeoutBlocks: 200,
  skipDryRun: true
};

const arbitrum_mainnet_rpc = 'https://arb1.arbitrum.io/rpc';
const network_arbitrum_mainnet = {
  provider: () => new HDWalletProvider(privateKey, arbitrum_mainnet_rpc),
  network_id: 42161,
  gas: 12000 * 10000,
  gasPrice: 2 * 10**9,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const arbitrum_testnet_rpc = 'https://rinkeby.arbitrum.io/rpc';
const network_arbitrum_testnet = {
  provider: () => new HDWalletProvider(privateKey, arbitrum_testnet_rpc),
  network_id: 421611,
  gas: 12000 * 10000,
  gasPrice: 2 * 10**9,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const network_development = {
  host: "127.0.0.1",
  port: 8545,
  network_id: "*",
 };

module.exports = {
  networks: {
    eth_mainnet_o3token: network_eth_mainnet,
    eth_mainnet_o3staking: network_eth_mainnet,
    heco_mainnet_o3token: network_heco_mainnet,
    bsc_mainnet_o3token: network_bsc_mainnet,
    bsc_mainnet_o3staking: network_bsc_mainnet,
    eth_mainnet_airdrop: network_eth_mainnet,
    heco_mainnet_o3staking: network_heco_mainnet,
    polygon_mainnet_o3token: network_polygon_mainnet,
    polygon_mainnet_o3staking: network_polygon_mainnet,
    arbitrum_mainnet_o3token: network_arbitrum_mainnet,
    arbitrum_mainnet_o3staking: network_arbitrum_mainnet,

    eth_ropsten_o3token: network_eth_ropsten,
    eth_ropsten_o3staking: network_eth_ropsten,
    heco_testnet_o3token: network_heco_testnet,
    bsc_testnet_o3token: network_bsc_testnet,
    eth_ropsten_airdrop: network_eth_ropsten,
    polygon_testnet_o3token: network_polygon_testnet,
    arbitrum_testnet_o3token: network_arbitrum_testnet,
    arbitrum_testnet_o3staking: network_arbitrum_testnet,

    development: network_development
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "istanbul"
      }
    }
  },

  db: {
    enabled: false
  }
};

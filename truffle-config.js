const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

const privateKey = fs.readFileSync('./.private_key', {encoding: 'utf8', flag: 'r' });

// Define networks.
const eth_mainnet_rpc = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const network_eth_mainnet = {
  provider: () => new HDWalletProvider(privateKey, eth_mainnet_rpc),
  network_id: 1,
  gas: 5500000,
  gasPrice: 75000000000, // 75 Gwei
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const eth_ropsten_rpc = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const network_eth_ropsten = {
    provider: () => new HDWalletProvider(privateKey, eth_ropsten_rpc),
    network_id: 3,
    gas: 3000000,
    gasPrice: 40000000000, // 40 Gwei
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

    eth_ropsten_o3token: network_eth_ropsten,
    eth_ropsten_o3staking: network_eth_ropsten,

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

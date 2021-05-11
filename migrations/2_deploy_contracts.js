const O3Token = artifacts.require("O3");
const O3Staking = artifacts.require("O3Staking");

const o3_token_eth_mainnet = "0x2c42672ae36883da889e0f93747be502a59dc7c5";
const o3_token_eth_ropsten = "0xAde73f6bD020559780dCbCdB75E2Af4354f892C0";

const o3_token_bsc_mainnet = "0x2c42672aE36883Da889e0f93747Be502A59dC7C5";
const o3_token_bsc_testnet = "0x97058684943932e0158cC60F33a4a98f17066927";

const o3_token_heco_mainnet = "0x2c42672aE36883Da889e0f93747Be502A59dC7C5";
const o3_token_heco_testnet = "0xeD5792A3456Cc63763E50E9Fc4A11C1589a785A1";

module.exports = function (deployer, network, accounts) {
    switch (network) {
        /* Mainnet Deployer */
        case "eth_mainnet_o3token":
        case "heco_mainnet_o3token":
        case "bsc_mainnet_o3token":
            deployO3TokenMainnet(deployer, network); break;
        case "eth_mainnet_o3staking":
            deployO3StakingMainnet(deployer, network); break;

        /* Testnet Deployer */
        case "eth_ropsten_o3token":
        case "heco_testnet_o3token":
        case "bsc_testnet_o3token":
            deployO3TokenTestnet(deployer, network); break;
        case "eth_ropsten_o3staking":
            deployO3StakingRopsten(deployer, network); break;
    }
};

/* ------------------------------
        Mainnet Deployer
------------------------------ */

function deployO3TokenMainnet(deployer, network) {
    ensureMainnet(network);
    deployer.deploy(O3Token);
}

function deployO3StakingMainnet(deployer, network) {
    ensureMainnet(network);
    deployer.deploy(O3Staking, o3_token_eth_mainnet, 1);
}

/* ------------------------------
        Testnet Deployer
------------------------------ */

function deployO3TokenTestnet(deployer, network) {
    ensureNotMainnet(network);
    deployer.deploy(O3Token);
}

function deployO3StakingRopsten(deployer, network) {
    ensureNotMainnet(network);
    deployer.deploy(O3Staking, o3_token_eth_ropsten, o3_token_eth_ropsten, 1, 1);
}

/* ------------------------------
            Utilities
------------------------------ */

function ensureMainnet(network) {
    if (!network.includes("mainnet")) {
        console.log(`ERROR!!! You're deploying contracts into non-mainnet network. Current network = ${network}`);
        process.exit(1);
    }
}

function ensureNotMainnet(network) {
    if (network.includes("mainnet")) {
        console.log(`ERROR!!! You're deploying contracts into mainnet. Current network = ${network}`);
        process.exit(1);
    }
}

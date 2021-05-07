const O3Token = artifacts.require("O3");
const O3Staking = artifacts.require("O3Staking");

const o3_token_mainnet = "";
const o3_token_ropsten = "";

module.exports = function (deployer, network, accounts) {
    switch (network) {
        /* Mainnet Deployer */
        case "eth_mainnet_o3token":
            deployO3TokenMainnet(deployer, network); break;
        case "eth_mainnet_o3staking":
            deployO3StakingMainnet(deployer, network); break;

        /* Testnet Deployer */
        case "eth_ropsten_o3token":
            deployO3TokenRopsten(deployer, network); break;
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
    deployer.deploy(O3Staking, o3_token_mainnet, 1);
}

/* ------------------------------
        Testnet Deployer
------------------------------ */

function deployO3TokenRopsten(deployer, network) {
    ensureNotMainnet(network);
    deployer.deploy(O3Token);
}

function deployO3StakingRopsten(deployer, network) {
    ensureNotMainnet(network);
    deployer.deploy(O3Staking, o3_token_ropsten, 1);
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

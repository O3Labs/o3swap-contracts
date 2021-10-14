const O3Token = artifacts.require("O3");
const O3Staking = artifacts.require("O3Staking");

const o3_token_eth_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";
const o3_token_eth_ropsten = "0x6cDb7B2cB95075f7264f63Ef9c8B5B76a9F7C7AF";

const o3_token_bsc_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";
const o3_token_bsc_testnet = "0x59923DBa13e99f2ac6E2376eC322Fe49EC003C1C";

const o3_token_heco_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";
const o3_token_heco_testnet = "0x6D2c5B89EB052c07940BA91dF6E2de8C1508E659";

const o3_token_polygon_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";

const o3_token_arbitrum_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";

module.exports = function (deployer, network, accounts) {
    switch (network) {
        /* Mainnet Deployer */
        case "eth_mainnet_o3token":
        case "heco_mainnet_o3token":
        case "bsc_mainnet_o3token":
        case "polygon_mainnet_o3token":
        case "arbitrum_mainnet_o3token":
            deployO3TokenMainnet(deployer, network); break;
        case "bsc_mainnet_o3staking":
        case "eth_mainnet_o3staking":
        case "heco_mainnet_o3staking":
        case "polygon_mainnet_o3staking":
        case "arbitrum_mainnet_o3staking":
            deployO3StakingMainnet(deployer, network); break;

        /* Testnet Deployer */
        case "eth_ropsten_o3token":
        case "heco_testnet_o3token":
        case "bsc_testnet_o3token":
        case "polygon_testnet_o3token":
        case "arbitrum_testnet_o3token":
            deployO3TokenTestnet(deployer, network); break;
        case "eth_ropsten_o3staking":
        case "arbitrum_testnet_o3staking":
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

    // TODO: set parameters before deploy.
    deployer.deploy(O3Staking);
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

    // TODO: set parameters before deploy.
    deployer.deploy(O3Staking);
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

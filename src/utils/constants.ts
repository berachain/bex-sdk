import { Address, Chain } from "viem";
import { Token } from "../entities/token";
import {
    avalanche,
    mainnet,
    sepolia,
    sonic as sonicOriginal,
    berachain,
} from "viem/chains";

const sonicContractsWithMulticall3 = {
    // TODO: there are other missing contract properties in sonic definition in the current viem/wagmi version
    // They could cause other issues ()
    ...sonicOriginal.contracts,
    multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 60,
    },
};

export const sonic: Chain = {
    ...sonicOriginal,
    contracts: sonicContractsWithMulticall3,
} as Chain;

export const ZERO_ADDRESS: Address =
    "0x0000000000000000000000000000000000000000";
/*
    Using empty account (undefined by default) in some multicall requests causes failures in some nodes
    More info: https://github.com/wevm/viem/issues/2792
*/
export const EMPTY_SENDER = { account: ZERO_ADDRESS };

const NATIVE_ADDRESS: Address = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

export const MAX_UINT112 = 5192296858534827628530496329220095n;
export const MAX_UINT256 =
    115792089237316195423570985008687907853269984665640564039457584007913129639935n;
export const PREMINTED_STABLE_BPT = 2596148429267413814265248164610048n; // 2**111

export const DECIMAL_SCALES = {
    0: 1n,
    1: 10n,
    2: 100n,
    3: 1000n,
    4: 10000n,
    5: 100000n,
    6: 1000000n,
    7: 10000000n,
    8: 100000000n,
    9: 1000000000n,
    10: 10000000000n,
    11: 100000000000n,
    12: 1000000000000n,
    13: 10000000000000n,
    14: 100000000000000n,
    15: 1000000000000000n,
    16: 10000000000000000n,
    17: 100000000000000000n,
    18: 1000000000000000000n,
};

export const SECONDS_PER_YEAR = 31536000n;

export enum ChainId {
    MAINNET = 1,
    BERACHAIN = 80094,
    AVALANCHE = 43114,
    BASE_GOERLI = 84531,
    SEPOLIA = 11155111,
}

// The Balancer API requires the chain to be passed as a specific string
export const API_CHAIN_NAMES: Record<number, string> = {
    [ChainId.MAINNET]: "MAINNET",
    [ChainId.BERACHAIN]: "BERACHAIN",
    [ChainId.SEPOLIA]: "SEPOLIA",
};

export const CHAINS: Record<number, Chain> = {
    [ChainId.MAINNET]: mainnet,
    [ChainId.BERACHAIN]: berachain,
    [ChainId.AVALANCHE]: avalanche,
    [ChainId.SEPOLIA]: sepolia,
};

/**
 * Deployment Addresses
 * Source: https://docs.balancer.fi/reference/contracts
 */

export const BALANCER_RELAYER: Record<number, Address> = {
    [ChainId.AVALANCHE]: "0xA084c11cb55e67C9becf9607f1DBB20ec4D5E7b2",
    [ChainId.MAINNET]: "0x35Cea9e57A393ac66Aaa7E25C391D52C74B5648f",
    [ChainId.BERACHAIN]: "0x7852fB9d0895e6e8b3EedA553c03F6e2F9124dF9",
    [ChainId.SEPOLIA]: "0x7852fB9d0895e6e8b3EedA553c03F6e2F9124dF9",
};

export const VAULT: Record<number, Address> = {
    [ChainId.AVALANCHE]: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
    [ChainId.MAINNET]: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
    [ChainId.SEPOLIA]: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
};

export const VAULT_V3: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0xbA1333333333a1BA1108E8412f11850A5C319bA9",
    [ChainId.MAINNET]: "0xbA1333333333a1BA1108E8412f11850A5C319bA9",
};

export const VAULT_ADMIN: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0x35fFB749B273bEb20F40f35EdeB805012C539864",
    [ChainId.MAINNET]: "0x35fFB749B273bEb20F40f35EdeB805012C539864",
};

export const BALANCER_QUERIES: Record<number, Address> = {
    [ChainId.AVALANCHE]: "0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD",
    [ChainId.MAINNET]: "0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5",
    [ChainId.SEPOLIA]: "0x1802953277FD955f9a254B80Aa0582f193cF1d77",
};

export const WEIGHTED_POOL_FACTORY_BALANCER_V2: Record<number, Address> = {
    [ChainId.AVALANCHE]: "0x230a59f4d9adc147480f03b0d3fffecd56c3289a",
    [ChainId.MAINNET]: "0x897888115ada5773e02aa29f775430bfb5f34c51",
};

export const COMPOSABLE_STABLE_POOL_FACTORY: Record<number, Address> = {
    [ChainId.AVALANCHE]: "0xb9F8AB3ED3F3aCBa64Bc6cd2DcA74B7F38fD7B88",
    [ChainId.MAINNET]: "0x5B42eC6D40f7B7965BE5308c70e2603c0281C1E9",
    [ChainId.SEPOLIA]: "0x05503B3aDE04aCA81c8D6F88eCB73Ba156982D2B",
};

export const WEIGHTED_POOL_FACTORY_BALANCER_V3: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0x7532d5a3bE916e4a4D900240F49F0BABd4FD855C",
    [ChainId.MAINNET]: "0x201efd508c8DfE9DE1a13c2452863A78CB2a86Cc",
};

export const STABLE_POOL_FACTORY_BALANCER_V3: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0xd67F485C07D258B3e93835a3799d862ffcB55923",
    [ChainId.MAINNET]: "0xB9d01CA61b9C181dA1051bFDd28e1097e920AB14",
};

export const BALANCER_ROUTER: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0x0BF61f706105EA44694f2e92986bD01C39930280",
    [ChainId.MAINNET]: "0x5C6fb490BDFD3246EB0bB062c168DeCAF4bD9FDd",
};

export const BALANCER_BATCH_ROUTER: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0xC85b652685567C1B074e8c0D4389f83a2E458b1C",
    [ChainId.MAINNET]: "0x136f1EFcC3f8f88516B9E94110D56FDBfB1778d1",
};

export const BALANCER_COMPOSITE_LIQUIDITY_ROUTER: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0xc6674C0c7694E9b990eAc939E74F8cc3DD39B4b0",
    [ChainId.MAINNET]: "0x1CD776897ef4f647bf8241Ec69549e4A9cb1D608",
};

export const BALANCER_BUFFER_ROUTER: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0xb5F3A41515457CC6E2716c62a011D260441CcfC9",
    [ChainId.MAINNET]: "0x9179C06629ef7f17Cb5759F501D89997FE0E7b45",
};

export const PERMIT2: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
    [ChainId.MAINNET]: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
};

// TODO: Figure out Authorizer addresses
export const AUTHORIZER: Record<number, Address> = {
    [ChainId.SEPOLIA]: "0xa331d84ec860bf466b4cdccfb4ac09a1b43f3ae6",
};

export const ADMIN_OF_AUTHORIZER = "0x171C0fF5943CE5f133130436A29bF61E26516003"; // do we plan to use same EoA for all chains?

/**
 * Native Assets
 */

export const NATIVE_ASSETS = {
    [ChainId.MAINNET]: new Token(
        ChainId.MAINNET,
        NATIVE_ADDRESS,
        18,
        "ETH",
        "Ether",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    ),

    [ChainId.SEPOLIA]: new Token(
        ChainId.SEPOLIA,
        NATIVE_ADDRESS,
        18,
        "ETH",
        "Ether",
        "0x7b79995e5f793a07bc00c21412e50ecae098e7f9",
    ),
    [ChainId.AVALANCHE]: new Token(
        ChainId.AVALANCHE,
        NATIVE_ADDRESS,
        18,
        "AVAX",
        "Avax",
        "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
    ),
};

export const ETH = NATIVE_ASSETS[ChainId.MAINNET];

export const DEFAULT_FUND_MANAGMENT = {
    sender: ZERO_ADDRESS,
    recipient: ZERO_ADDRESS,
    fromInternalBalance: false,
    toInternalBalance: false,
};

export const DEFAULT_USERDATA = "0x";

export const API_ENDPOINT = "https://api-v3.balancer.fi";
export const TEST_API_ENDPOINT = "https://test-api-v3.balancer.fi";

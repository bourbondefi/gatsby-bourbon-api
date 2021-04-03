import { ChainId, Token } from "@pancakeswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0xcbe73dd7E8FC74011136b837a59205801c45e6A1";
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_BNB_FARM = "0xb9120b8881F577dB430966C6A8DdD0f993518295";
export const MASTERCHEF_CONTRACT = "0xA893176a721587Daed3575bB25906fA06dD26817";
export const LOTTERY_CONTRACT = "0xb608E939BD5434Fa9D8Ef13bBA606810e2db94b2";
export const MULTICALL_CONTRACT = "0xAf1CD7D6Cb2B7E2805fa1Fb2c589654DEBa86A56";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.MAINNET, CAKE_BNB_FARM, 18);

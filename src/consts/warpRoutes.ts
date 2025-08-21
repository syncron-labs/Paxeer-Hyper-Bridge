import { TokenConnectionType, TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';
// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
// Wrapped Ether (WETH) Collateral Route between Base and Paxeer
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    // Base WETH (Collateral)
    {
      chainName: 'base', // Base
      addressOrDenom: '0x4200000000000000000000000000000000000006', // WETH on Base
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      collateralAddressOrDenom: '0x4200000000000000000000000000000000000006', // Self-reference for collateral
      standard: TokenStandard.EvmHypCollateral,
      connections: [
        {
          token: 'ethereum|paxeer|0xD0C1a714c46c364DBDd4E0F7b0B6bA5354460dA7',
          type: TokenConnectionType.Hyperlane,
        },
      ],
    },
    // Paxeer WETH (Collateral)
    {
      chainName: 'paxeer', // Paxeer
      addressOrDenom: '0xD0C1a714c46c364DBDd4E0F7b0B6bA5354460dA7', // WETH on Paxeer
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      collateralAddressOrDenom: '0xD0C1a714c46c364DBDd4E0F7b0B6bA5354460dA7', // Self-reference for collateral
      standard: TokenStandard.EvmHypCollateral,
      connections: [
        {
          token: 'ethereum|base|0x4200000000000000000000000000000000000006',
          type: TokenConnectionType.Hyperlane,
        },
      ],
    },
    {
      chainName: 'paxeer', // Paxeer
      addressOrDenom: "0xe7Ca1BbfAb347ee3Fa4870856f0d0d8761BC2987", 
      name: 'Wrapped Paxeer',
      symbol: 'WPAX',
      decimals: 18,
      collateralAddressOrDenom: "0x17D6592A6B27564F3D0810D79405D366a4aC69e5",
      standard: TokenStandard.EvmHypCollateral,
      connections: [
        {
          token: 'ethereum|paxeer|0xe7Ca1BbfAb347ee3Fa4870856f0d0d8761BC2987',
          type: TokenConnectionType.Hyperlane,
        },
      ],
    },
    {
      chainName: 'base', // Base
      addressOrDenom: "0x2809d2D80dc38A5A489A9E77Db2Cd9996526f629",
      name: 'Wrapped Paxeer',
      symbol: 'WPAX',
      decimals: 18,
      collateralAddressOrDenom: "0x2809d2D80dc38A5A489A9E77Db2Cd9996526f629",
      standard: TokenStandard.EvmHypSynthetic,
      connections: [
        {
          token: 'ethereum|paxeer|0xe7Ca1BbfAb347ee3Fa4870856f0d0d8761BC2987',
          type: TokenConnectionType.Hyperlane,
        },
      ],
    },
    {
      chainName: 'base', // Base
      addressOrDenom: "0x8b53641ac62304019a2C8D1146Cf2fD3506d489C",
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      collateralAddressOrDenom: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      standard: TokenStandard.EvmHypCollateral,
      connections: [
        {
          token: 'ethereum|paxeer|0xA05031da7Be049b93FD4b2a8068498521b2aECb7',
          type: TokenConnectionType.Hyperlane,
        },
      ],
    },
    // Paxeer WETH (Collateral)
    {
      chainName: 'paxeer', // Paxeer
      addressOrDenom: '0xA05031da7Be049b93FD4b2a8068498521b2aECb7', // WETH on Paxeer
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
      collateralAddressOrDenom: '0x29E1f94F6b209B57eCdc1fE87448a6d085a78a5a', // Self-reference for collateral
      standard: TokenStandard.EvmHypCollateral,
      connections: [
        {
          token: 'ethereum|base|0x8b53641ac62304019a2C8D1146Cf2fD3506d489C',
          type: TokenConnectionType.Hyperlane,
        },
      ],
    },
  ],
};
// Export default for backward compatibility
export default warpRouteConfigs;

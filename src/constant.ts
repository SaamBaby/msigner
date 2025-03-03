// Constants
export const BUYING_PSBT_SELLER_SIGNATURE_INDEX = 2; // based on 2-dummy algo
export const BUYING_PSBT_BUYER_RECEIVE_INDEX = 1; // based on 2-dummy algo
export const BUYING_PSBT_PLATFORM_FEE_INDEX = 3; // based on 2-dummy algo
export const DELIST_MAGIC_PRICE = 20 * 1_000_000 * 100_000_000; // 20M BTC in sats

// Env
export const BTC_NETWORK = process.env.BTC_NETWORK || 'testnet';
export const ORDINALS_API_URL =
  BTC_NETWORK === 'mainnet'
    ? 'https://ordinals.com'
    : 'https://signet.ordinalsbot.com/api';
export const PLATFORM_FEE_ADDRESS = process.env.PLATFORM_FEE_ADDRESS || '';
export const DUMMY_UTXO_VALUE = Number(process.env.DUMMY_UTXO_VALUE ?? 600);
export const DUMMY_UTXO_MAX_VALUE = Number(
  process.env.DUMMY_UTXO_MAX_VALUE ?? 1000,
);
export const DUMMY_UTXO_MIN_VALUE = Number(
  process.env.DUMMY_UTXO_MIN_VALUE ?? 580,
);
export const ORDINALS_POSTAGE_VALUE = Number(
  process.env.ORDINALS_POSTAGE_VALUE ?? 10000,
);

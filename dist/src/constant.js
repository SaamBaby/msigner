"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDINALS_POSTAGE_VALUE = exports.DUMMY_UTXO_MIN_VALUE = exports.DUMMY_UTXO_MAX_VALUE = exports.DUMMY_UTXO_VALUE = exports.PLATFORM_FEE_ADDRESS = exports.ORDINALS_API_URL = exports.BTC_NETWORK = exports.DELIST_MAGIC_PRICE = exports.BUYING_PSBT_PLATFORM_FEE_INDEX = exports.BUYING_PSBT_BUYER_RECEIVE_INDEX = exports.BUYING_PSBT_SELLER_SIGNATURE_INDEX = void 0;
// Constants
exports.BUYING_PSBT_SELLER_SIGNATURE_INDEX = 2; // based on 2-dummy algo
exports.BUYING_PSBT_BUYER_RECEIVE_INDEX = 1; // based on 2-dummy algo
exports.BUYING_PSBT_PLATFORM_FEE_INDEX = 3; // based on 2-dummy algo
exports.DELIST_MAGIC_PRICE = 20 * 1000000 * 100000000; // 20M BTC in sats
// Env
exports.BTC_NETWORK = process.env.BTC_NETWORK || 'testnet';
exports.ORDINALS_API_URL = exports.BTC_NETWORK === 'mainnet'
    ? 'https://ordinals.com'
    : 'https://signet.ordinalsbot.com/api';
exports.PLATFORM_FEE_ADDRESS = process.env.PLATFORM_FEE_ADDRESS || '';
exports.DUMMY_UTXO_VALUE = Number(process.env.DUMMY_UTXO_VALUE ?? 600);
exports.DUMMY_UTXO_MAX_VALUE = Number(process.env.DUMMY_UTXO_MAX_VALUE ?? 1000);
exports.DUMMY_UTXO_MIN_VALUE = Number(process.env.DUMMY_UTXO_MIN_VALUE ?? 580);
exports.ORDINALS_POSTAGE_VALUE = Number(process.env.ORDINALS_POSTAGE_VALUE ?? 10000);
//# sourceMappingURL=constant.js.map
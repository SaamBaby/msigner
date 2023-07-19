export declare const mempoolBitcoin: {
    addresses: import("@mempool/mempool.js/lib/interfaces/bitcoin/addresses").AddressInstance;
    blocks: import("@mempool/mempool.js/lib/interfaces/bitcoin/blocks").BlockInstance;
    difficulty: import("@mempool/mempool.js/lib/interfaces/bitcoin/difficulty").DifficultyInstance;
    fees: import("@mempool/mempool.js/lib/interfaces/bitcoin/fees").FeeInstance;
    mempool: import("@mempool/mempool.js/lib/interfaces/bitcoin/mempool").MempoolInstance;
    transactions: import("@mempool/mempool.js/lib/interfaces/bitcoin/transactions").TxInstance;
    websocket: import("@mempool/mempool.js/lib/interfaces/bitcoin/websockets").WsInstance;
};
export declare function getFeesRecommended(): Promise<import("@mempool/mempool.js/lib/interfaces/bitcoin/fees").FeesRecommended>;
export declare function getUtxosByAddress(address: string): Promise<(params: {
    txid: string;
}) => Promise<string>>;
export declare function getRawTxHex(txId: string): Promise<string>;
export declare function getRawTxVerbose(txid: string): Promise<IGetRawTransactionVerboseResult>;
export declare function getMempoolTxIds(): Promise<string[]>;
export declare function getFees(feeRateTier: string): Promise<number>;
export interface IGetRawTransactionVerboseResult {
    txid: string;
    version: number;
    locktime: number;
    vin: {
        txid: string;
        vout: number;
        prevout: Vout;
        scriptsig: string;
        scriptsig_asm: string;
        is_coinbase: boolean;
        sequence: string;
    }[];
    vout: Vout[];
    size: number;
    weight: number;
    fee: number;
    status: TxStatus;
}
export interface Vout {
    scriptpubkey: string;
    scriptpubkey_asm: string;
    scriptpubkey_type: string;
    scriptpubkey_address: string;
    value: number;
}
export interface TxStatus {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
}
//# sourceMappingURL=mempool.d.ts.map
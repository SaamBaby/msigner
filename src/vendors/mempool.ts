import mempoolJS from '@mempool/mempool.js';
import { BTC_NETWORK } from '../constant';

const { bitcoin } = mempoolJS({
  hostname: 'mempool.space',
  network: BTC_NETWORK,
});

export const mempoolBitcoin = bitcoin;

export async function getFeesRecommended() {
  return await mempoolBitcoin.fees.getFeesRecommended();
}

export async function getUtxosByAddress(address: string) {
  return await mempoolBitcoin.transactions.getTxHex;
}
export async function getRawTxHex(txId: string): Promise<string> {
  return await mempoolBitcoin.transactions.getTxHex({ txid: txId });
}
export async function getRawTxVerbose(
  txid: string,
): Promise<IGetRawTransactionVerboseResult> {
  return await mempoolBitcoin.transactions.getTx({ txid });
}

export async function getMempoolTxIds() {
  return await mempoolBitcoin.mempool.getMempoolTxids();
}

export async function getFees(feeRateTier: string) {
  const res = await mempoolBitcoin.fees.getFeesRecommended();
  switch (feeRateTier) {
    case 'fastestFee':
      return res.fastestFee;
    case 'halfHourFee':
      return res.halfHourFee;
    case 'hourFee':
      return res.hourFee;
    case 'minimumFee':
      return res.minimumFee;
    default:
      return res.hourFee;
  }
}
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

// const sha256 = require('crypto-js/sha256')
import sha256 from 'crypto-js/sha256.js'
import UTXOPool from './UTXOPool.js'

class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含

  */
  constructor(blockchain, parentHash, height, hash, miner) {
    this.blockchain = blockchain
    this.parentHash = parentHash
    this.height = height
    this.hash = hash
    this.coinbaseBeneficiary = miner
    this.utxoPool = new UTXOPool({})
  }

  getPreviousBlock () {
    // 判断是否为高度为1的区块
    if (this.height === 1) {
      return this.blockchain.genesis
    }
    return this.blockchain.blocks[this.parentHash]
  }

  isValid () {
    const leadingZero = '0'.repeat(DIFFICULTY)
    this.setHash()
    return this.hash.startsWith(leadingZero)
  }

  setNonce (nonce) {
    this.nonce = nonce
  }
  setHash () {
    this.hash = sha256(this.nonce + this.parentHash + this.height + this.blockchain).toString()
  }

}

export default Block
export const DIFFICULTY = 3

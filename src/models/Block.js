
import sha256 from 'crypto-js/sha256.js'

class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
   -名字
   -创世区块
   -存储区块的映射
  */
  constructor(blockchain, parentHash, height, hash) {
    this.blockchain = blockchain
    this.parentHash = parentHash
    this.height = height
    this.hash = hash
  }
  getPreviousBlock () {
    return this.blockchain.blocks[this.parentHash]
  }
  isValid () {
    const leadingZero = '0'.repeat(DIFFICULTY)

    return (this.nonce + "").startsWith(leadingZero)
  }
  setNonce (nonce) {
    this.nonce = nonce
  }
}

export default Block
export const DIFFICULTY = 3


import Blockchain from "./Blockchain.js";
class Block {


  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
        - 区块链
        - 前一个区块的哈希值
        - 区块高度
        - 区块哈希值
  */
  constructor(blockchain,previousHash,height,Hash) {
    //区块链
    this.blockchain=blockchain
    //前哈希
    this.previousHash=previousHash
    //区块高度
    this.height=height
    //本区块哈希
    this.Hash=Hash
  }
  getPreviousBlock(){
    return this.blockchain.blocks[this.previousHash]
  }
}

export default Block

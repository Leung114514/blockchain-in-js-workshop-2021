// Blockchain

class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name = name
    this.genensis = null
    this.blocks = {}

    if(this.genensis){
      this.blocks[this.genensis.hash]=this.genensis
    }
  }

  // 2. 定义 longestChain 函数
  /*
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    let longestChain=[]
    for(let hash in this.blocks){
      let block=this.blocks[hash]
      let chain=[block]
      while(block.previousHash!='root'&&block.hash!='root'){
        block=block.getPreviousBlock()
        chain.unshift(block)
      }
      if(chain.length>longestChain.length){
        longestChain=chain
      }
    }
    return longestChain
  }
}
export default Blockchain

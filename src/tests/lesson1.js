import Block from '../models/Block.js'
import Blockchain from '../models/Blockchain.js'
import sha256 from 'crypto-js/sha256.js'

const main = () => {
  // 初始化区块链
  let blockchain = new Blockchain('BitCoin')

  // 创建创世区块
  let genesisBlock = new Block(blockchain, 'root', 0, 'root')

  // 设置创世区块
  blockchain.genesis = genesisBlock

  // 构建区块
  let newBlock = new Block(
    blockchain,
    genesisBlock.hashs,
    1,
    sha256(new Date().getTime().toString()).toString(),
  )

  blockchain.blocks[newBlock.hashs] = newBlock

  let nextBlock = new Block(
    blockchain,
    newBlock.hashs,
    2,
    sha256(new Date().getTime().toString()).toString(),
  )

  let nextCompetitionBlock = new Block(
    blockchain,
    newBlock.hashs,
    2,
    sha256((new Date().getTime() + 1).toString()).toString(),
  )

  // 添加两个区块高度为 2  的的竞争区块
  blockchain.blocks[nextBlock.hashs] = nextBlock
  blockchain.blocks[nextCompetitionBlock.hashs] = nextCompetitionBlock

  let longestChain = blockchain.longestChain()

  console.assert(longestChain.length == 2, 'Block height should be 2')

  let thirdBlock = new Block(
    blockchain,
    nextCompetitionBlock.hashs,
    3,
    sha256(new Date().getTime().toString()).toString(),
  )

  blockchain.blocks[thirdBlock.hashs] = thirdBlock

  longestChain = blockchain.longestChain()

  // 区块检查
  console.assert(longestChain.length == 3, 'Block height should be 2')
  console.assert(
    longestChain[2].hash == thirdBlock.hashs,
    `Height block hash should be ${thirdBlock.hashs}`,
  )
}

main()

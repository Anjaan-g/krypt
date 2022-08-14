//https://eth-goerli.g.alchemy.com/v2/AgxgfCqaH51KoYy9EsGrm4-RSDNzqvXA

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity:'0.8.9',
  networks: {
      goerli: {
        url: 'https://eth-goerli.g.alchemy.com/v2/AgxgfCqaH51KoYy9EsGrm4-RSDNzqvXA',
        accounts: ['ea0b54215649b4834063034df507e533c56f10aebebf8c40efb77c3f4224fad8']
      }
  }
}
require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    mainnet: {
      provider() {
        return new HDWalletProvider(
          process.env.ENS_MAINNET,
          'https://mainnet.infura.io/' + process.env.INFURA_API_KEY
        )
      },
      network_id: 1,
      gasPrice: 1000000000 * 6 // 10 GWEI
    },
    develop: {
      provider() {
        return new HDWalletProvider(
          process.env.TRUFFLE_MNEMONIC,
          'http://localhost:9545/'
        )
      },
      host: 'localhost',
      port: 9545,
      network_id: 4447
    },
    ganache: {
      provider() {
        return new HDWalletProvider(
          process.env.GANACHE_MNEMONIC,
          'http://localhost:7545'
        )
      },
      host: 'localhost',
      port: 7545,
      network_id: 5777,
      gas: 10000000,
      gasPrice: 1000000000
    },
    kovan: {
      provider() {
        // using wallet at index 1 ----------------------------------------------------------------------------------------v
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://kovan.infura.io/' + process.env.INFURA_API_KEY,
          1
        )
      },
      network_id: 42
      // gas: 5561260
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://rinkeby.infura.io/' + process.env.INFURA_API_KEY
        )
      },
      network_id: 4,
      // gas: 2700000,
      // gasPrice: 10000000000
    },
    ropsten: {
      provider() {
        return new HDWalletProvider(
          process.env.RINKEBY_MNEMONIC,
          'https://ropsten.infura.io/' + process.env.INFURA_API_KEY
        )
      },
      network_id: '3',
      gasPrice: 1000000000 * 10, // 10 GWEI

      gas: 4700000
    },
    sokol: {
      provider() {
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://sokol.poa.network'
        )
      },
      gasPrice: 1000000000,
      network_id: 77
    },
    poa: {
      provider() {
        return new HDWalletProvider(
          process.env.TESTNET_MNEMONIC,
          'https://core.poa.network'
        )
      },
      gasPrice: 1000000000,
      network_id: 99
    }
  }
}

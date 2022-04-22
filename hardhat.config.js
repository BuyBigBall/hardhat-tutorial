require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "IX079xjV7hDxjOddJ6yKkfD_Uadv2r3n";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBYTESTNET_PRIVATE_KEY = "471153706c44d2e1602d02e7b7914e3a4e833cc148f95870abaa3a8af88dfed2";
//metamask walllet  address : 0x2Bb9454D0be9d010aa7E99dE517da9E66452b51b pwd : 1~9

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby_testnet: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEBYTESTNET_PRIVATE_KEY}`]
    }
  }

};
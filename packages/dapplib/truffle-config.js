require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan raise saddle hospital gloom nature slot gentle'; 
let testAccounts = [
"0x63cf38915ae5b40006b2711d8fb17288346ba963242244956f0194f49a40555f",
"0xd75017ab0c5bbf134a2605370ba44dca8540d26d08004af8d335718fc8d307f5",
"0x28c84a6b749734d350959c598630d270c4ece7dee0c866c056170b7a462e539c",
"0x64205a8b4da976c40d0d80810d64f044e1d22688cc5ddf86c8579899911ff44f",
"0x270b53a99f70b750e35bfb220b9ef1f536aecc3d36e8583dfb6f7f642ca2e917",
"0x0ed0be49b40ce658936e3a08fc76b9aba308269fd2fb4ee38ef595097b123eea",
"0x44fecf10dcf914e4e3149d57ab3c59eda6144d55ff09162fb3bd1cbd88a2c538",
"0x387321c79d42cee422844b941efbc069768f6235dc9042434c0fcf94a831bcc8",
"0x9b976a161bcca7bdd092c797d3d1ee11295e8204acc87a5815748abff5b44c27",
"0xef7ba5e18fea7c758c7ec999d67a4fc3b8d0ab72bf9b8b62ab98834cff6e601c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


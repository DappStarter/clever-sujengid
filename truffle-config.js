require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet rifle stick erosion hover deputy flip genius'; 
let testAccounts = [
"0xf41319589cd1b7b6082ef03c3e3eedb16a2fa11ff3290f04d5f38a8d6cc2d7e6",
"0x3fc3dff66d5515a740ec7f371b38d4b891a5b22d121637967dc0b86d43c7d1c2",
"0xdf7e08995b9e70ec5352d2bc12410cd2ea031e08d93b5be2143cce90c491f3e2",
"0x8023c4ea5bc60794e9d036be7485a69dc64e1bad23cbfd6365506862fb1be099",
"0x20d5a9c92852522b27eff3fb1505fb50c67b55a9501ecadbbace68e6a35aa9fe",
"0x90928833b4c255696b006a7cb50cd75675a0f626f0438ae87b1f52f501d95b7b",
"0xc46383bddaba80b1fa1af502c59f6e0f21266b14427603ecb4ce5ab3f9c07caf",
"0xf94cda0d9d121e677af08d4cb052108a2fd80630fb3aa5e652e7de6c13284efd",
"0x79128e5abd97d0a4ec26862f3c6b29fecb778ee148b20c573bbdadc9a7be2144",
"0xbc0552f46f6fa142784cd897a481254a7392cacefafb3cc2cc92eb5c7ee8d518"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};

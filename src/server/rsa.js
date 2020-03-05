import {sign} from "js-crypto-rsa";

const rsa = require("js-crypto-rsa");

// console.log(rsa.generateKey(2048).then( (key) => {
//
// } ));

const publicJwk = {kty: 'RSA', n: '...', e: '...'}; // public key
const privateJwk = {ktyp: 'RSA', n: 'P-256', e: '...', p: '...', q: '...', dp: '...', dq: '...', qi: '...'}; // paired private key
const msg = "..."; // Uint8Array

// sign
rsa.sign(
  msg,
  privateJwk,
  'SHA-256',
  { // optional
    name: 'RSA-PSS', // default. 'RSASSA-PKCS1-v1_5' is also available.
    saltLength: 64
  }
).then( () => {
  // now you get the signature in Uint8Array
  return rsa.verify(
    msg,
    sign,
    publicJwk,
    'SHA-256',
    { // optional
      name: 'RSA-PSS', // default. 'RSASSA-PKCS1-v1_5' is also available.
      saltLength: 64 // default is the same as hash length
    }
  );
}).then( () => {
  // now you get the result of verification in boolean
});

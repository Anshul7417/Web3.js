const Web3 = require("web3");

let web3 = new Web3 ( new Web3.providers.HttpProvider ( " HTTP://127.0.0.1:7545 "));

console.log(web3);


console.log(web3.eth.getBalance("0x7134596A405f3E2E61f86C37C45e61c65C10067d").then(console.log));   //printing account balance

console.log(web3.eth.getBalance("0x7134596A405f3E2E61f86C37C45e61c65C10067d").then(function(result){console.log(web3.utils.fromWei(result,"ether"));}));   // converting wei to ether

console.log(web3.eth.sendTransaction({from:"0x001BE2262a16Db775f5c38cFe08ec5B0465B3Ad6",to:"0x7134596A405f3E2E61f86C37C45e61c65C10067d",value:web3.utils.toWei("5","ether")}));


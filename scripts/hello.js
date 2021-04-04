const IOST = require("@kunroku/iost");
const iost_config = require("../config/iost.json");
const { id, secret_key } = require("../config/account.json");
const { address } = require("../config/contract.json");

if (!address)
  throw new Error("contract not deployed");

const iost = new IOST(iost_config);
const account = new IOST.Account(id);
const kp = new IOST.KeyPair.Ed25519(IOST.Bs58.decode(secret_key));
account.addKeyPair("active", kp);
iost.setPublisher(account);
const tx = iost.call(address, "hello", []);

const handler = iost.signAndSend(tx);
handler.listen({ irreversible: true });
handler.onSuccess(console.log);
handler.onFailed(console.log);

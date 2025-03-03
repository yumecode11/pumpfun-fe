import bs58 from "bs58";
import nacl from "tweetnacl";
type SignMessage = {
  domain: string;
  publicKey: string;
  statement: string;
};

class SigninMessage {
  domain: any;
  publicKey: any;
  statement: any;

  constructor({ domain, publicKey, statement }: SignMessage) {
    this.domain = domain;
    this.publicKey = publicKey;
    this.statement = statement;
  }

  prepare() {
    return `${this.statement}`;
  }

  async validate(signature: string) {
    const msg = this.prepare();
    const signatureUint8 = bs58.decode(signature);
    const msgUint8 = new TextEncoder().encode(msg);
    const pubKeyUint8 = bs58.decode(this.publicKey);

    return nacl.sign.detached.verify(msgUint8, signatureUint8, pubKeyUint8);
  }
}

export default SigninMessage;

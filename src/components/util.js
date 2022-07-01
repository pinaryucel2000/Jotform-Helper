import aesjs from "aes-js";

const key = [5, 2, 9, 2, 0, 1, 6, 8, 4, 9, 54, 14, 72, 44, 61, 73];

const encryp = (text) => {
  var textBytes = aesjs.utils.utf8.toBytes(text);
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  var encryptedBytes = aesCtr.encrypt(textBytes);
  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

  return encryptedHex;
};

const decrypt = (encryptedHex) => {
  var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  var decryptedBytes = aesCtr.decrypt(encryptedBytes);
  var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

  return decryptedText;
};

export { encryp, decrypt };

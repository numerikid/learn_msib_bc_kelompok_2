const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const CryptoJS = require('crypto-js');

function encrypt(text, key) {
  const ciphertext = CryptoJS.AES.encrypt(text, key).toString();
  return ciphertext;
}

function decrypt(ciphertext, key) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}

readline.question('Masukkan sebuah kata: ', (kata) => {
  readline.question('Masukkan kunci rahasia: ', (kunci) => {
    const ciphertext = encrypt(kata, kunci);
    console.log('Ciphertext:', ciphertext);

    readline.question('Masukkan kembali kunci rahasia: ', (kunciDekripsi) => {
      if (kunci === kunciDekripsi) {
        const plaintext = decrypt(ciphertext, kunci);
        console.log('Plaintext:', plaintext);
      } else {
        console.log('Kunci rahasia tidak cocok. Dekripsi gagal.');
      }
      readline.close();
    });
  });
});

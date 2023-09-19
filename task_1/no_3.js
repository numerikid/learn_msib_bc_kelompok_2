const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan harga item pertama: ', (hargaItem1) => {
  readline.question('Masukkan harga item kedua: ', (hargaItem2) => {
    readline.question('Masukkan harga item ketiga: ', (hargaItem3) => {
      const totalHarga = parseInt(hargaItem1) + parseInt(hargaItem2) + parseInt(hargaItem3);
      console.log(`Total harga belanjaan: ${totalHarga}`);
      readline.close();
    });
  });
});

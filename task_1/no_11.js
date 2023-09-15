const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Pilih operasi:');
console.log('a. Pertambahan');
console.log('b. Pengurangan');
console.log('c. Pembagian');
console.log('d. Perkalian');

readline.question('Pilih operasi (a/b/c/d): ', (operator) => {
  readline.question('Masukkan angka pertama: ', (num1) => {
    readline.question('Masukkan angka kedua: ', (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let hasil;

      switch (operator) {
        case 'a':
          hasil = num1 + num2;
          console.log(`Hasil pertambahan: ${hasil}`);
          break;
        case 'b':
          hasil = num1 - num2;
          console.log(`Hasil pengurangan: ${hasil}`);
          break;
        case 'c':
          if (num2 !== 0) {
            hasil = num1 / num2;
            console.log(`Hasil pembagian: ${hasil}`);
          } else {
            console.log('Tidak bisa melakukan pembagian dengan nol.');
          }
          break;
        case 'd':
          hasil = num1 * num2;
          console.log(`Hasil perkalian: ${hasil}`);
          break;
        default:
          console.log('Operasi yang dipilih tidak valid.');
      }

      readline.close();
    });
  });
});

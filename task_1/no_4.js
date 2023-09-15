const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan angka pertama: ', (num1) => {
  readline.question('Masukkan angka kedua: ', (num2) => {
    const angka1 = parseInt(num1);
    const angka2 = parseInt(num2);

    if (angka1 > angka2) {
      console.log(`${angka1} lebih besar dari ${angka2}`);
    } else if (angka1 < angka2) {
      console.log(`${angka1} lebih kecil dari ${angka2}`);
    } else {
      console.log('Angka-angka tersebut sama besar.');
    }

    readline.close();
  });
});

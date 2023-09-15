const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan angka range: ', (range) => {
  const maxRange = parseInt(range);
  let totalGanjil = 0;

  for (let i = 1; i <= maxRange; i++) {
    if (i % 2 !== 0) {
      totalGanjil += i;
    }
  }

  console.log(`Jumlah bilangan ganjil 1 hingga ${maxRange}: ${totalGanjil}`);
  readline.close();
});

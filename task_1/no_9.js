const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan jumlah detik: ', (totalDetik) => {
  // Mengonversi totalDetik menjadi jam, menit, dan detik
  const jam = Math.floor(totalDetik / 3600);
  const sisaDetik = totalDetik % 3600;
  const menit = Math.floor(sisaDetik / 60);
  const detik = sisaDetik % 60;

  console.log(`Waktu dalam format jam:menit:detik = ${jam}:${menit}:${detik}`);
  readline.close();
});

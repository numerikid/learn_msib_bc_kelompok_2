const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan suhu dalam Celcius: ', (celcius) => {
  // Mengubah input yang diterima menjadi angka
  const suhuCelcius = parseFloat(celcius);

  // Melakukan konversi suhu dari Celcius ke Fahrenheit
  const suhuFahrenheit = (suhuCelcius * 9 / 5) + 32;

  // Menampilkan hasil konversi
  console.log(`Suhu dalam Fahrenheit: ${suhuFahrenheit}`);
  readline.close();
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan panjang alas segitiga (dalam satuan tertentu): ', (panjangAlas) => {
  readline.question('Masukkan tinggi segitiga (dalam satuan tertentu): ', (tinggi) => {
    // Mengubah input yang diterima menjadi angka
    const alas = parseFloat(panjangAlas);
    const tinggiSegitiga = parseFloat(tinggi);

    // Menghitung luas segitiga
    const luasSegitiga = 0.5 * alas * tinggiSegitiga;

    // Menghitung panjang sisi miring (hipotenusa)
    const panjangMiring = Math.sqrt(alas * alas + tinggiSegitiga * tinggiSegitiga);

    // Menampilkan hasil
    console.log(`Luas segitiga siku-siku adalah: ${luasSegitiga}`);
    console.log(`Panjang sisi miring (hipotenusa) adalah: ${panjangMiring}`);

    readline.close();
  });
});

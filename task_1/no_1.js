// Mengimpor modul untuk mengambil input dari user
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


// Menggunakan readline untuk mengambil input dari user
readline.question('Masukkan angka pertama: ', (num1) => {
  readline.question('Masukkan angka kedua: ', (num2) => {
    const hasil = parseInt(num1) * parseInt(num2)

    // Menampilkan hasil perkalian
    console.log(`Hasil perkalian: ${hasil}`)

    // Menutup interface readline
    readline.close()
  })
})

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghasilkan angka acak antara 1 hingga 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

const angkaPertama = generateRandomNumber();
const angkaKedua = generateRandomNumber();
const jawabanBenar = angkaPertama + angkaKedua;

readline.question(`angka pertama = ${angkaPertama}\nangka kedua = ${angkaKedua}\nBerapa hasil dari ${angkaPertama} + ${angkaKedua}? `, (jawaban) => {
  if (parseInt(jawaban) === jawabanBenar) {
    console.log('Selamat, jawaban Anda benar!');
  } else {
    console.log(`Maaf, jawaban Anda salah. Jawaban yang benar adalah ${jawabanBenar}.`);
  }
  readline.close();
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function faktorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * faktorial(n - 1);
  }
}

readline.question('Masukkan sebuah bilangan bulat positif: ', (input) => {
  const bilangan = parseInt(input);

  if (bilangan >= 0) {
    const hasilFaktorial = faktorial(bilangan);
    console.log(`${bilangan}! = ${hasilFaktorial}`);
  } else {
    console.log('Maaf, Anda memasukkan bilangan negatif.');
  }

  readline.close();
});

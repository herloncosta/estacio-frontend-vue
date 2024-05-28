namespace For {
  const randomNumbers: number[] = [23, 57, 12, 89, 34, 76, 45, 62, 38, 91];

  // Método 1
  let maior: number = randomNumbers[0];
  for (let i = 0; i < randomNumbers.length; i++) {
    randomNumbers[i] > maior ? (maior = randomNumbers[i]) : maior;
  }
  console.log(maior);

  // Método 2
  let maior2: number = randomNumbers[0];
  for (const number of randomNumbers) {
    if (number > maior2) maior2 = number;
  }
  console.log(maior2);
}

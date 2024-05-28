namespace While {
  const randomNumbers: number[] = [23, 57, 12, 89, 34, 76, 45, 62, 38, 91];

  let idx: number = 0;
  let vectorLength: number = randomNumbers.length;
  let greaterThan: number = randomNumbers[0];
  while (idx < vectorLength) {
    if (randomNumbers[idx] > greaterThan) {
      greaterThan = randomNumbers[idx];
    }
    idx++;
  }
  console.log(greaterThan);
}

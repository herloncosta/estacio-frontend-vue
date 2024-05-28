function sort<T>(vector: Array<T>): Array<T> {
  for (let i = 0; i < vector.length; i++) {
    for (let j = i + 1; j < vector.length; j++) {
      if (vector[i] > vector[j]) {
        let temp = vector[i];
        vector[i] = vector[j];
        vector[j] = temp;
      }
    }
  }
  return vector;
}

const vector: number[] = [1, 3, 5, 2, 4];
const sorted = sort(vector);

console.log(sorted);

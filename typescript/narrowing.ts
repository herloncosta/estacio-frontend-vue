function testarTipo(x: number, y?: number): number {
  return x + (y ?? 10);
}

const x1: number = testarTipo(1, 9);
const x2: number = testarTipo(1);
const x3: number = testarTipo(1, undefined);

console.log(`Test #1: ${x1}`);
console.log(`Test #2: ${x2}`);
console.log(`Test #3: ${x3}`);

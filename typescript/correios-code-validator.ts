function isValidCorreiosTrackingCode(code: string): boolean {
  if (code.length !== 13) return false;

  const prefix = code.substring(0, 2);
  const sufix = code.substring(11, 13);

  if (!/^[A-Z]{2}$/.test(prefix) || !/^[A-Z]{2}$/.test(sufix)) return false;

  const digits = code.substring(2, 10);
  if (!/^\d{8}/.test(digits)) return false;

  const calculatedDigit = calculateCheckDigit(digits);
  const providedDigit = parseInt(code.charAt(10), 10);

  return calculatedDigit === providedDigit;
}

function calculateCheckDigit(digits: string): number {
  const weights = [8, 6, 4, 2, 3, 5, 9, 7];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += parseInt(digits.charAt(i), 10) * weights[i];
  }

  const remainder = sum % 11;
  let checkDigit = 11 - remainder;

  if (checkDigit === 10) {
    checkDigit = 0;
  } else if (checkDigit === 11) {
    checkDigit = 5;
  }

  return checkDigit;
}

const trackingCode = "CD876543210BR";
console.log(isValidCorreiosTrackingCode(trackingCode));

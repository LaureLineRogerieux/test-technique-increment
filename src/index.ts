export const solution = (n: number, k: number) => {
  const hundreds = Math.floor(n / 100);
  const remainingN = n - hundreds * 100;
  const remainingK = hundreds + k - 9;

  if (remainingK > 0) {
    const tens = Math.floor(remainingN / 10);
    const remainingRemainingN = remainingN - tens * 10;
    const remainingRemainingK = tens + remainingK - 9;

    if (remainingRemainingK > 0) {
      return 900 + 90 + remainingRemainingN + remainingRemainingK;
    }
    return 900 + remainingN + remainingK * 10;
  }
  return n + k * 100;
};

/**
 * 四舍五入保留N位小数
 * @param num
 * @param fractionDigits 精度，默认2
 * @returns number
 */
export const roundWithDigit = (num: number, fractionDigits: number = 2) => {
  return (
    Math.round((num + Number.EPSILON) * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits)
  );
};

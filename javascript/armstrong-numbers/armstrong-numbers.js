//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (x) => {
  const numbers = Array.from(x.toString()).map(Number);
  let res = 0;

  numbers.forEach(number => {
    res += Math.pow(number, numbers.length);
  })

  return res == x;
};

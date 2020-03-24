//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  x < 0 ? x *= (-1) : '';
  y < 0 ? y *= (-1) : '';
  const big = x > y ? x : y;

  switch(true){
    case (big <= 1):
      return 10;
    case (big <= 5):
      return 5;
    case (big <= 10):
      return 1;
    case (big > 10):
      return 0;
  }
};

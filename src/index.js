
module.exports = function check (str, bracketsConfig) {
  let stack = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (const char of str.split('')) {
      if (stack[stack.length - 1] === char) {
          stack.pop();
      } else if (brackets[char]) {
          stack.push(brackets[char]);
      } else {
          return false;
      }
  }
  return stack.length === 0;
}



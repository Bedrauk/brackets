module.exports = function check(str, bracketsConfig) {
  const bracketsMap = Object.fromEntries(bracketsConfig);
  

  function isBalanced(s, index = 0, stack = []) {
    if (index === s.length) {
      return stack.length === 0;
    }

    const char = s[index];


    if (char in bracketsMap) {
      if (bracketsMap[char] === char) {
        if (stack[stack.length - 1] === char) {
          stack.pop()
        } else {
          stack.push(char)
        }
      } else {
        stack.push(char)
      }
    } else {

      const openingBracket = Object.keys(bracketsMap).find(key => bracketsMap[key] === char);
      if (stack.length === 0 || stack[stack.length - 1] !== openingBracket) {
        return false
      }
      stack.pop()
    }


    return isBalanced(s, index + 1, stack);
  }


  return isBalanced(str);
}

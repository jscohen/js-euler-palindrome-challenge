'use strict'

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, max) {
  let sum = 0
  for (let i = 0; i < max; i++) {
    const binary = (i >>> 0).toString(2)
    const iNum = i.toString()
    let num = iNum.split('')
    let binBack = binary.split('')
    binBack = binBack.reverse()
    binBack = binBack.join('')
    num = num.reverse()
    num = num.join('')
    if (iNum === num && binary === binBack) {
      sum = sum + i
      console.log(sum)
    }
  }
  return sum
}

module.exports = {
  doubleBasePalindromeSum
}

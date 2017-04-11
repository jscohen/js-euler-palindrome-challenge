'use strict'

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, max) {
  max = 1000000
  for (let i = 0; i < max; i++) {
    const binary = (i >>> 0).toString(2)
    i = i.toString()
    let num = i.split('')
    let binBack = binary.split('')
    binBack = binBack.reverse()
    binBack = binBack.join('')
    num = num.reverse()
    num = num.join('')
    if (i === num && binary === binBack) {
      console.log(i)
    }
  }
}

module.exports = {
  doubleBasePalindromeSum
}

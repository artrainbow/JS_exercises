// Finish the function numberToOrdinal, which should take a number
// and return it as a string with the correct ordinal indicator suffix (in English).

// That is:

// numberToOrdinal(1) ==> '1st'
// numberToOrdinal(2) ==> '2nd'
// numberToOrdinal(3) ==> '3rd'
// numberToOrdinal(4) ==> '4th'
// ... and so on
// For the purposes of this challenge, you may assume that the function will always
// be passed a non-negative integer. If the function is given 0 as an argument, it should return '0' (as a string).

// To help you get started, here is an excerpt from Wikipedia's page on Ordinal Indicators:

// st is used with numbers ending in 1 (e.g. 1st, pronounced first)
// nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
// rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
// th is used for all other numbers (e.g. 9th, pronounced ninth).

// Documentation
// numberToOrdinal(number)

// Parameters:

// number: Integer

// The number to be converted to a string ordinal.

// Constraints:

// 0 <= number <= 10000
// Returns: String

// Returns a string ordinal based off of the number.

function numberToOrdinal(n) {

  let result = '0',
    arr = [],
    lastNum;

  if (n === 0) {
    return result;
  } else {
    arr = n.toString().split('');
    lastNum = n.toString().charAt(arr.length - 1);

    switch (lastNum) {
      case '1':
        arr.push('st');
        result = arr.join('').toString();
        return result;
        break;
      case '2':
        arr.push('nd');
        result = arr.join('').toString();
        return result;
        break;
      case '3':
        if (arr.join('').toString() === '13') {
          arr.push('th');
          result = arr.join('').toString();
          return result;
          break;
        } else {
          arr.push('rd');
          result = arr.join('').toString();
          return result;
          break;
        }
      default:
        arr.push('th');
        result = arr.join('').toString();
        return result;
        break;
    }
  }
}

describe('Challenge', () => {
  it('should return 0 when called with 0', () => {
    assert.equal(numberToOrdinal(0), '0')
  })
  it('should return 1st when called with 1', () => {
    assert.equal(numberToOrdinal(1), '1st')
  })
  it('should return 2nd when called with 2', () => {
    assert.equal(numberToOrdinal(2), '2nd')
  })
  it('should return 3rd when called with 3', () => {
    assert.equal(numberToOrdinal(3), '3rd')
  })
  it('should return 4th when called with 4', () => {
    assert.equal(numberToOrdinal(4), '4th')
  });
  it('should return 13th when called with 13', () => {
    assert.equal(numberToOrdinal(13), '13th')
  });
  it('should return 500th when called with 500', () => {
    assert.equal(numberToOrdinal(500), '500th');
  });
  it('should return 221st when called with 221', () => {
    assert.equal(numberToOrdinal(221), '221st');
  });
  it('should return 120th when called with 120', () => {
    assert.equal(numberToOrdinal(120), '120th');
  });
  it('should return 110th when called with 110', () => {
    assert.equal(numberToOrdinal(110), '110th');
  });
})

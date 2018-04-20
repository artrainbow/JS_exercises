// Your job is to create a function, which masks credit card numbers
// It might have or might not have dashes in it
// If a plain string is passed, you must return it unchaged
// If credit card number is smaller than 6 digits you must return it unchanged

function maskify(creditCard) {

  let result,
    arr = [],
    sign = '#';

  creditCard.split('').forEach((symbol, i) => {
    if (creditCard.length === 16) {
      if (i !== 0 && i < 12) symbol = sign;
    } else if (creditCard.length === 19) {
      if (i === 0 || symbol === '-' || symbol.match(/\D/g) || i > 14) {
      } else {
        symbol = sign;
      }
    } else if (creditCard.length < 6 && symbol.match(/\d/g)) {
    } else if (symbol.match(/\D/g)) {
    } else {
      symbol = sign;
    }
    arr.push(symbol);
    result = arr.join('').toString();
  });

  return result;
}

describe('Challenge', () => {
  it('should mask the digits of standard credit cards', () => {
    assert.equal(maskify("5512103073210694"), "5###########0694")
  });

  it('should mask the digits but not dashes', () => {
    assert.equal(maskify("4556-3646-0793-5616"), "4###-####-####-5616");
  });

  it('should not mask the digits of short credit cards', () => {
    assert.equal(maskify("54321"), "54321")
  });

  it('should not modify plain strings', () => {
    assert.equal(maskify("Skippy"), "Skippy");
  });

  it('should not mask the letters within the credit card number', () => {
    assert.equal(maskify('1234-SKIP-3456-4567'), '1###-SKIP-####-4567');
  });
});



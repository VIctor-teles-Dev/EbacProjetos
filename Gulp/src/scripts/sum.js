const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      console.error('Division by zero is not allowed. Deu erro man');
      return null;
    }
    return a / b;
  },
};
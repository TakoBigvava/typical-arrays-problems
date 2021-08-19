
exports.min = function min(array) {
  if (array === undefined || array.length == 0) {
      return 0;
  } else {
      const sorted = array.sort((a, b) => a - b);
      return sorted[0];
  }
};

exports.max = function max(array) {
  if (array === undefined || array.length == 0) {
      return 0;
  } else {
      const sorted = array.sort((a, b) => a - b);
      return sorted[array.length - 1];
  }
};

exports.avg = function avg(array) {
  if (array === undefined || array.length == 0) {
      return 0;
  } else if (array != undefined || array != []) {
      let sum = array.reduce((a, b) => {
          return a + b;
      });
      return sum / array.length;
  }
};

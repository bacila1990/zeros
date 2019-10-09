module.exports = function zeros(expression) {
  let two = 0;
  let five = 0;
  let arr = expression.split("*");

  function findCount(num, divider) {
    let cnt = 0;
    let counter = num;
    while (counter > 0) {
      cnt += Math.floor(counter / divider);
      counter = Math.floor(counter / divider);
    }
    return cnt;
  }

  arr.forEach(function(el) {
    let num = parseFloat(el);
    let sign = el.slice(el.indexOf("!"));

    if (sign === "!") {
      two += findCount(num, 2);
      five += findCount(num, 5);
    }
    if (sign === "!!") {
      if (num % 2 === 0) {
        two += findCount(num, 2);
      }

      for (let i = num; i > 1; i -= 2) {
        let temp = i;
        while (temp % 5 === 0) {
          five += 1;
          temp /= 5;
        }
      }
    }
  });

  return two < five ? two : five;
};

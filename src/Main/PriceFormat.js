export const priceFormat = (num) => {
  let str = String(num);
  let temp = "";
  let inc = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (inc === 2 && i != 0) {
      temp += str[i] + ",";
      inc = 0;
    } else {
      temp += str[i];
      inc += 1;
    }
  }
  return `${temp.split("").reverse().join("")}`;
};



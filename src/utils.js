const utils = {
  range: (length) => {
    return Array.from({length}).map((_, i) => i);
  },
  from2D: (x, y, width) => {
    const uni = x * width + y;
    return uni;
  },
  from1D: (uni, width) => {
    const x = Math.trunc(uni / width);
    const y = uni % width;
    return [x, y];
  },
};

console.log(utils.range(8));
export default utils;

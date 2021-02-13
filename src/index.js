module.exports = function reverse (n) {
  const srt = Math.abs(n).toString();
  let result = srt.split("").reverse().join("");
  return Number(result);
 }

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = s.length - 1,
    i = 0;
  while (i < l) {
    let last = s[l];
    s[l] = s[i];
    s[i] = last;
    i++;
    l--;
  }
  return s;
};

var s = ["h", "e", "l", "l", "o"];
console.log("input", s);
var output = reverseString(s);
console.log("output", output);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
  console.log(nums);
};

nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);

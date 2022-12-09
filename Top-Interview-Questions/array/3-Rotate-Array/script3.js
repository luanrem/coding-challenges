/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function (nums, k) {
  var numsCopy = nums.slice()

  console.log(nums)

  for(let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length ] = numsCopy[i]
  }
};

nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);

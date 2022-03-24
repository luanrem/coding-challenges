/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let arrLength = nums.length;
  let arrLast = new Array(k);
  for (let i = 0; i < k; i++) {
    arrLast[i] = nums[arrLength - k + i];
  }
  for (let i = 0; i < k; i++) {
    nums.pop();
  }
  nums = [...arrLast, ...nums];
  console.log(arrLast);
  console.log(nums);

  return arrLast;
};

nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let numlenght = nums.length,
    maxNum = nums[numlenght - 1],
    currentNum = nums[0];

  for (let i = 0; i <= maxNum; i++) {
    nums[i] = currentNum;
    currentNum++;
  }

  console.log(nums, currentNum);
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);

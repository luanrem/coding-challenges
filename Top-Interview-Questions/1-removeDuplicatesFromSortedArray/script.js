/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let numlenght = nums.length,
    currentNum = 0;

  for (let i = 1; i < numlenght; i++) {
    console.log(nums[i]);
    if (nums[currentNum] !== nums[i]) {
      currentNum++;
      nums[currentNum] = nums[i];
    }
  }

  console.log(nums, currentNum);
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);

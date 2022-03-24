/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let days = prices.length;
  let buy = null,
    ammount = 0;

  for (let i = 0; i < days; i++) {
    if (prices[i + 1] > prices[i] && prices[i + 1] !== undefined) {
      buy > prices[i] && (buy = prices[i]);
      buy === null && (buy = prices[i]);
      console.log(
        "buy",
        " - Prices[i]:",
        prices[i],
        " - Price[i+1]:",
        prices[i + 1],
        " - buy:",
        buy,
        " - amount:",
        ammount
      );
    }
    if (
      (prices[i + 1] < prices[i] || prices[i + 1] === undefined) &&
      buy !== null
    ) {
      ammount += prices[i] - buy;
      console.log(
        "sell",
        " - Prices[i]:",
        prices[i],
        " - Price[i+1]:",
        prices[i + 1],
        " - buy:",
        buy,
        " - amount:",
        ammount
      );
      buy = null;
    }
  }

  console.log("ammount - ", ammount);
};

prices = [7, 1, 5, 3, 6, 4];
prices2 = [1, 2, 3, 4, 5];
prices3 = [7, 6, 4, 3, 1];
maxProfit(prices);

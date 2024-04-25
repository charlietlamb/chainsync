const axios = require("axios");

// Function to fetch previous transactions
export async function fetchPreviousTransactions({
  ethAddress,
}: {
  ethAddress: string;
}) {
  try {
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${ethAddress}&apikey=${process.env.ETHERSCAN_API_KEY}`;
    const response = await axios.get(url);

    if (response.data.status === "1") {
      const transactions = response.data.result;
      console.log(transactions);
      // Process transactions here
      return transactions;
    } else {
      return 0;
    }
  } catch (error) {
    return -1;
  }
  return [];
}

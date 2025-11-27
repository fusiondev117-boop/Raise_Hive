const Web3 = require("web3");

exports.handler = async(event, context) => {
    try {
        const web3 = new Web3(process.env.INFURA_URL);
        const address = "0xYourEthereumAddress";
        const balance = await web3.eth.getBalance(address);

        return {
            statusCode: 200,
            body: JSON.stringify({ balance: web3.utils.fromWei(balance, "ether") }),
        };
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
};
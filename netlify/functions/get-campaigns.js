const { ethers } = require('ethers');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Connect to blockchain
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.ETHEREUM_RPC_URL || 'https://rpc.ankr.com/eth'
    );

    // Get contract instance
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contractABI = JSON.parse(process.env.CONTRACT_ABI || '[]');

    if (!contractAddress || contractABI.length === 0) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          message: 'Contract not configured',
          campaigns: [] 
        }),
      };
    }

    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    // Get campaign count
    const campaignCount = await contract.campaignCount();
    const campaigns = [];

    // Fetch all campaigns
    for (let i = 1; i <= campaignCount; i++) {
      try {
        const campaign = await contract.campaigns(i);
        campaigns.push({
          id: i,
          creator: campaign.creator,
          goal: ethers.utils.formatEther(campaign.goal),
          raisedAmount: ethers.utils.formatEther(campaign.raisedAmount),
          deadline: campaign.deadline.toNumber(),
          completed: campaign.completed,
          category: campaign.category,
          title: campaign.title,
        });
      } catch (err) {
        console.error(`Error fetching campaign ${i}:`, err);
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ campaigns }),
    };
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Error fetching campaigns', 
        error: error.message,
        campaigns: []
      }),
    };
  }
};

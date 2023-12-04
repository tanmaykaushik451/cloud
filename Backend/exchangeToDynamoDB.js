// CoinGecko API endpoint for exchanges

const AWS = require('aws-sdk');
const axios = require('axios');

// Configure AWS
AWS.config.update({
  region: 'ca-central-1', // replace with your AWS region
  accessKeyId: 'AKIAQMMPPIG6XL7NXNFG', // replace with your AWS access key
  secretAccessKey: 'fcxzxcvLgc+xTkpm4hrDRCwDnj7ktlDt552UQQw/' // replace with your AWS secret key
});

// Create DynamoDB document client
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = 'Exchange_Table'; // replace with your DynamoDB table name

// CoinGecko API URL
const apiURL = 'https://api.coingecko.com/api/v3/exchanges';

// Parameters for the API request
const params = {
  vs_currency: 'cad',
  order: 'market_cap_desc',
  per_page: 100,
  page: 1,
  sparkline: false
};

// Fetch data from CoinGecko API
axios.get(apiURL, { params })
  .then(response => {
    const coins = response.data;

    // Upload data to DynamoDB
    const dynamoDBPromises = coins.map(coin => {
      const params = {
        TableName: tableName,
        Item: coin
      };

      return dynamoDB.put(params).promise();
    });

    return Promise.all(dynamoDBPromises);
  })
  .then(() => {
    console.log('Data uploaded to DynamoDB successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  });

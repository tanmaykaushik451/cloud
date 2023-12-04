const express = require('express');
const AWS = require('aws-sdk');
require('dotenv').config();


const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// Configure AWS
AWS.config.update({
  region: 'ca-central-1', // replace with your AWS region
  accessKeyId: 'AKIAQMMPPIG6XL7NXNFG', // replace with your AWS access key
  secretAccessKey: 'fcxzxcvLgc+xTkpm4hrDRCwDnj7ktlDt552UQQw/' // replace with your AWS secret key
});
// Set up AWS DynamoDB client
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Define a route to get data from DynamoDB
app.get('/api/data', async (req, res) => {
  const params = {
    TableName: 'Market_table',
  };

  try {
    const result = await dynamoDB.scan(params).promise();
    res.json(result.Items);
  } catch (error) {
    console.error('Error retrieving data from DynamoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/exchanges', async (req, res) => {
  const params = {
    TableName: 'Exchange_Table',
  };

  try {
    const result = await dynamoDB.scan(params).promise();
    res.json(result.Items);
  } catch (error) {
    console.error('Error retrieving data from DynamoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello there, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
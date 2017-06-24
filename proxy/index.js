const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({target: 'http://localhost:3000', changeOrigin: true}));
app.use('**', proxy({target: 'http://localhost:4200', changeOrigin: true}));

app.listen(1337, () => {
  console.log('Proxy running on port 1337...');
});

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .set('trust proxy', 1)  // http://expressjs.com/en/guide/behind-proxies.html
  .get('/', (req, res) => {
    let out = `req.ip: ${req.ip}`;
    res.type('text/plain');
    res.send(out);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

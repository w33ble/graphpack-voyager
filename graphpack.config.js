/* eslint import/no-extraneous-dependencies: 0 */
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello world!');
});

module.exports = {
  server: {
    introspection: true,
    playground: false,
    port: 8080,
    applyMiddleware: {
      app,
      path: '/graphql',
    },
  },
};

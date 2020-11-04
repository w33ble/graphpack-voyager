/* eslint import/no-extraneous-dependencies: 0 */
const express = require('express');
const { express: voyagerMiddleware } = require('graphql-voyager/middleware');

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello world!');
});

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

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

const withTM = require('next-transpile-modules')(['@weknow-network/wk-lerna-lib-playground']); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
});


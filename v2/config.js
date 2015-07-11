var production = process.env.NODE_ENV == 'production';

var config = {
  cluster: process.env.NODE_CLUSTER ? true : false,
  secret: production ? process.env.SECRET : "2cd848b4-17f5-11e5-9771-43813ec0573a"
};

if (!config.secret) {
  throw 'Secret not set';
}

module.exports = config;

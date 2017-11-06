
const webpackConfig = require('./webpack.config')
, {output: {path}} = webpackConfig

module.exports = require('webpack-dev-middleware')(
require('webpack')(webpackConfig),
{path}
)
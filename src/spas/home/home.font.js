const BUNDLE_HELPER = require('../../utils')

module.exports = {
    files: [
      './icons/beer.svg',
      './icons/light-bulb.svg'
    ],
    fileName: BUNDLE_HELPER.path(__dirname) + '/fonts.[ext]'
  }
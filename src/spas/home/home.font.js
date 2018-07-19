const BUNDLE_HELPER = require('../../utils')

module.exports = {
    files: [
      './icons/beer.svg',
      './icons/thumbs-up.svg'
    ],
    fileName: BUNDLE_HELPER.path(__dirname) + '/fonts.[ext]'
  }
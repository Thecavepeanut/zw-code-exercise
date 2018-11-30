const BUNDLE_HELPER = require("../../utils");

module.exports = {
  files: [
    "./icons/beer.svg",
    "./icons/chameleon.svg",
    "./icons/cow.svg",
    "./icons/kitty.svg",
    "./icons/penguin.svg"
  ],
  fileName: BUNDLE_HELPER.path(__dirname) + "/fonts.[ext]"
};

"use strict"

const merge = require("webpack-merge")

const common = require("./webpack.common.js")
const PATHS = require("./paths")

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    "manaba-document_start": PATHS.src + "/manaba-document_start.js",
    "manaba-document_end": PATHS.src + "/manaba-document_end.js",
    background: PATHS.src + "/background.js",
  },
})

module.exports = config

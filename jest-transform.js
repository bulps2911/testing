const config = {
    babelrc: false,
    presets: [
      [
        "@babel/env",
        {
          modules: false
        }
      ],
      "@babel/react"
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      // "transform-modules-commonjs"
      "@babel/transform-modules-commonjs"
    ]
  };
  module.exports = require("babel-jest").createTransformer(config);
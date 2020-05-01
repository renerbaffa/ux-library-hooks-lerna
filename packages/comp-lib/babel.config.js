module.exports = {
  plugins: ['babel-plugin-styled-components'],
  presets: [
    ["@babel/preset-env", { "modules": "commonjs" }],
    "@babel/preset-react"
  ]
}

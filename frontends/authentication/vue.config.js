const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8082,
  },
  publicPath: '/authorize',
  transpileDependencies: true
})

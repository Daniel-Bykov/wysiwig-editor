const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[hash]',
          exportLocalsConvention: 'camelCaseOnly'
        }
      },
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss"; @import "@/assets/scss/fonts.scss";  @import "@/assets/scss/reboot.scss";`,
      },
    },
  },
  filenameHashing: false,

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
})

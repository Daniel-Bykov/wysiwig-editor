const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/wysiwig-editor/" : "/",
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

  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/icons',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true
      }
    }
  },

  filenameHashing: false,

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
})

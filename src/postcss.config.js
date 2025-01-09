module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏的宽度 iphoneX
      // 设计图750/640，调成1倍 375/320
      viewportWidth: 375
    }
  }
}

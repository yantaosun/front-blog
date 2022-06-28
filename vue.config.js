module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8866",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true,
    port:8088,
    open:true
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};

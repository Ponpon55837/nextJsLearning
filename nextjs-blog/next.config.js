module.exports = {

  env: {
    API_URL : process.env.API_URL

    // 如果要使用在nginx or apache中分網頁有不同的目錄的話，先在.env檔案中加入要放的路徑位置
    // HOME_URL : process.env.HOME_URL
  },

  exportTrailingSlash: true,
  exportPathMap: function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/'},
      '/about': { page: '/about' },
      '/batman': { page: '/batman' },
      '/contact': { page: '/contact' },
      '/test': { page: '/test' },
      '/login': { page: '/login' }


      // 如果要使用在nginx or apache中分網頁有不同的目錄的話，先在.env檔案中加入要放的路徑位置
      //'/Node/about': { page: '/Node/about' }
    }
  }
}

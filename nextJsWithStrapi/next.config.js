module.exports = {

  env: {
    API_URL : process.env.API_URL
  },

  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/batman': { page: '/batman' },
      '/contact': { page: '/contact' },
      '/test': { page: '/test' },
      '/login': { page: '/login' }
    }
  }
}

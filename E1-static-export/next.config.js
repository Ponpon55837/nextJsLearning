module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/batman': { page: '/batman' },
      '/contact': { page: '/contact' }
    }
  }
}

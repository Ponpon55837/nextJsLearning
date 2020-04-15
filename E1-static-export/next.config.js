module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/batman': { page: '/batman' },
      '/contact': { page: '/contact' },
      '/login': { page: '/login' }
    }
  }
}

// '/about': { page: '/about' },

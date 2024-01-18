const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/components/TheAccount.js'),
        './html/AccountForm.html': path.resolve(__dirname, 'template/js/custom-js/components/AccountForm.html'),
    }
  }
})

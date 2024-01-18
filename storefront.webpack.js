const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './html/LoginModal.html': path.resolve(__dirname, 'template/js/custom-js/components/LoginModal.html'),
        './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/components/TheAccount.html'),
        './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/components/TheAccount.js'),
        './js/LoginBlock.js': path.resolve(__dirname, 'template/js/custom-js/components/LoginBlock.js'),
        './js/AccountForm.js': path.resolve(__dirname, 'template/js/custom-js/components/AccountForm.js'),
        './html/AccountForm.html': path.resolve(__dirname, 'template/js/custom-js/components/AccountForm.html'),
    }
  }
})

const path = require('path');

module.exports = {
    entry: {
        about: path.resolve(__dirname, 'src/js/about.js'),
        form: path.resolve(__dirname, 'src/js/form.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    mode: 'development'
};

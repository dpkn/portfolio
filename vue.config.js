
const path = require('path');

module.exports = {
  baseUrl: '',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/global.scss'),
      ],
    },
  },
};

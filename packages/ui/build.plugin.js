const TerserPlugin = require('terser-webpack-plugin');

module.exports = function (option) {
  const {
    context,
    onGetWebpackConfig,
    onHook,
  } = option;
  onGetWebpackConfig((config) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [new TerserPlugin()];
    return config;
  });
  onHook((key, value) => {
    console.log(key, value);
  });
};
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
//
// module.exports = ({
//                     context,
//                     onGetWebpackConfig,
//                   }) => {
//   onGetWebpackConfig((config) => {
//     config.optimization.minimize = true;
//     config.optimization.minimizer = [new CssMinimizerPlugin()];
//     // console.log(config);
//     return config;
//   });
// };

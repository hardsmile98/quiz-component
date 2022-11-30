const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devOptions = {
  devServer: {
    static: './dist',
    port: 8000,
  },
};

module.exports = ({ development }) => ({
  entry: development ? './example/src/index.tsx' : './src/index.tsx',
  devtool: development ? 'inline-source-map' : false,
  mode: development ? 'development' : 'production',
  output: {
    filename: 'quiz.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'quiz',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self === \'undefined\' ? this : self',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  plugins: development ? [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './example/public/index.html'),
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
  ] : [],
  ...(development && devOptions),
});

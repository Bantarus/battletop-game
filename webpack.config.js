const path = require('path');

module.exports = {
  entry: './src/client/game.mts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        include: path.resolve(__dirname, 'src/client'),
        loader: 'ts-loader'
      },
      {
        test: require.resolve('phaser'),
        loader: 'expose-loader',
        options: { exposes: { globalName: 'Phaser', override: true } }
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, './'),
    host: 'localhost',
    port: 3000,
    open: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.mts', 'mjs'],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
     }
  }
};
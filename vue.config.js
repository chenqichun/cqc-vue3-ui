const args = process.argv.slice(2);
const path = require('path')
const fs = require('fs')

const getEntries = (dir) => {
  const absPath = path.resolve(dir);
  const files = fs.readdirSync(absPath);
  const entries = {}
  files.forEach(item => {
    let p = path.join(absPath, item);
    if (fs.statSync(p).isDirectory()) {
      p = path.join(p, 'index.js')
      entries[item] = p;
    }
  })
  return entries;
}
if (process.env.NODE_ENV === 'production' && args.includes('lib')) {
  module.exports = {
    productionSourceMap: false
  }
}
if (process.env.NODE_ENV === 'production' && args.includes('--all')) {
  module.exports = {
    outputDir: 'dist',
    productionSourceMap: false,
    configureWebpack: {
      entry: {
        ...getEntries('./src/packages')
      },
      output: {
        filename: 'lib/[name].js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: ['cqc', '[name]']
      },
      externals: {
        vue: {
          root: 'vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    },
    css: {
      sourceMap: false,
      extract: {
        filename: 'lib/theme-chalk/[name].css'
      }
    },
    chainWebpack: config => {
      config.optimization.delete('splitChunks')
      config.plugins.delete('copy')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('html')
      config.plugins.delete('hmr')
      config.entryPoints.delete('app')
    }
  }
}
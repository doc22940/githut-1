import webpackConfig from './webpack.config.babel.js'

webpackConfig.entry = {}
module.exports = config => {
  config.set({
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['mocha'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test/**/*.js'
    ],
    preprocessors: {
      'test/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  })
  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci']
  }
}

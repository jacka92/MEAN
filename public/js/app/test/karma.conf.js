// Karma configuration
// Generated on Thu Jul 23 2015 12:29:57 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai'],


    // list of files / patterns to load in the browser
    files: [
      "../public/bower/angular/angular.js",
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular-mocks.js',
      'http://code.angularjs.org/1.2.16/angular-resource.js',
      '../public/js/*.js',
      '../public/js/app/*.js',
      '../public/js/app/test/*.js',
      '../public/js/app/services/*.js',
      './src/**/*.js',
      './test/**/*.js'
    //  'js/test/*',
      
      // 'bower_components/angular/angular.js',
      //'bower_components/angular-mocks/angular-mocks.js',
      //'src/*.js',
      //'test/*.mocha.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'js/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}

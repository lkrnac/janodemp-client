"use strict";
// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const karmaJasmine = require("karma-jasmine");
const karmaChromeLauncher = require("karma-chrome-launcher");
const karmaRemapIstanbul = require("karma-remap-istanbul");
const karma = require("angular-cli/plugins/karma");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "angular-cli"],
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaRemapIstanbul,
      karma
    ],
    files: [
      { pattern: "./src/test.ts", watched: false }
    ],
    preprocessors: {
      "./src/test.ts": ["angular-cli"]
    },
    mime: {
      "text/x-typescript": ["ts", "tsx"]
    },
    remapIstanbulReporter: {
      reports: {
        html: "coverage",
        lcovonly: "./coverage/coverage.lcov"
      }
    },
    angularCli: {
      config: "./angular-cli.json",
      environment: "dev"
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ["progress", "karma-remap-istanbul"]
              : ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};

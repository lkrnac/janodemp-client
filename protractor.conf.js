"use strict";
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
const SpecReporter = require("jasmine-spec-reporter");
const tsNode = require("ts-node");

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    "./e2e/**/*.e2e-spec.ts"
  ],
  capabilities: {
    "browserName": "chrome"
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: () => {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: () => {
    tsNode.register({
      project: "e2e"
    });
  },
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};

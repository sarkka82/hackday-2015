/**
 * Generic models angular module initialize. This module contains all 3rd party dependencies that application needs to
 * actually work.
 *
 * Also note that this module have to be loaded before any other application modules that have dependencies to these
 * "core" modules.
 */
(function() {
  'use strict';

  angular.module('frontend.core.dependencies', [
    'angular-loading-bar',
    'ngAnimate',
    'ngStorage',
    'sails.io',
    'toastr',
    'ui.bootstrap',
    'ui.dashboard',
    'ui.router',
    'ui.utils',
    'youtube-embed'
  ]);
}());

(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.starterTheme = {
    attach(context) {
      once('starter-theme', 'html', context).forEach(() => {
        // Global theme behaviours belong here.
      });
    },
  };
})(Drupal, once);
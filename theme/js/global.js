(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.starter_theme = {
    attach(context) {
      once('starter_theme', 'html', context).forEach(() => {
        // Global theme behaviours belong here.
      });
    },
  };
})(Drupal, once);
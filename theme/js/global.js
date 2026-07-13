(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.drupalSdcTheme = {
    attach(context) {
      once('drupal-sdc-theme', 'html', context).forEach(() => {
        // Global behaviours belong here.
        // Component-specific JavaScript should remain inside each SDC.
      });
    },
  };
})(Drupal, once);
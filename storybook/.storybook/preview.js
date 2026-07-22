import '../../theme/css/global.css';

const preview = {
  parameters: {
    controls: {
      expanded: true,
    },

    options: {
      storySort: {
        order: [
          'Welcome',
          'Foundation',
          [
            'Colours',
            'Typography',
            'Spacing',
            'Borders and Radius',
            'Elevation and Shadows',
            'Animation and Motion',
            'Grid and Layout',
            'Breakpoints and Responsive Behaviour',
            'Accessibility',
            'Focus Styles',
            'Z-index and Layering',
            'Content and Writing Guidance',
            'Icons',
            '*',
          ],
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
          'Pages',
        ],
      },
    },

    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1b1b1b',
        },
      ],
    },

    a11y: {
      config: {
        rules: [],
      },

      options: {
        runOnly: {
          type: 'tag',
          values: [
            'wcag2a',
            'wcag2aa',
            'wcag21a',
            'wcag21aa',
            'wcag22aa',
          ],
        },
      },

      test: 'error',
    },
  },
};

export default preview;
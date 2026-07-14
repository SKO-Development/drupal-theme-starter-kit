import '../../theme/css/global.css';

const preview = {
  parameters: {
    controls: {
      expanded: true,
    },

    options: {
      storySort: {
        order: [
          'Foundation',
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
  },
};

export default preview;
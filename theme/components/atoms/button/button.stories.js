import buttonTemplate from './button.twig';
import './button.css';

export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],

  parameters: {
    a11y: {
      test: 'error',
    },
    docs: {
      description: {
        component:
          'An accessible link styled as a button. The markup is rendered from the Drupal SDC Twig template.',
      },
    },
  },

  argTypes: {
    text: {
      control: 'text',
      description: 'Visible button text.',
    },

    url: {
      control: 'text',
      description: 'Button destination.',
    },

    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },

    new_window: {
      control: 'boolean',
    },
  },

  render: args => buttonTemplate(args),
};

export const Primary = {
  args: {
    text: 'Primary button',
    url: '#',
    variant: 'primary',
    new_window: false,
  },
};

export const Secondary = {
  args: {
    text: 'Secondary button',
    url: '#',
    variant: 'secondary',
    new_window: false,
  },
};

export const ExternalLink = {
  name: 'External link',
  args: {
    text: 'Visit external website',
    url: 'https://example.com',
    variant: 'primary',
    new_window: true,
  },
};
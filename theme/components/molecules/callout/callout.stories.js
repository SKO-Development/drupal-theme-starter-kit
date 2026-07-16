import calloutTemplate from './callout.twig';
import './callout.css';

// The callout Twig template composes the real Button SDC.
// Its stylesheet is imported here because Storybook does not have Drupal's
// automatic nested-SDC asset discovery.
import '../../atoms/button/button.css';

export default {
  title: 'Molecules/Callout',
  tags: ['autodocs'],

  parameters: {
    a11y: {
      test: 'error',
    },
    docs: {
      description: {
        component:
          'A reusable callout molecule that highlights important content and can compose the Button atom as an optional action.',
      },
    },
  },

  argTypes: {
    title: {
      control: 'text',
      description: 'The callout heading.',
    },

    content: {
      control: 'text',
      description: 'The main callout content.',
    },

    heading_level: {
      control: 'select',
      options: [2, 3, 4],
    },

    variant: {
      control: 'select',
      options: ['information', 'success', 'warning', 'error'],
    },

    show_button: {
      control: 'boolean',
      description: 'Shows or hides the nested Button SDC.',
    },

    button_text: {
      control: 'text',
    },

    button_url: {
      control: 'text',
    },

    button_variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },

    button_new_window: {
      control: 'boolean',
    },
  },

  render: ({
    title,
    content,
    heading_level,
    variant,
    show_button,
    button_text,
    button_url,
    button_variant,
    button_new_window,
  }) =>
    calloutTemplate({
      title,
      content,
      heading_level,
      variant,
      button: show_button
        ? {
            text: button_text,
            url: button_url,
            variant: button_variant,
            new_window: button_new_window,
          }
        : null,
    }),
};

const defaultArgs = {
  title: 'Important information',
  content:
    '<p>This callout draws attention to information that users should read before continuing.</p>',
  heading_level: 2,
  variant: 'information',
  show_button: true,
  button_text: 'Learn more',
  button_url: '#',
  button_variant: 'primary',
  button_new_window: false,
};

export const Information = {
  args: {
    ...defaultArgs,
  },
};

export const Success = {
  args: {
    ...defaultArgs,
    title: 'Your changes were saved',
    content:
      '<p>The information has been successfully updated and is now available.</p>',
    variant: 'success',
    button_text: 'View changes',
  },
};

export const Warning = {
  args: {
    ...defaultArgs,
    title: 'Check before continuing',
    content:
      '<p>Please review the information carefully before submitting this form.</p>',
    variant: 'warning',
    button_variant: 'secondary',
  },
};

export const Error = {
  args: {
    ...defaultArgs,
    title: 'There was a problem',
    content:
      '<p>We could not complete the requested action. Review the information and try again.</p>',
    variant: 'error',
    button_text: 'Try again',
  },
};

export const WithoutButton = {
  name: 'Without button',
  args: {
    ...defaultArgs,
    title: 'General information',
    content:
      '<p>This callout does not require an action and therefore has no button.</p>',
    show_button: false,
  },
};
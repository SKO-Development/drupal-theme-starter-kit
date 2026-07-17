import './arrow-right.css';

const paletteOptions = {
  'Primary': 'var(--colour-primary)',
  'Primary dark': 'var(--colour-primary-dark)',
  'Secondary': 'var(--colour-secondary)',

  'White': 'var(--colour-white)',
  'Black': 'var(--colour-black)',
  'Grey 100': 'var(--colour-grey-100)',
  'Grey 200': 'var(--colour-grey-200)',
  'Grey 500': 'var(--colour-grey-500)',
  'Grey 800': 'var(--colour-grey-800)',

  'Text': 'var(--colour-text)',
  'Background': 'var(--colour-background)',
  'Border': 'var(--colour-border)',
  'Focus': 'var(--colour-focus)',
  'Link': 'var(--colour-link)',
  'Link hover': 'var(--colour-link-hover)',
  'Error': 'var(--colour-error)',
  'Success': 'var(--colour-success)',
  'Warning': 'var(--colour-warning)',
};

const resolveColour = ({
  source,
  paletteValue,
  customValue,
  fallback = 'transparent',
}) => {
  if (source === 'palette') {
    return paletteValue;
  }

  if (source === 'custom') {
    return customValue;
  }

  return fallback;
};

const createArrowRight = args => {
  const iconColour = resolveColour({
    source: args.iconColourSource,
    paletteValue: args.iconPaletteColour,
    customValue: args.iconCustomColour,
    fallback: 'currentColor',
  });

  const backgroundColour = resolveColour({
    source: args.backgroundColourSource,
    paletteValue: args.backgroundPaletteColour,
    customValue: args.backgroundCustomColour,
  });

  const borderColour = resolveColour({
    source: args.borderColourSource,
    paletteValue: args.borderPaletteColour,
    customValue: args.borderCustomColour,
  });

  const hoverIconColour = resolveColour({
    source: args.hoverIconColourSource,
    paletteValue: args.hoverIconPaletteColour,
    customValue: args.hoverIconCustomColour,
    fallback: iconColour,
  });

  const hoverBackgroundColour = resolveColour({
    source: args.hoverBackgroundColourSource,
    paletteValue: args.hoverBackgroundPaletteColour,
    customValue: args.hoverBackgroundCustomColour,
    fallback: backgroundColour,
  });

  const hoverBorderColour = resolveColour({
    source: args.hoverBorderColourSource,
    paletteValue: args.hoverBorderPaletteColour,
    customValue: args.hoverBorderCustomColour,
    fallback: borderColour,
  });

  return `
    <span
      class="
        icon
        icon--arrow-right
        icon--size-${args.size}
        icon--shape-${args.shape}
        icon--border-${args.borderWidth}
      "
      style="
        --icon-colour: ${iconColour};
        --icon-background: ${backgroundColour};
        --icon-border-colour: ${borderColour};
        --icon-hover-colour: ${hoverIconColour};
        --icon-hover-background: ${hoverBackgroundColour};
        --icon-hover-border-colour: ${hoverBorderColour};
      "
      aria-hidden="true"
    >
      <svg
        class="icon__svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="m13 6 6 6-6 6"></path>
      </svg>
    </span>
  `;
};

export default {
  title: 'Atoms/Icons/Arrow Right',

 argTypes: {
  size: {
    name: 'Size',
    control: 'select',
    options: ['small', 'medium', 'large', 'extra-large'],
    table: {
      category: 'General',
    },
  },

  shape: {
    name: 'Container shape',
    control: 'radio',
    options: ['none', 'circle', 'square', 'rounded'],
    table: {
      category: 'General',
    },
  },

  borderWidth: {
    name: 'Border width',
    control: 'select',
    options: ['none', 'thin', 'medium', 'thick'],
    if: {
      arg: 'shape',
      neq: 'none',
    },
    table: {
      category: 'Border',
    },
  },

  /*
   * Icon colour
   */

  iconColourSource: {
    name: 'Colour source',
    control: 'radio',
    options: ['none', 'palette', 'custom'],
    table: {
      category: 'Icon colour',
    },
  },

  iconPaletteColour: {
    name: 'Palette colour',
    control: 'select',
    options: Object.keys(paletteOptions),
    mapping: paletteOptions,
    if: {
      arg: 'iconColourSource',
      eq: 'palette',
    },
    table: {
      category: 'Icon colour',
    },
  },

  iconCustomColour: {
    name: 'Custom colour',
    control: 'color',
    if: {
      arg: 'iconColourSource',
      eq: 'custom',
    },
    table: {
      category: 'Icon colour',
    },
  },

  /*
   * Background colour
   */

  backgroundColourSource: {
    name: 'Colour source',
    control: 'radio',
    options: ['none', 'palette', 'custom'],
    if: {
      arg: 'shape',
      neq: 'none',
    },
    table: {
      category: 'Background',
    },
  },

  backgroundPaletteColour: {
    name: 'Palette colour',
    control: 'select',
    options: Object.keys(paletteOptions),
    mapping: paletteOptions,
    if: {
      arg: 'backgroundColourSource',
      eq: 'palette',
    },
    table: {
      category: 'Background',
    },
  },

  backgroundCustomColour: {
    name: 'Custom colour',
    control: 'color',
    if: {
      arg: 'backgroundColourSource',
      eq: 'custom',
    },
    table: {
      category: 'Background',
    },
  },

  /*
   * Border colour
   */

  borderColourSource: {
    name: 'Colour source',
    control: 'radio',
    options: ['none', 'palette', 'custom'],
    if: {
      arg: 'shape',
      neq: 'none',
    },
    table: {
      category: 'Border',
    },
  },

  borderPaletteColour: {
    name: 'Palette colour',
    control: 'select',
    options: Object.keys(paletteOptions),
    mapping: paletteOptions,
    if: {
      arg: 'borderColourSource',
      eq: 'palette',
    },
    table: {
      category: 'Border',
    },
  },

  borderCustomColour: {
    name: 'Custom colour',
    control: 'color',
    if: {
      arg: 'borderColourSource',
      eq: 'custom',
    },
    table: {
      category: 'Border',
    },
  },

  /*
   * Hover icon colour
   */

  hoverIconColourSource: {
    name: 'Icon colour source',
    control: 'radio',
    options: ['none', 'palette', 'custom'],
    table: {
      category: 'Hover',
    },
  },

  hoverIconPaletteColour: {
    name: 'Icon palette colour',
    control: 'select',
    options: Object.keys(paletteOptions),
    mapping: paletteOptions,
    if: {
      arg: 'hoverIconColourSource',
      eq: 'palette',
    },
    table: {
      category: 'Hover',
    },
  },

  hoverIconCustomColour: {
    name: 'Icon custom colour',
    control: 'color',
    if: {
      arg: 'hoverIconColourSource',
      eq: 'custom',
    },
    table: {
      category: 'Hover',
    },
  },

  /*
   * Hover background colour
   */

  hoverBackgroundColourSource: {
    name: 'Background colour source',
    control: 'radio',
    options: ['none', 'palette', 'custom'],
    if: {
      arg: 'shape',
      neq: 'none',
    },
    table: {
      category: 'Hover',
    },
  },

  hoverBackgroundPaletteColour: {
    name: 'Background palette colour',
    control: 'select',
    options: Object.keys(paletteOptions),
    mapping: paletteOptions,
    if: {
      arg: 'hoverBackgroundColourSource',
      eq: 'palette',
    },
    table: {
      category: 'Hover',
    },
  },

  hoverBackgroundCustomColour: {
    name: 'Background custom colour',
    control: 'color',
    if: {
      arg: 'hoverBackgroundColourSource',
      eq: 'custom',
    },
    table: {
      category: 'Hover',
    },
  },

  /*
   * Hover border colour
   */

  hoverBorderColourSource: {
    name: 'Border colour source',
    control: 'radio',
    options: ['none', 'palette', 'custom'],
    if: {
      arg: 'shape',
      neq: 'none',
    },
    table: {
      category: 'Hover',
    },
  },

  hoverBorderPaletteColour: {
    name: 'Border palette colour',
    control: 'select',
    options: Object.keys(paletteOptions),
    mapping: paletteOptions,
    if: {
      arg: 'hoverBorderColourSource',
      eq: 'palette',
    },
    table: {
      category: 'Hover',
    },
  },

  hoverBorderCustomColour: {
    name: 'Border custom colour',
    control: 'color',
    if: {
      arg: 'hoverBorderColourSource',
      eq: 'custom',
    },
    table: {
      category: 'Hover',
    },
  },
},
};

export const Basic = {
  args: {
    size: 'medium',
    shape: 'none',
    borderWidth: 'none',

    iconColourSource: 'palette',
    iconPaletteColour: 'var(--colour-text)',
    iconCustomColour: '#242424',

    backgroundColourSource: 'none',
    backgroundPaletteColour: 'var(--colour-background)',
    backgroundCustomColour: '#ffffff',

    borderColourSource: 'none',
    borderPaletteColour: 'var(--colour-border)',
    borderCustomColour: '#e5e5e5',

    hoverIconColourSource: 'none',
    hoverIconPaletteColour: 'var(--colour-white)',
    hoverIconCustomColour: '#ffffff',

    hoverBackgroundColourSource: 'none',
    hoverBackgroundPaletteColour: 'var(--colour-primary)',
    hoverBackgroundCustomColour: '#005ea8',

    hoverBorderColourSource: 'none',
    hoverBorderPaletteColour: 'var(--colour-primary)',
    hoverBorderCustomColour: '#005ea8',
  },

  render: args => `
    <div style="padding: 2rem;">
      <button
        type="button"
        aria-label="Continue"
        style="
          display: inline-flex;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        "
      >
        ${createArrowRight(args)}
      </button>
    </div>
  `,
};
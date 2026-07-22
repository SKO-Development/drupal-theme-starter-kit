import '../../styles/foundation/borders-radius.css';

export default {
  title: 'Foundation/Borders and Radius',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const borderWidths = [
  {
    name: 'None',
    token: '--border-width-none',
    value: '0',
    className: 'storybook-borders__sample--width-none',
  },
  {
    name: 'Thin',
    token: '--border-width-thin',
    value: '1px',
    className: 'storybook-borders__sample--width-thin',
  },
  {
    name: 'Medium',
    token: '--border-width-medium',
    value: '2px',
    className: 'storybook-borders__sample--width-medium',
  },
  {
    name: 'Thick',
    token: '--border-width-thick',
    value: '4px',
    className: 'storybook-borders__sample--width-thick',
  },
];

const borderStyles = [
  {
    name: 'Solid',
    token: '--border-style-solid',
    value: 'solid',
    className: 'storybook-borders__sample--style-solid',
  },
  {
    name: 'Dashed',
    token: '--border-style-dashed',
    value: 'dashed',
    className: 'storybook-borders__sample--style-dashed',
  },
  {
    name: 'Dotted',
    token: '--border-style-dotted',
    value: 'dotted',
    className: 'storybook-borders__sample--style-dotted',
  },
];

const borderRadii = [
  {
    name: 'None',
    token: '--border-radius-none',
    value: '0',
    className: 'storybook-borders__sample--radius-none',
  },
  {
    name: 'Small',
    token: '--border-radius-small',
    value: '0.25rem',
    className: 'storybook-borders__sample--radius-small',
  },
  {
    name: 'Medium',
    token: '--border-radius-medium',
    value: '0.5rem',
    className: 'storybook-borders__sample--radius-medium',
  },
  {
    name: 'Large',
    token: '--border-radius-large',
    value: '1rem',
    className: 'storybook-borders__sample--radius-large',
  },
  {
    name: 'Extra large',
    token: '--border-radius-extra-large',
    value: '1.5rem',
    className: 'storybook-borders__sample--radius-extra-large',
  },
  {
    name: 'Round',
    token: '--border-radius-round',
    value: '50%',
    className: 'storybook-borders__sample--radius-round',
  },
  {
    name: 'Pill',
    token: '--border-radius-pill',
    value: '9999px',
    className: 'storybook-borders__sample--radius-pill',
  },
];

const createTokenItem = item => `
  <article class="storybook-borders__item">
    <div class="storybook-borders__sample ${item.className}">
      ${item.name}
    </div>

    <div class="storybook-borders__details">
      <h3 class="storybook-borders__name">
        ${item.name}
      </h3>

      <code class="storybook-borders__token">
        var(${item.token})
      </code>

      <p class="storybook-borders__value">
        ${item.value}
      </p>
    </div>
  </article>
`;

export const BordersAndRadius = {
  name: 'Borders and radius',

  render: () => `
    <main class="storybook-borders">
      <header class="storybook-borders__intro">
        <h1>Borders and radius</h1>

        <p>
          Borders create visual separation and define component boundaries.
          Border radius controls the shape of corners and should be applied
          consistently across the interface.
        </p>
      </header>

      <section class="storybook-borders__section">
        <h2 class="storybook-borders__section-heading">
          Border widths
        </h2>

        <p class="storybook-borders__section-description">
          Use the standard border-width scale rather than introducing
          component-specific values.
        </p>

        <div
          class="storybook-borders__grid"
          aria-label="Border width tokens"
        >
          ${borderWidths.map(createTokenItem).join('')}
        </div>
      </section>

      <section class="storybook-borders__section">
        <h2 class="storybook-borders__section-heading">
          Border styles
        </h2>

        <p class="storybook-borders__section-description">
          Solid borders should be the default. Dashed and dotted borders
          should only be used where they communicate a recognised meaning.
        </p>

        <div
          class="storybook-borders__grid"
          aria-label="Border style tokens"
        >
          ${borderStyles.map(createTokenItem).join('')}
        </div>
      </section>

      <section class="storybook-borders__section">
        <h2 class="storybook-borders__section-heading">
          Border radius
        </h2>

        <p class="storybook-borders__section-description">
          Radius tokens provide consistent corner treatments for controls,
          cards, panels, badges and other interface elements.
        </p>

        <div
          class="storybook-borders__grid"
          aria-label="Border radius tokens"
        >
          ${borderRadii.map(createTokenItem).join('')}
        </div>
      </section>

      <section class="storybook-borders__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Use borders to provide a clear boundary where background colour
            or elevation alone is insufficient.
          </li>

          <li>
            Use the same radius consistently across related components.
          </li>

          <li>
            Avoid combining several different radius values within one
            component.
          </li>

          <li>
            Use the round token only on elements with equal width and height.
          </li>

          <li>
            Use the pill token for badges, tags and controls intended to have
            fully rounded ends.
          </li>

          <li>
            Do not rely on border colour alone to communicate errors,
            selection or status.
          </li>
        </ul>
      </section>
    </main>
  `,
};
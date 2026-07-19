import '../../styles/foundation/focus-styles.css';

export default {
  title: 'Foundation/Focus Styles',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const focusTokens = [
  {
    name: 'Focus colour',
    token: '--focus-colour',
    description:
      'The standard colour used to identify keyboard focus.',
  },
  {
    name: 'Focus width',
    token: '--focus-width',
    description:
      'The standard thickness of the visible focus indicator.',
  },
  {
    name: 'Focus offset',
    token: '--focus-offset',
    description:
      'The space between the focused element and its focus indicator.',
  },
  {
    name: 'Focus ring',
    token: '--focus-ring',
    description:
      'The complete reusable outline definition for standard focus.',
  },
];

const createTokenCard = item => `
  <article class="storybook-focus__token-card">
    <h3>${item.name}</h3>

    <p>${item.description}</p>

    <code class="storybook-focus__token">
      var(${item.token})
    </code>
  </article>
`;

export const FocusStyles = {
  name: 'Focus styles',

  render: () => `
    <main class="storybook-focus">
      <header class="storybook-focus__intro">
        <h1>Focus styles</h1>

        <p>
          Focus indicators show keyboard users which interactive element is
          currently active. Every keyboard-operable control must have a clear,
          consistent and visible focus state.
        </p>
      </header>

      <section class="storybook-focus__section">
        <h2 class="storybook-focus__section-heading">
          Focus tokens
        </h2>

        <p class="storybook-focus__section-description">
          Components should use the shared focus tokens rather than defining
          individual focus colours, widths or offsets.
        </p>

        <div class="storybook-focus__token-grid">
          ${focusTokens.map(createTokenCard).join('')}
        </div>
      </section>

      <section class="storybook-focus__section">
        <h2 class="storybook-focus__section-heading">
          Standard focus indicator
        </h2>

        <p class="storybook-focus__section-description">
          The standard focus ring should be the default treatment for
          interactive components. Use the Tab key to move through the
          examples.
        </p>

        <div class="storybook-focus__example">
          <div class="storybook-focus__keyboard-demo">
            <button
              class="storybook-focus__button"
              type="button"
            >
              Button
            </button>

            <a
              class="storybook-focus__link"
              href="#focus-backgrounds"
            >
              Text link
            </a>

            <button
              class="storybook-focus__icon-button"
              type="button"
              aria-label="Add item"
            >
              +
            </button>
          </div>
        </div>

        <div class="storybook-focus__code">
          <pre><code>.component:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}</code></pre>
        </div>
      </section>

      <section
        class="storybook-focus__section"
        id="focus-backgrounds"
      >
        <h2 class="storybook-focus__section-heading">
          Focus on different backgrounds
        </h2>

        <p class="storybook-focus__section-description">
          Focus indicators must remain clearly visible wherever a component
          can appear. Test components against every supported background
          colour.
        </p>

        <div class="storybook-focus__demo-grid">
          <div
            class="
              storybook-focus__demo
              storybook-focus__demo--light
            "
          >
            <button
              class="storybook-focus__button"
              type="button"
            >
              Light background
            </button>
          </div>

          <div
            class="
              storybook-focus__demo
              storybook-focus__demo--grey
            "
          >
            <button
              class="storybook-focus__button"
              type="button"
            >
              Grey background
            </button>
          </div>

          <div
            class="
              storybook-focus__demo
              storybook-focus__demo--primary
            "
          >
            <button
              class="
                storybook-focus__button
                storybook-focus__button--light
              "
              type="button"
            >
              Primary background
            </button>
          </div>

          <div
            class="
              storybook-focus__demo
              storybook-focus__demo--dark
            "
          >
            <a
              class="
                storybook-focus__link
                storybook-focus__link--light
              "
              href="#component-focus"
            >
              Dark background
            </a>
          </div>
        </div>
      </section>

      <section class="storybook-focus__section">
        <h2 class="storybook-focus__section-heading">
          Interaction states
        </h2>

        <p class="storybook-focus__section-description">
          Focus is a distinct interaction state. It should not be represented
          only by the same visual treatment used for hover.
        </p>

        <div class="storybook-focus__states">
          <div class="storybook-focus__state">
            <p class="storybook-focus__state-label">
              Default
            </p>

            <button
              class="storybook-focus__state-button"
              type="button"
            >
              Action
            </button>
          </div>

          <div class="storybook-focus__state">
            <p class="storybook-focus__state-label">
              Hover
            </p>

            <button
              class="
                storybook-focus__state-button
                storybook-focus__state-button--hover
              "
              type="button"
            >
              Action
            </button>
          </div>

          <div class="storybook-focus__state">
            <p class="storybook-focus__state-label">
              Focus
            </p>

            <button
              class="
                storybook-focus__state-button
                storybook-focus__state-button--focus
              "
              type="button"
            >
              Action
            </button>
          </div>

          <div class="storybook-focus__state">
            <p class="storybook-focus__state-label">
              Disabled
            </p>

            <button
              class="
                storybook-focus__state-button
                storybook-focus__state-button--disabled
              "
              type="button"
              disabled
            >
              Action
            </button>
          </div>
        </div>
      </section>

      <section class="storybook-focus__section">
        <h2 class="storybook-focus__section-heading">
          Component shapes
        </h2>

        <p class="storybook-focus__section-description">
          The focus indicator should follow the shape of the component while
          retaining the same focus colour, width and offset.
        </p>

        <div class="storybook-focus__example">
          <div class="storybook-focus__shapes">
            <button
              class="
                storybook-focus__shape
                storybook-focus__shape--square
              "
              type="button"
            >
              Square
            </button>

            <button
              class="
                storybook-focus__shape
                storybook-focus__shape--rounded
              "
              type="button"
            >
              Rounded
            </button>

            <button
              class="
                storybook-focus__shape
                storybook-focus__shape--pill
              "
              type="button"
            >
              Pill
            </button>

            <button
              class="
                storybook-focus__shape
                storybook-focus__shape--round
              "
              type="button"
              aria-label="Add item"
            >
              +
            </button>
          </div>
        </div>
      </section>

      <section
        class="storybook-focus__section"
        id="component-focus"
      >
        <h2 class="storybook-focus__section-heading">
          Component-level focus
        </h2>

        <p class="storybook-focus__section-description">
          When an entire card or other large surface is interactive, the
          focus indicator should clearly identify the complete interactive
          region.
        </p>

        <div class="storybook-focus__example">
          <a
            class="storybook-focus__card-link"
            href="#focus-guidance"
          >
            <h3>Accessible interactive card</h3>

            <p>
              Keyboard focus surrounds the complete clickable area so the
              interactive boundary is clear.
            </p>
          </a>
        </div>
      </section>

      <section class="storybook-focus__section">
        <h2 class="storybook-focus__section-heading">
          Inset focus
        </h2>

        <p class="storybook-focus__section-description">
          Use an inset focus indicator only when a standard external outline
          would be clipped or cannot be displayed reliably.
        </p>

        <div class="storybook-focus__inset-container">
          <button
            class="storybook-focus__inset-button"
            type="button"
          >
            Inset focus example
          </button>
        </div>

        <div class="storybook-focus__code">
          <pre><code>.component:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring-inset);
}</code></pre>
        </div>
      </section>

      <section class="storybook-focus__section">
        <h2 class="storybook-focus__section-heading">
          Use focus-visible
        </h2>

        <p class="storybook-focus__section-description">
          Use :focus-visible for custom keyboard focus styling where
          appropriate. This allows the browser to determine when a visible
          focus indicator should be presented based on the user's interaction.
        </p>

        <div class="storybook-focus__comparison-grid">
          <article
            class="
              storybook-focus__comparison
              storybook-focus__comparison--good
            "
          >
            <span class="storybook-focus__comparison-label">
              Use
            </span>

            <h3>:focus-visible</h3>

            <p>
              Provide a strong focus indicator for keyboard interaction while
              retaining expected browser focus behaviour.
            </p>
          </article>

          <article
            class="
              storybook-focus__comparison
              storybook-focus__comparison--bad
            "
          >
            <span class="storybook-focus__comparison-label">
              Avoid
            </span>

            <h3>outline: none</h3>

            <p>
              Never remove the browser focus indicator unless an equally or
              more visible replacement is provided.
            </p>
          </article>
        </div>
      </section>

      <section
        class="storybook-focus__guidance"
        id="focus-guidance"
      >
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Every keyboard-operable component must have a visible focus
            indicator.
          </li>

          <li>
            Use the shared focus tokens rather than creating component-specific
            focus colours or widths.
          </li>

          <li>
            Prefer the standard external focus ring wherever possible.
          </li>

          <li>
            Use inset focus only when an external outline would be clipped.
          </li>

          <li>
            Test focus indicators against every background on which a
            component may appear.
          </li>

          <li>
            Do not use hover styling as the only indication of keyboard focus.
          </li>

          <li>
            Do not remove outlines without providing an accessible
            replacement.
          </li>

          <li>
            Focus must remain visible when components are hovered, selected,
            expanded or active.
          </li>

          <li>
            Do not move keyboard focus automatically unless the interaction
            requires a deliberate focus change.
          </li>

          <li>
            Preserve a logical focus order that matches the meaning and
            structure of the content.
          </li>

          <li>
            Test focus styles with keyboard navigation and Windows forced
            colours or high-contrast modes.
          </li>
        </ul>
      </section>
    </main>
  `,
};
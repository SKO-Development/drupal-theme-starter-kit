import '../../styles/foundation/animation-motion.css';

export default {
  title: 'Foundation/Animation and Motion',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const durations = [
  {
    name: 'Instant',
    token: '--motion-duration-instant',
    value: '0ms',
    className: 'storybook-motion__demo--instant',
    usage: 'Immediate state changes where animation provides no benefit.',
  },
  {
    name: 'Fast',
    token: '--motion-duration-fast',
    value: '150ms',
    className: 'storybook-motion__demo--fast',
    usage: 'Hover, focus and small control-state transitions.',
  },
  {
    name: 'Medium',
    token: '--motion-duration-medium',
    value: '250ms',
    className: 'storybook-motion__demo--medium',
    usage: 'Component expansion, selection and standard interface changes.',
  },
  {
    name: 'Slow',
    token: '--motion-duration-slow',
    value: '400ms',
    className: 'storybook-motion__demo--slow',
    usage: 'Larger panels, drawers and prominent layout transitions.',
  },
];

const easings = [
  {
    name: 'Linear',
    token: '--motion-easing-linear',
    value: 'linear',
    className: 'storybook-motion__demo--linear',
    usage: 'Continuous or mechanical movement.',
  },
  {
    name: 'Standard',
    token: '--motion-easing-standard',
    value: 'ease',
    className: 'storybook-motion__demo--standard',
    usage: 'General interface transitions.',
  },
  {
    name: 'Enter',
    token: '--motion-easing-enter',
    value: 'ease-out',
    className: 'storybook-motion__demo--enter',
    usage: 'Elements entering or becoming visible.',
  },
  {
    name: 'Exit',
    token: '--motion-easing-exit',
    value: 'ease-in',
    className: 'storybook-motion__demo--exit',
    usage: 'Elements leaving or becoming hidden.',
  },
];

const motionPatterns = [
  {
    name: 'Fade in',
    className: 'storybook-motion__pattern--fade-in',
    label: 'Fade in',
    properties: ['opacity'],
    timing: '--motion-transition-enter',
    usage: 'Revealing alerts, tooltips, overlays and supporting content.',
  },
  {
    name: 'Fade out',
    className: 'storybook-motion__pattern--fade-out',
    label: 'Fade out',
    properties: ['opacity'],
    timing: '--motion-transition-exit',
    usage: 'Hiding notices, overlays and content that is being dismissed.',
  },
  {
    name: 'Scale up',
    className: 'storybook-motion__pattern--scale-up',
    label: 'Scale up',
    properties: ['transform'],
    timing: '--motion-transition-fast',
    usage: 'Subtle emphasis for icons and small interactive controls.',
  },
  {
    name: 'Scale down',
    className: 'storybook-motion__pattern--scale-down',
    label: 'Scale down',
    properties: ['transform'],
    timing: '--motion-transition-fast',
    usage: 'Pressed states and elements moving into the background.',
  },
  {
    name: 'Slide up',
    className: 'storybook-motion__pattern--slide-up',
    label: 'Slide up',
    properties: ['transform'],
    timing: '--motion-transition-enter',
    usage: 'Toasts, menus and content entering from below.',
  },
  {
    name: 'Slide down',
    className: 'storybook-motion__pattern--slide-down',
    label: 'Slide down',
    properties: ['transform'],
    timing: '--motion-transition-enter',
    usage: 'Dropdowns, accordions and content entering from above.',
  },
  {
    name: 'Slide left',
    className: 'storybook-motion__pattern--slide-left',
    label: 'Slide left',
    properties: ['transform'],
    timing: '--motion-transition-enter',
    usage: 'Panels or content entering from the right.',
  },
  {
    name: 'Slide right',
    className: 'storybook-motion__pattern--slide-right',
    label: 'Slide right',
    properties: ['transform'],
    timing: '--motion-transition-enter',
    usage: 'Panels or content entering from the left.',
  },
  {
    name: 'Rotate',
    className: 'storybook-motion__pattern--rotate',
    label: '↻',
    properties: ['transform'],
    timing: '--motion-transition-medium',
    usage: 'Expand indicators, refresh controls and directional icons.',
  },
  {
    name: 'Lift',
    className: 'storybook-motion__pattern--lift',
    label: 'Lift',
    properties: ['transform', 'box-shadow'],
    timing: '--motion-transition-fast',
    usage: 'Interactive cards and selectable raised surfaces.',
  },
  {
    name: 'Press',
    className: 'storybook-motion__pattern--press',
    label: 'Press',
    properties: ['transform', 'box-shadow'],
    timing: '--motion-transition-fast',
    usage: 'Buttons and controls that visually respond to activation.',
  },
  {
    name: 'Icon grow',
    className: 'storybook-motion__pattern--icon-grow',
    label: '★',
    properties: ['transform'],
    timing: '--motion-transition-fast',
    usage: 'Subtle icon emphasis within interactive controls.',
  },
  {
    name: 'Colour transition',
    className: 'storybook-motion__pattern--colour',
    label: 'Colour',
    properties: ['background-color', 'color'],
    timing: '--motion-transition-fast',
    usage: 'Buttons, links, tags and selectable elements.',
  },
  {
    name: 'Border transition',
    className: 'storybook-motion__pattern--border',
    label: 'Border',
    properties: ['border-color', 'border-width'],
    timing: '--motion-transition-fast',
    usage: 'Inputs, cards, selection states and validation feedback.',
  },
  {
    name: 'Underline reveal',
    className: 'storybook-motion__pattern-link',
    label: 'Underline reveal',
    properties: ['transform'],
    timing: '--motion-transition-fast',
    usage: 'Links and navigation items where additional emphasis is useful.',
    element: 'link',
  },
];

const createMotionItem = item => `
  <article class="storybook-motion__item">
    <div
      class="storybook-motion__sample"
      tabindex="0"
      aria-label="Preview ${item.name} motion"
    >
      <div
        class="
          storybook-motion__demo
          ${item.className}
        "
        aria-hidden="true"
      ></div>
    </div>

    <div class="storybook-motion__details">
      <h3 class="storybook-motion__name">
        ${item.name}
      </h3>

      <code class="storybook-motion__token">
        var(${item.token})
      </code>

      <p class="storybook-motion__value">
        ${item.value}
      </p>

      <p class="storybook-motion__usage">
        ${item.usage}
      </p>

      <p class="storybook-motion__hint">
        Hover over or focus the example to preview it.
      </p>
    </div>
  </article>
`;

const createPatternObject = pattern => {
  if (pattern.element === 'link') {
    return `
      <span class="${pattern.className}">
        ${pattern.label}
      </span>
    `;
  }

  return `
    <div
      class="
        storybook-motion__pattern-object
        ${pattern.className}
      "
      aria-hidden="true"
    >
      ${pattern.label}
    </div>
  `;
};

const createPatternItem = pattern => `
  <article class="storybook-motion__item">
    <div
      class="storybook-motion__pattern-sample"
      tabindex="0"
      aria-label="Preview ${pattern.name} motion"
    >
      ${createPatternObject(pattern)}
    </div>

    <div class="storybook-motion__details">
      <h3 class="storybook-motion__name">
        ${pattern.name}
      </h3>

      <div class="storybook-motion__pattern-code">
        ${pattern.properties
          .map(
            property => `
              <code class="storybook-motion__token">
                ${property}
              </code>
            `,
          )
          .join('')}
      </div>

      <code class="storybook-motion__token">
        var(${pattern.timing})
      </code>

      <p class="storybook-motion__usage">
        ${pattern.usage}
      </p>

      <p class="storybook-motion__hint">
        Hover over or focus the example to preview it.
      </p>
    </div>
  </article>
`;

export const AnimationAndMotion = {
  name: 'Animation and motion',

  render: () => `
    <main class="storybook-motion">
      <header class="storybook-motion__intro">
        <h1>Animation and motion</h1>

        <p>
          Motion helps communicate changes in state, relationships between
          interface elements and the result of a user action. It should remain
          purposeful, predictable and subtle.
        </p>
      </header>

      <section class="storybook-motion__section">
        <h2 class="storybook-motion__section-heading">
          Duration
        </h2>

        <p class="storybook-motion__section-description">
          Duration tokens define how quickly transitions occur. Use shorter
          durations for small interactions and longer durations for larger
          interface changes.
        </p>

        <div
          class="storybook-motion__grid"
          aria-label="Motion duration tokens"
        >
          ${durations.map(createMotionItem).join('')}
        </div>
      </section>

      <section class="storybook-motion__section">
        <h2 class="storybook-motion__section-heading">
          Easing
        </h2>

        <p class="storybook-motion__section-description">
          Easing controls how movement accelerates and slows over time.
          Select an easing token that reflects the purpose of the transition.
        </p>

        <div
          class="storybook-motion__grid"
          aria-label="Motion easing tokens"
        >
          ${easings.map(createMotionItem).join('')}
        </div>
      </section>

      <section class="storybook-motion__section">
        <h2 class="storybook-motion__section-heading">
          Common motion patterns
        </h2>

        <p class="storybook-motion__section-description">
          These patterns provide consistent starting points for common
          component interactions. Use the pattern that best communicates the
          relationship or state change rather than introducing unnecessary
          custom movement.
        </p>

        <div
          class="storybook-motion__patterns-grid"
          aria-label="Common motion patterns"
        >
          ${motionPatterns.map(createPatternItem).join('')}
        </div>
      </section>

      <section class="storybook-motion__section">
        <h2 class="storybook-motion__section-heading">
          Implementation example
        </h2>

        <p class="storybook-motion__section-description">
          Combine the appropriate duration and easing tokens when defining a
          component transition.
        </p>

        <div class="storybook-motion__code">
          <pre><code>.component {
  transition:
    background-color
    var(--motion-duration-fast)
    var(--motion-easing-standard);
}</code></pre>
        </div>
      </section>

      <section class="storybook-motion__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Use motion to explain a state change or reinforce a user action.
          </li>

          <li>
            Use the established patterns before creating component-specific
            motion.
          </li>

          <li>
            Avoid decorative movement that distracts from page content.
          </li>

          <li>
            Keep frequently repeated interactions short and subtle.
          </li>

          <li>
            Do not delay access to information while animation completes.
          </li>

          <li>
            Avoid flashing, rapid movement and unnecessary looping animation.
          </li>

          <li>
            Do not rely on animation alone to communicate meaning or status.
          </li>

          <li>
            Respect the user’s reduced-motion operating system preference.
          </li>
        </ul>
      </section>
    </main>
  `,
};
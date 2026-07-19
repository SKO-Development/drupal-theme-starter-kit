import '../../styles/foundation/breakpoints-responsive.css';

export default {
  title: 'Foundation/Breakpoints and Responsive Behaviour',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const breakpoints = [
  {
    name: 'Small',
    token: '--breakpoint-small',
    value: '36rem / 576px',
    className: 'storybook-responsive__device--small',
    usage: 'Large phones and compact layouts.',
  },
  {
    name: 'Medium',
    token: '--breakpoint-medium',
    value: '48rem / 768px',
    className: 'storybook-responsive__device--medium',
    usage: 'Tablets, narrow desktop windows and two-column layouts.',
  },
  {
    name: 'Large',
    token: '--breakpoint-large',
    value: '64rem / 1024px',
    className: 'storybook-responsive__device--large',
    usage: 'Desktop navigation and wider page layouts.',
  },
  {
    name: 'Extra large',
    token: '--breakpoint-extra-large',
    value: '75rem / 1200px',
    className: 'storybook-responsive__device--extra-large',
    usage: 'Large desktop layouts and maximum-width containers.',
  },
];

const testingItems = [
  {
    name: 'Narrow viewport',
    description:
      'Test down to 320 CSS pixels without horizontal page scrolling.',
  },
  {
    name: 'Text zoom',
    description:
      'Test at 200% browser zoom and confirm that content remains usable.',
  },
  {
    name: 'Text spacing',
    description:
      'Increase line, paragraph, letter and word spacing without clipping.',
  },
  {
    name: 'Long content',
    description:
      'Test long headings, links, labels and translated content.',
  },
  {
    name: 'Keyboard navigation',
    description:
      'Confirm that responsive changes do not alter logical focus order.',
  },
  {
    name: 'Touch interaction',
    description:
      'Confirm controls remain large enough and are not placed too closely.',
  },
];

const createBreakpointItem = item => `
  <article class="storybook-responsive__token-item">
    <div class="storybook-responsive__token-preview">
      <div
        class="
          storybook-responsive__device
          ${item.className}
        "
        aria-hidden="true"
      >
        ${item.name}
      </div>
    </div>

    <div class="storybook-responsive__details">
      <h3 class="storybook-responsive__name">
        ${item.name}
      </h3>

      <code class="storybook-responsive__token">
        var(${item.token})
      </code>

      <p class="storybook-responsive__value">
        ${item.value}
      </p>

      <p class="storybook-responsive__usage">
        ${item.usage}
      </p>
    </div>
  </article>
`;

const createTestingItem = item => `
  <article class="storybook-responsive__testing-item">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
  </article>
`;

export const BreakpointsAndResponsiveBehaviour = {
  name: 'Breakpoints and responsive behaviour',

  render: () => `
    <main class="storybook-responsive">
      <header class="storybook-responsive__intro">
        <h1>Breakpoints and responsive behaviour</h1>

        <p>
          Responsive interfaces should adapt to the available space rather
          than target specific devices. Begin with a simple mobile layout and
          introduce additional layout complexity only when the content has
          enough room.
        </p>
      </header>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Breakpoints
        </h2>

        <p class="storybook-responsive__section-description">
          Breakpoints identify points where the layout requires a meaningful
          structural change. They should respond to content needs rather than
          particular device models.
        </p>

        <div
          class="storybook-responsive__token-grid"
          aria-label="Responsive breakpoint tokens"
        >
          ${breakpoints.map(createBreakpointItem).join('')}
        </div>
      </section>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Mobile-first approach
        </h2>

        <p class="storybook-responsive__section-description">
          Define the simplest single-column layout first. Add columns,
          enhanced navigation and wider spacing progressively as more space
          becomes available.
        </p>

        <div class="storybook-responsive__code">
          <pre><code>.component-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--layout-grid-gap-small);
}

@media (min-width: 48rem) {
  .component-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--layout-grid-gap-medium);
  }
}

@media (min-width: 64rem) {
  .component-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--layout-grid-gap-large);
  }
}</code></pre>
        </div>
      </section>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Responsive component grid
        </h2>

        <p class="storybook-responsive__section-description">
          Resize the preview horizontally. The cards respond to the available
          component width using container queries rather than the full browser
          viewport.
        </p>

        <div class="storybook-responsive__example">
          <p class="storybook-responsive__viewport-instructions">
            Drag the bottom-right resize handle to change the preview width.
          </p>

          <div class="storybook-responsive__viewport">
            <div class="storybook-responsive__demo-grid">
              <div class="storybook-responsive__demo-card">
                Item 1
              </div>

              <div class="storybook-responsive__demo-card">
                Item 2
              </div>

              <div class="storybook-responsive__demo-card">
                Item 3
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Page reflow
        </h2>

        <p class="storybook-responsive__section-description">
          Page regions should stack in a meaningful source order on narrow
          screens and only move into columns when sufficient space exists.
        </p>

        <div class="storybook-responsive__example">
          <div class="storybook-responsive__page-layout">
            <div
              class="
                storybook-responsive__region
                storybook-responsive__page-header
              "
            >
              Header
            </div>

            <div
              class="
                storybook-responsive__region
                storybook-responsive__region--primary
                storybook-responsive__page-main
              "
            >
              Main content
            </div>

            <div
              class="
                storybook-responsive__region
                storybook-responsive__page-sidebar
              "
            >
              Sidebar
            </div>

            <div
              class="
                storybook-responsive__region
                storybook-responsive__page-footer
              "
            >
              Footer
            </div>
          </div>
        </div>
      </section>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Responsive navigation
        </h2>

        <p class="storybook-responsive__section-description">
          Navigation may change presentation as space decreases, but links,
          labels and reading order should remain consistent.
        </p>

        <div class="storybook-responsive__example">
          <nav
            class="storybook-responsive__navigation"
            aria-label="Responsive navigation example"
          >
            <button
              class="storybook-responsive__navigation-toggle"
              type="button"
            >
              Menu
            </button>

            <ul class="storybook-responsive__navigation-list">
              <li>
                <a
                  class="storybook-responsive__navigation-link"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  class="storybook-responsive__navigation-link"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  class="storybook-responsive__navigation-link"
                  href="#"
                >
                  Resources
                </a>
              </li>

              <li>
                <a
                  class="storybook-responsive__navigation-link"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Content priority
        </h2>

        <p class="storybook-responsive__section-description">
          Responsive layouts should preserve important content rather than
          hiding it solely to make a narrow layout fit.
        </p>

        <div class="storybook-responsive__priority-layout">
          <article class="storybook-responsive__priority-primary">
            <h3>Primary content</h3>

            <p>
              Essential information and primary actions should remain visible
              at every viewport size.
            </p>
          </article>

          <article class="storybook-responsive__priority-secondary">
            <h3>Secondary content</h3>

            <p>
              Supporting information may move below the main content when
              space becomes limited.
            </p>
          </article>

          <article class="storybook-responsive__priority-tertiary">
            <h3>Tertiary content</h3>

            <p>
              Optional information may be condensed, but it should remain
              available when users need it.
            </p>
          </article>
        </div>
      </section>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Wide content
        </h2>

        <p class="storybook-responsive__section-description">
          Some content, such as complex data tables, may require local
          horizontal scrolling. The page itself should not scroll
          horizontally.
        </p>

        <div
          class="storybook-responsive__table-wrapper"
          tabindex="0"
          aria-label="Scrollable responsive table example"
        >
          <table class="storybook-responsive__table">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Status</th>
                <th scope="col">Owner</th>
                <th scope="col">Last updated</th>
                <th scope="col">Next review</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Provider register</td>
                <td>Available</td>
                <td>Digital services</td>
                <td>12 July 2026</td>
                <td>12 October 2026</td>
              </tr>

              <tr>
                <td>Public search</td>
                <td>Available</td>
                <td>Web operations</td>
                <td>10 July 2026</td>
                <td>10 October 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="storybook-responsive__section">
        <h2 class="storybook-responsive__section-heading">
          Responsive testing
        </h2>

        <p class="storybook-responsive__section-description">
          Responsive testing must include more than changing the browser
          width. Components should also be tested with zoom, text changes,
          keyboard navigation and realistic content.
        </p>

        <div class="storybook-responsive__testing-grid">
          ${testingItems.map(createTestingItem).join('')}
        </div>
      </section>

      <section class="storybook-responsive__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Start with a single-column mobile layout and enhance it at wider
            breakpoints.
          </li>

          <li>
            Introduce breakpoints when the content requires them rather than
            targeting specific devices.
          </li>

          <li>
            Use relative units such as rem for breakpoints and layout sizing.
          </li>

          <li>
            Prefer container queries for components that can appear in
            differently sized regions.
          </li>

          <li>
            Preserve meaningful source order when layouts change.
          </li>

          <li>
            Do not hide essential content or actions on smaller screens.
          </li>

          <li>
            Avoid fixed widths and heights that prevent content from reflowing.
          </li>

          <li>
            Keep touch targets at least
            var(--responsive-touch-target-minimum) in both dimensions.
          </li>

          <li>
            Allow wide tables and code examples to scroll within their own
            container rather than causing page-level horizontal scrolling.
          </li>

          <li>
            Test every component at narrow widths, 200% zoom and with long
            content.
          </li>
        </ul>
      </section>
    </main>
  `,
};
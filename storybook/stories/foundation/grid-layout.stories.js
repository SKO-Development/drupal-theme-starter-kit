import '../../styles/foundation/grid-layout.css';

export default {
  title: 'Foundation/Grid and Layout',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const containers = [
  {
    name: 'Small',
    token: '--layout-container-small',
    value: '40rem',
    className: 'storybook-layout__container-preview--small',
    usage: 'Focused forms, narrow content and simple task pages.',
  },
  {
    name: 'Medium',
    token: '--layout-container-medium',
    value: '64rem',
    className: 'storybook-layout__container-preview--medium',
    usage: 'Standard content pages and common application layouts.',
  },
  {
    name: 'Large',
    token: '--layout-container-large',
    value: '75rem',
    className: 'storybook-layout__container-preview--large',
    usage: 'Wide content, dashboards and complex page layouts.',
  },
  {
    name: 'Full width',
    token: '--layout-container-full',
    value: '100%',
    className: 'storybook-layout__container-preview--full',
    usage: 'Full-width sections, banners and edge-to-edge layouts.',
  },
];

const gridGaps = [
  {
    name: 'Small',
    token: '--layout-grid-gap-small',
    value: '1rem',
    className: 'storybook-layout__gap-preview--small',
    usage: 'Compact groups and closely related elements.',
  },
  {
    name: 'Medium',
    token: '--layout-grid-gap-medium',
    value: '1.5rem',
    className: 'storybook-layout__gap-preview--medium',
    usage: 'Standard grids, cards and page sections.',
  },
  {
    name: 'Large',
    token: '--layout-grid-gap-large',
    value: '2rem',
    className: 'storybook-layout__gap-preview--large',
    usage: 'Large sections and strongly separated content groups.',
  },
];

const alignments = [
  {
    name: 'Start',
    className: 'storybook-layout__alignment-example--start',
    usage: 'Align content to the beginning of both axes.',
  },
  {
    name: 'Centre',
    className: 'storybook-layout__alignment-example--centre',
    usage: 'Centre content within the available area.',
  },
  {
    name: 'End',
    className: 'storybook-layout__alignment-example--end',
    usage: 'Align content to the end of both axes.',
  },
  {
    name: 'Space between',
    className: 'storybook-layout__alignment-example--between',
    usage: 'Distribute remaining space between child elements.',
  },
];

const createContainerItem = item => `
  <article class="storybook-layout__token-item">
    <div class="storybook-layout__token-preview">
      <div
        class="
          storybook-layout__container-preview
          ${item.className}
        "
        aria-hidden="true"
      ></div>
    </div>

    <div class="storybook-layout__details">
      <h3 class="storybook-layout__name">
        ${item.name}
      </h3>

      <code class="storybook-layout__token">
        var(${item.token})
      </code>

      <p class="storybook-layout__value">
        ${item.value}
      </p>

      <p class="storybook-layout__usage">
        ${item.usage}
      </p>
    </div>
  </article>
`;

const createGapItem = item => `
  <article class="storybook-layout__token-item">
    <div class="storybook-layout__token-preview">
      <div
        class="
          storybook-layout__gap-preview
          ${item.className}
        "
        aria-hidden="true"
      >
        <div class="storybook-layout__gap-cell"></div>
        <div class="storybook-layout__gap-cell"></div>
        <div class="storybook-layout__gap-cell"></div>
      </div>
    </div>

    <div class="storybook-layout__details">
      <h3 class="storybook-layout__name">
        ${item.name}
      </h3>

      <code class="storybook-layout__token">
        var(${item.token})
      </code>

      <p class="storybook-layout__value">
        ${item.value}
      </p>

      <p class="storybook-layout__usage">
        ${item.usage}
      </p>
    </div>
  </article>
`;

const createAlignmentItem = item => `
  <article class="storybook-layout__token-item">
    <div
      class="
        storybook-layout__alignment-example
        ${item.className}
      "
    >
      <div class="storybook-layout__alignment-item">
        1
      </div>

      <div class="storybook-layout__alignment-item">
        2
      </div>
    </div>

    <div class="storybook-layout__details">
      <h3 class="storybook-layout__name">
        ${item.name}
      </h3>

      <p class="storybook-layout__usage">
        ${item.usage}
      </p>
    </div>
  </article>
`;

export const GridAndLayout = {
  name: 'Grid and layout',

  render: () => `
    <main class="storybook-layout">
      <header class="storybook-layout__intro">
        <h1>Grid and layout</h1>

        <p>
          The layout system provides consistent containers, columns, gaps and
          alignment patterns. Use these foundations to create responsive pages
          without introducing component-specific layout values.
        </p>
      </header>

      <section class="storybook-layout__section">
        <h2 class="storybook-layout__section-heading">
          Containers
        </h2>

        <p class="storybook-layout__section-description">
          Containers control the maximum width of page content while retaining
          responsive padding at smaller viewport sizes.
        </p>

        <div
          class="storybook-layout__token-grid"
          aria-label="Layout container tokens"
        >
          ${containers.map(createContainerItem).join('')}
        </div>
      </section>

      <section class="storybook-layout__section">
        <h2 class="storybook-layout__section-heading">
          Twelve-column grid
        </h2>

        <p class="storybook-layout__section-description">
          The primary grid uses twelve columns because it supports halves,
          thirds, quarters and more complex content proportions.
        </p>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Twelve equal columns
          </h3>

          <div class="storybook-layout__grid">
            ${Array.from(
              { length: 12 },
              (_, index) => `
                <div
                  class="
                    storybook-layout__cell
                    storybook-layout__cell--span-1
                  "
                >
                  ${index + 1}
                </div>
              `,
            ).join('')}
          </div>
        </div>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Two equal columns
          </h3>

          <div class="storybook-layout__grid">
            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-6
              "
            >
              6 columns
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-6
              "
            >
              6 columns
            </div>
          </div>
        </div>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Three equal columns
          </h3>

          <div class="storybook-layout__grid">
            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-4
              "
            >
              4 columns
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-4
              "
            >
              4 columns
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-4
              "
            >
              4 columns
            </div>
          </div>
        </div>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Main content and sidebar
          </h3>

          <div class="storybook-layout__grid">
            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-8
                storybook-layout__cell--primary
              "
            >
              Main content — 8 columns
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-4
              "
            >
              Sidebar — 4 columns
            </div>
          </div>
        </div>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Quarter and three-quarter layout
          </h3>

          <div class="storybook-layout__grid">
            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-3
              "
            >
              3 columns
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--span-9
                storybook-layout__cell--primary
              "
            >
              9 columns
            </div>
          </div>
        </div>
      </section>

      <section class="storybook-layout__section">
        <h2 class="storybook-layout__section-heading">
          Grid gaps
        </h2>

        <p class="storybook-layout__section-description">
          Gap tokens define consistent spacing between grid and flex items.
          Select the gap according to the relationship between the content.
        </p>

        <div
          class="storybook-layout__token-grid"
          aria-label="Layout gap tokens"
        >
          ${gridGaps.map(createGapItem).join('')}
        </div>
      </section>

      <section class="storybook-layout__section">
        <h2 class="storybook-layout__section-heading">
          Responsive grid
        </h2>

        <p class="storybook-layout__section-description">
          Responsive grids should reduce the number of columns as available
          space decreases rather than forcing content into narrow columns.
        </p>

        <div class="storybook-layout__responsive-grid">
          <div class="storybook-layout__cell">
            Item 1
          </div>

          <div class="storybook-layout__cell">
            Item 2
          </div>

          <div class="storybook-layout__cell">
            Item 3
          </div>
        </div>
      </section>

      <section class="storybook-layout__section">
        <h2 class="storybook-layout__section-heading">
          Common page layouts
        </h2>

        <p class="storybook-layout__section-description">
          These examples show common structures that can be adapted for Drupal
          page templates, regions and view displays.
        </p>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Left sidebar
          </h3>

          <div class="storybook-layout__sidebar-layout">
            <div class="storybook-layout__cell">
              Sidebar
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--primary
              "
            >
              Main content
            </div>
          </div>
        </div>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Right sidebar
          </h3>

          <div
            class="
              storybook-layout__sidebar-layout
              storybook-layout__sidebar-layout--right
            "
          >
            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--primary
              "
            >
              Main content
            </div>

            <div class="storybook-layout__cell">
              Sidebar
            </div>
          </div>
        </div>

        <div class="storybook-layout__example">
          <h3 class="storybook-layout__example-heading">
            Header, sidebars, content and footer
          </h3>

          <div class="storybook-layout__holy-grail">
            <div
              class="
                storybook-layout__cell
                storybook-layout__holy-grail-header
              "
            >
              Header
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__holy-grail-left
              "
            >
              Left sidebar
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__cell--primary
                storybook-layout__holy-grail-main
              "
            >
              Main content
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__holy-grail-right
              "
            >
              Right sidebar
            </div>

            <div
              class="
                storybook-layout__cell
                storybook-layout__holy-grail-footer
              "
            >
              Footer
            </div>
          </div>
        </div>
      </section>

      <section class="storybook-layout__section">
        <h2 class="storybook-layout__section-heading">
          Alignment and distribution
        </h2>

        <p class="storybook-layout__section-description">
          Use alignment intentionally to reinforce relationships between
          elements and maintain predictable component layouts.
        </p>

        <div class="storybook-layout__token-grid">
          ${alignments.map(createAlignmentItem).join('')}
        </div>
      </section>

      <section class="storybook-layout__section">
        <h2 class="storybook-layout__section-heading">
          Implementation example
        </h2>

        <div class="storybook-layout__code">
          <pre><code>.layout-grid {
  display: grid;
  grid-template-columns:
    repeat(var(--layout-grid-columns), minmax(0, 1fr));
  gap: var(--layout-grid-gap-medium);
}

.layout-grid__main {
  grid-column: span 8;
}

.layout-grid__sidebar {
  grid-column: span 4;
}</code></pre>
        </div>
      </section>

      <section class="storybook-layout__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Use the standard container widths rather than introducing
            page-specific maximum widths.
          </li>

          <li>
            Use the twelve-column grid for page-level and complex component
            layouts.
          </li>

          <li>
            Use CSS Grid for two-dimensional layouts and Flexbox for
            one-dimensional alignment.
          </li>

          <li>
            Allow layouts to reflow naturally rather than preserving desktop
            columns at narrow viewport widths.
          </li>

          <li>
            Keep the source order meaningful so content remains understandable
            without visual grid positioning.
          </li>

          <li>
            Avoid using fixed heights for content regions.
          </li>

          <li>
            Do not use visual positioning to change the logical reading or
            keyboard-focus order.
          </li>

          <li>
            Test layouts with zoom, long headings and increased text spacing.
          </li>
        </ul>
      </section>
    </main>
  `,
};
import '../../styles/foundation/z-index-layering.css';

export default {
  title: 'Foundation/Z-index and Layering',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const layers = [
  {
    name: 'Base',
    token: '--z-index-base',
    value: '0',
    className: 'storybook-layering__preview-surface--base',
    usage:
      'Normal page content and elements that do not need to overlap neighbouring content.',
  },
  {
    name: 'Raised',
    token: '--z-index-raised',
    value: '10',
    className: 'storybook-layering__preview-surface--raised',
    usage:
      'Raised cards, decorative overlaps and content positioned slightly above the page.',
  },
  {
    name: 'Sticky',
    token: '--z-index-sticky',
    value: '100',
    className: 'storybook-layering__preview-surface--sticky',
    usage:
      'Sticky headers, anchored navigation and persistent page controls.',
  },
  {
    name: 'Dropdown',
    token: '--z-index-dropdown',
    value: '200',
    className: 'storybook-layering__preview-surface--dropdown',
    usage:
      'Dropdown menus, autocomplete suggestions and expanded navigation panels.',
  },
  {
    name: 'Overlay',
    token: '--z-index-overlay',
    value: '300',
    className: 'storybook-layering__preview-surface--overlay',
    usage:
      'Page overlays that visually and interactively separate background content.',
  },
  {
    name: 'Modal',
    token: '--z-index-modal',
    value: '400',
    className: 'storybook-layering__preview-surface--modal',
    usage:
      'Dialogs and modal surfaces displayed above an associated overlay.',
  },
  {
    name: 'Toast',
    token: '--z-index-toast',
    value: '500',
    className: 'storybook-layering__preview-surface--toast',
    usage:
      'Temporary notifications that must remain visible above other interface layers.',
  },
];

const componentLayers = [
  {
    layer: 'Base',
    value: '0',
    components: 'Page content, sections, forms and static components',
  },
  {
    layer: 'Raised',
    value: '10',
    components: 'Raised cards, overlapping decoration and floating controls',
  },
  {
    layer: 'Sticky',
    value: '100',
    components: 'Sticky headers, section navigation and back-to-top controls',
  },
  {
    layer: 'Dropdown',
    value: '200',
    components: 'Menus, combobox options, autocomplete and popovers',
  },
  {
    layer: 'Overlay',
    value: '300',
    components: 'Modal backdrops, drawer backdrops and blocking overlays',
  },
  {
    layer: 'Modal',
    value: '400',
    components: 'Dialogs, drawers and blocking confirmation interfaces',
  },
  {
    layer: 'Toast',
    value: '500',
    components: 'Status notifications and urgent temporary messages',
  },
];

const createLayerItem = item => `
  <article class="storybook-layering__token-item">
    <div class="storybook-layering__token-preview">
      <div
        class="
          storybook-layering__preview-surface
          storybook-layering__preview-surface--background
        "
        aria-hidden="true"
      >
        Base content
      </div>

      <div
        class="
          storybook-layering__preview-surface
          storybook-layering__preview-surface--foreground
          ${item.className}
        "
        aria-hidden="true"
      >
        ${item.name}
      </div>
    </div>

    <div class="storybook-layering__details">
      <h3 class="storybook-layering__name">
        ${item.name}
      </h3>

      <code class="storybook-layering__token">
        var(${item.token})
      </code>

      <p class="storybook-layering__value">
        ${item.value}
      </p>

      <p class="storybook-layering__usage">
        ${item.usage}
      </p>
    </div>
  </article>
`;

const createComponentRow = item => `
  <tr>
    <th scope="row">${item.layer}</th>
    <td>${item.value}</td>
    <td>${item.components}</td>
  </tr>
`;

export const ZIndexAndLayering = {
  name: 'Z-index and layering',

  render: () => `
    <main class="storybook-layering">
      <header class="storybook-layering__intro">
        <h1>Z-index and layering</h1>

        <p>
          The layering system defines how overlapping interface elements are
          ordered. Components should use the shared z-index scale rather than
          introducing arbitrary values.
        </p>
      </header>

      <section class="storybook-layering__section">
        <h2 class="storybook-layering__section-heading">
          Layer tokens
        </h2>

        <p class="storybook-layering__section-description">
          Each token represents a meaningful interface layer. Use the lowest
          layer that correctly supports the component behaviour.
        </p>

        <div
          class="storybook-layering__token-grid"
          aria-label="Z-index layer tokens"
        >
          ${layers.map(createLayerItem).join('')}
        </div>
      </section>

      <section class="storybook-layering__section">
        <h2 class="storybook-layering__section-heading">
          Layer hierarchy
        </h2>

        <p class="storybook-layering__section-description">
          Higher values appear above lower values when the elements belong to
          compatible stacking contexts.
        </p>

        <div class="storybook-layering__example">
          <div
            class="storybook-layering__scale"
            aria-label="Visual z-index hierarchy"
          >
            <div
              class="
                storybook-layering__scale-item
                storybook-layering__scale-item--base
              "
            >
              <span class="storybook-layering__scale-name">
                Base
              </span>

              <span class="storybook-layering__scale-value">
                0
              </span>
            </div>

            <div
              class="
                storybook-layering__scale-item
                storybook-layering__scale-item--raised
              "
            >
              <span class="storybook-layering__scale-name">
                Raised
              </span>

              <span class="storybook-layering__scale-value">
                10
              </span>
            </div>

            <div
              class="
                storybook-layering__scale-item
                storybook-layering__scale-item--sticky
              "
            >
              <span class="storybook-layering__scale-name">
                Sticky
              </span>

              <span class="storybook-layering__scale-value">
                100
              </span>
            </div>

            <div
              class="
                storybook-layering__scale-item
                storybook-layering__scale-item--dropdown
              "
            >
              <span class="storybook-layering__scale-name">
                Dropdown
              </span>

              <span class="storybook-layering__scale-value">
                200
              </span>
            </div>

            <div
              class="
                storybook-layering__scale-item
                storybook-layering__scale-item--overlay
              "
            >
              <span class="storybook-layering__scale-name">
                Overlay
              </span>

              <span class="storybook-layering__scale-value">
                300
              </span>
            </div>

            <div
              class="
                storybook-layering__scale-item
                storybook-layering__scale-item--modal
              "
            >
              <span class="storybook-layering__scale-name">
                Modal
              </span>

              <span class="storybook-layering__scale-value">
                400
              </span>
            </div>

            <div
              class="
                storybook-layering__scale-item
                storybook-layering__scale-item--toast
              "
            >
              <span class="storybook-layering__scale-name">
                Toast
              </span>

              <span class="storybook-layering__scale-value">
                500
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="storybook-layering__section">
        <h2 class="storybook-layering__section-heading">
          Complete interface example
        </h2>

        <p class="storybook-layering__section-description">
          This example shows multiple layers together. The modal sits above
          the page overlay, while the notification remains above the modal.
        </p>

        <div class="storybook-layering__stack">
          <div class="storybook-layering__stack-page">
            <h3>Page content</h3>

            <div class="storybook-layering__stack-card">
              <strong>Raised card</strong>

              <p>
                This card uses the raised layer above normal page content.
              </p>
            </div>
          </div>

          <div class="storybook-layering__stack-sticky">
            Sticky header
          </div>

          <nav
            class="storybook-layering__stack-dropdown"
            aria-label="Dropdown example"
          >
            <ul>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Preferences</a></li>
              <li><a href="#">Sign out</a></li>
            </ul>
          </nav>

          <div
            class="storybook-layering__stack-overlay"
            aria-hidden="true"
          ></div>

          <section
            class="storybook-layering__stack-modal"
            role="dialog"
            aria-labelledby="layering-modal-title"
            aria-modal="true"
          >
            <h3 id="layering-modal-title">
              Modal dialog
            </h3>

            <p>
              The dialog appears above the overlay and underlying page
              interface.
            </p>
          </section>

          <div
            class="storybook-layering__stack-toast"
            role="status"
          >
            Your changes have been saved.
          </div>
        </div>
      </section>

      <section class="storybook-layering__section">
        <h2 class="storybook-layering__section-heading">
          Component layer mapping
        </h2>

        <p class="storybook-layering__section-description">
          Use this reference when selecting the appropriate layer for a new
          component.
        </p>

        <div class="storybook-layering__table-wrapper">
          <table class="storybook-layering__table">
            <thead>
              <tr>
                <th scope="col">Layer</th>
                <th scope="col">Value</th>
                <th scope="col">Typical components</th>
              </tr>
            </thead>

            <tbody>
              ${componentLayers.map(createComponentRow).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <section class="storybook-layering__section">
        <h2 class="storybook-layering__section-heading">
          Stacking contexts
        </h2>

        <p class="storybook-layering__section-description">
          A high z-index value cannot escape its parent stacking context.
          Elements should be placed in an appropriate document location rather
          than repeatedly increasing their z-index.
        </p>

        <div class="storybook-layering__context-demo">
          <article class="storybook-layering__context">
            <h3>Nested stacking context</h3>

            <div class="storybook-layering__context-parent">
              Parent context

              <div class="storybook-layering__context-child">
                Child: 500
              </div>
            </div>

            <div class="storybook-layering__context-sibling">
              Sibling: 10
            </div>
          </article>

          <article
            class="
              storybook-layering__context
              storybook-layering__context--isolated
            "
          >
            <h3>Isolated component context</h3>

            <p>
              Use <code>isolation: isolate</code> when a component should
              manage its own internal layers without affecting neighbouring
              page content.
            </p>

            <div class="storybook-layering__context-parent">
              Isolated component

              <div class="storybook-layering__context-child">
                Internal layer
              </div>
            </div>
          </article>
        </div>

        <div class="storybook-layering__code">
          <pre><code>.component {
  position: relative;
  isolation: isolate;
}

.component__content {
  position: relative;
  z-index: var(--z-index-base);
}

.component__decoration {
  position: absolute;
  z-index: var(--z-index-raised);
}</code></pre>
        </div>
      </section>

      <section class="storybook-layering__section">
        <h2 class="storybook-layering__section-heading">
          Use semantic layers
        </h2>

        <p class="storybook-layering__section-description">
          Select a token according to the role of the interface rather than
          choosing a value that happens to place the element on top.
        </p>

        <div class="storybook-layering__comparison-grid">
          <article
            class="
              storybook-layering__comparison
              storybook-layering__comparison--good
            "
          >
            <span class="storybook-layering__comparison-label">
              Use
            </span>

            <h3>Shared semantic token</h3>

            <p>
              A dropdown uses
              <code>var(--z-index-dropdown)</code>, making its purpose and
              position in the layering system clear.
            </p>
          </article>

          <article
            class="
              storybook-layering__comparison
              storybook-layering__comparison--bad
            "
          >
            <span class="storybook-layering__comparison-label">
              Avoid
            </span>

            <h3>Arbitrary large values</h3>

            <p>
              Values such as 99999 hide the underlying stacking-context issue
              and make future layering conflicts harder to resolve.
            </p>
          </article>
        </div>
      </section>

      <section class="storybook-layering__section">
        <h2 class="storybook-layering__section-heading">
          Implementation examples
        </h2>

        <div class="storybook-layering__code">
          <pre><code>.site-header {
  position: sticky;
  top: 0;
  z-index: var(--z-index-sticky);
}

.navigation-dropdown {
  position: absolute;
  z-index: var(--z-index-dropdown);
}

.dialog-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-overlay);
}

.dialog {
  position: fixed;
  z-index: var(--z-index-modal);
}

.status-notification {
  position: fixed;
  z-index: var(--z-index-toast);
}</code></pre>
        </div>
      </section>

      <section class="storybook-layering__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Use the lowest z-index layer that correctly supports the
            component.
          </li>

          <li>
            Use shared semantic tokens rather than arbitrary numeric values.
          </li>

          <li>
            Keep ordinary content in normal document flow wherever possible.
          </li>

          <li>
            Do not add z-index unless elements genuinely need to overlap.
          </li>

          <li>
            Remember that z-index only compares elements within compatible
            stacking contexts.
          </li>

          <li>
            Investigate parent stacking contexts before increasing a value.
          </li>

          <li>
            Use isolation when a component needs a self-contained internal
            layering system.
          </li>

          <li>
            Place modal interfaces and overlays near an appropriate document
            root so they are not trapped inside component stacking contexts.
          </li>

          <li>
            Ensure overlays prevent unintended interaction with obscured page
            content.
          </li>

          <li>
            Do not use visual layering to change the logical reading or focus
            order.
          </li>

          <li>
            Test sticky headers, menus, dialogs and notifications together to
            identify layer conflicts.
          </li>

          <li>
            Add a new shared token only when a genuinely distinct semantic
            layer is required.
          </li>
        </ul>
      </section>
    </main>
  `,
};
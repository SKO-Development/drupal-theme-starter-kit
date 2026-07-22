import '../../styles/foundation/accessibility.css';

export default {
  title: 'Foundation/Accessibility',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const principles = [
  {
    letter: 'P',
    name: 'Perceivable',
    description:
      'Information must be available in ways that users can perceive, including text alternatives, captions and sufficient contrast.',
  },
  {
    letter: 'O',
    name: 'Operable',
    description:
      'Controls and navigation must work with keyboards, pointers, touch and assistive technologies.',
  },
  {
    letter: 'U',
    name: 'Understandable',
    description:
      'Content, interactions, instructions and errors should be clear and predictable.',
  },
  {
    letter: 'R',
    name: 'Robust',
    description:
      'Semantic code should work reliably across browsers, devices and assistive technologies.',
  },
];

const checklistGroups = [
  {
    name: 'Design',
    items: [
      'Check text and interface contrast.',
      'Do not communicate meaning through colour alone.',
      'Provide visible focus and interaction states.',
      'Allow layouts to reflow and text to resize.',
      'Keep controls large enough to activate.',
    ],
  },
  {
    name: 'Development',
    items: [
      'Use native semantic HTML before ARIA.',
      'Preserve logical source and focus order.',
      'Provide accessible names for controls.',
      'Associate labels, hints and errors with inputs.',
      'Respect reduced-motion and forced-colour preferences.',
    ],
  },
  {
    name: 'Content',
    items: [
      'Use descriptive headings and link text.',
      'Provide meaningful alternative text.',
      'Use plain language and clear instructions.',
      'Provide captions and transcripts for media.',
      'Describe errors and how to correct them.',
    ],
  },
  {
    name: 'Testing',
    items: [
      'Navigate the component using only a keyboard.',
      'Test browser zoom and narrow viewport reflow.',
      'Run automated accessibility checks.',
      'Test with a screen reader where appropriate.',
      'Repeat testing after meaningful changes.',
    ],
  },
];

const createPrinciple = principle => `
  <article class="storybook-accessibility__principle">
    <div
      class="storybook-accessibility__principle-letter"
      aria-hidden="true"
    >
      ${principle.letter}
    </div>

    <h3>${principle.name}</h3>

    <p>${principle.description}</p>
  </article>
`;

const createChecklist = group => `
  <article class="storybook-accessibility__checklist-card">
    <h3>${group.name}</h3>

    <ul>
      ${group.items
        .map(
          item => `
            <li>${item}</li>
          `,
        )
        .join('')}
    </ul>
  </article>
`;

export const Accessibility = {
  name: 'Accessibility',

  render: () => `
    <main class="storybook-accessibility">
      <header class="storybook-accessibility__intro">
        <h1>Accessibility</h1>

        <p>
          Accessibility is a core requirement of every design-system
          foundation, component and page. It must be considered throughout
          design, development, content creation and testing rather than added
          after implementation.
        </p>
      </header>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Accessibility principles
        </h2>

        <p class="storybook-accessibility__section-description">
          The four accessibility principles provide a useful way to evaluate
          whether content and interfaces can be used by people with different
          abilities, devices and assistive technologies.
        </p>

        <div class="storybook-accessibility__principles">
          ${principles.map(createPrinciple).join('')}
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Keyboard operation
        </h2>

        <p class="storybook-accessibility__section-description">
          Every interactive element must be reachable and operable without a
          pointing device. Focus should move predictably and remain visible.
        </p>

        <div class="storybook-accessibility__example">
          <h3 class="storybook-accessibility__example-heading">
            Keyboard-accessible controls
          </h3>

          <p class="storybook-accessibility__example-description">
            Use the Tab key to move through these controls and Enter or Space
            to activate the buttons.
          </p>

          <div class="storybook-accessibility__keyboard-demo">
            <button
              class="storybook-accessibility__button"
              type="button"
            >
              Primary action
            </button>

            <button
              class="storybook-accessibility__button"
              type="button"
            >
              Secondary action
            </button>

            <a
              class="storybook-accessibility__link-button"
              href="#accessibility-checklist"
            >
              View checklist
            </a>
          </div>
        </div>

        <div class="storybook-accessibility__comparison-grid">
          <article
            class="
              storybook-accessibility__comparison
              storybook-accessibility__comparison--good
            "
          >
            <span class="storybook-accessibility__comparison-label">
              Use
            </span>

            <h3>Native interactive elements</h3>

            <p>
              Use buttons for actions and links for navigation. Native
              elements include established keyboard and accessibility
              behaviour.
            </p>
          </article>

          <article
            class="
              storybook-accessibility__comparison
              storybook-accessibility__comparison--bad
            "
          >
            <span class="storybook-accessibility__comparison-label">
              Avoid
            </span>

            <h3>Clickable generic containers</h3>

            <p>
              Do not make a div or span behave like a button unless the full
              keyboard, focus, role, state and accessible-name behaviour is
              implemented.
            </p>
          </article>
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Target size and spacing
        </h2>

        <p class="storybook-accessibility__section-description">
          Interactive controls should be large enough to locate and activate
          accurately. The design-system target is larger than the minimum
          WCAG requirement and should be used wherever practical.
        </p>

        <div class="storybook-accessibility__example">
          <div class="storybook-accessibility__touch-targets">
            <button
              class="storybook-accessibility__touch-target"
              type="button"
              aria-label="Previous item"
            >
              ←
            </button>

            <button
              class="storybook-accessibility__touch-target"
              type="button"
              aria-label="Add item"
            >
              +
            </button>

            <button
              class="storybook-accessibility__touch-target"
              type="button"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <code class="storybook-accessibility__token">
            var(--accessibility-target-minimum)
          </code>
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Colour and contrast
        </h2>

        <p class="storybook-accessibility__section-description">
          Text, meaningful graphics, component boundaries and states must
          remain distinguishable. Contrast must be tested using the actual
          foreground and background colour combinations.
        </p>

        <div class="storybook-accessibility__contrast-grid">
          <article class="storybook-accessibility__contrast-card">
            <div
              class="
                storybook-accessibility__contrast-preview
                storybook-accessibility__contrast-preview--normal
              "
            >
              Normal text
            </div>

            <div class="storybook-accessibility__contrast-details">
              <h3>Normal text</h3>

              <p>
                Minimum contrast reference: 4.5:1.
              </p>

              <code class="storybook-accessibility__token">
                var(--accessibility-contrast-text)
              </code>
            </div>
          </article>

          <article class="storybook-accessibility__contrast-card">
            <div
              class="
                storybook-accessibility__contrast-preview
                storybook-accessibility__contrast-preview--large
              "
            >
              Large text
            </div>

            <div class="storybook-accessibility__contrast-details">
              <h3>Large text</h3>

              <p>
                Minimum contrast reference: 3:1.
              </p>

              <code class="storybook-accessibility__token">
                var(--accessibility-contrast-large-text)
              </code>
            </div>
          </article>

          <article class="storybook-accessibility__contrast-card">
            <div
              class="
                storybook-accessibility__contrast-preview
                storybook-accessibility__contrast-preview--interface
              "
            >
              <div class="storybook-accessibility__contrast-interface">
                UI
              </div>
            </div>

            <div class="storybook-accessibility__contrast-details">
              <h3>Interface elements</h3>

              <p>
                Meaningful boundaries, icons and states require 3:1 contrast.
              </p>

              <code class="storybook-accessibility__token">
                var(--accessibility-contrast-interface)
              </code>
            </div>
          </article>
        </div>

        <div class="storybook-accessibility__example">
          <h3 class="storybook-accessibility__example-heading">
            Do not rely on colour alone
          </h3>

          <div class="storybook-accessibility__colour-example">
            <span
              class="storybook-accessibility__status-icon"
              aria-hidden="true"
            >
              !
            </span>

            <div>
              <h3>There is a problem with this submission</h3>

              <p>
                An icon, heading and written explanation communicate the state
                in addition to the error colour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Semantic structure
        </h2>

        <p class="storybook-accessibility__section-description">
          Semantic HTML communicates structure and relationships to browsers
          and assistive technologies without requiring custom roles.
        </p>

        <article class="storybook-accessibility__semantic-example">
          <h3>Provider registration process</h3>

          <p>
            Use headings to introduce sections and lists to represent related
            items.
          </p>

          <ul>
            <li>Review the eligibility requirements.</li>
            <li>Prepare the required information.</li>
            <li>Submit the registration form.</li>
          </ul>

          <a
            class="storybook-accessibility__text-link"
            href="#accessible-forms"
          >
            Read the form requirements
          </a>
        </article>

        <div class="storybook-accessibility__code">
          <pre><code>&lt;section aria-labelledby="requirements-heading"&gt;
  &lt;h2 id="requirements-heading"&gt;
    Registration requirements
  &lt;/h2&gt;

  &lt;p&gt;
    Review the requirements before starting.
  &lt;/p&gt;
&lt;/section&gt;</code></pre>
        </div>
      </section>

      <section
        class="storybook-accessibility__section"
        id="accessible-forms"
      >
        <h2 class="storybook-accessibility__section-heading">
          Forms, instructions and errors
        </h2>

        <p class="storybook-accessibility__section-description">
          Inputs need visible labels, clear instructions and programmatically
          associated error information. Placeholder text is not a replacement
          for a label.
        </p>

        <div class="storybook-accessibility__example">
          <form
            class="storybook-accessibility__form"
            action="#"
            novalidate
          >
            <div class="storybook-accessibility__form-group">
              <label
                class="storybook-accessibility__form-label"
                for="accessible-email"
              >
                Email address
                <span
                  class="storybook-accessibility__required"
                  aria-hidden="true"
                >
                  *
                </span>
              </label>

              <p
                class="storybook-accessibility__form-hint"
                id="accessible-email-hint"
              >
                We will use this address to send confirmation.
              </p>

              <p
                class="storybook-accessibility__form-error"
                id="accessible-email-error"
              >
                <span aria-hidden="true">!</span>
                Enter an email address in the format name@example.com.
              </p>

              <input
                class="storybook-accessibility__form-control"
                id="accessible-email"
                name="accessible-email"
                type="email"
                aria-describedby="
                  accessible-email-hint
                  accessible-email-error
                "
                aria-invalid="true"
                required
              />
            </div>

            <button
              class="storybook-accessibility__button"
              type="button"
            >
              Continue
            </button>
          </form>
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Text resizing and spacing
        </h2>

        <p class="storybook-accessibility__section-description">
          Components must tolerate increased text size and spacing without
          clipping, overlap or loss of functionality.
        </p>

        <div class="storybook-accessibility__text-spacing-demo">
          <p>
            This example applies the standard accessibility test spacing to
            demonstrate how content should remain readable and usable.
          </p>

          <p>
            Avoid fixed-height containers because text may require additional
            vertical and horizontal space.
          </p>
        </div>

        <div class="storybook-accessibility__code">
          <pre><code>.text-spacing-test {
  line-height: var(--accessibility-line-height);
  letter-spacing: var(--accessibility-letter-spacing);
  word-spacing: var(--accessibility-word-spacing);
}

.text-spacing-test p {
  margin-bottom: var(--accessibility-paragraph-spacing);
}</code></pre>
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Zoom and reflow
        </h2>

        <p class="storybook-accessibility__section-description">
          Content should adapt to a narrow viewport without page-level
          horizontal scrolling, clipping or requiring users to move in two
          directions to read ordinary content.
        </p>

        <div class="storybook-accessibility__example">
          <div class="storybook-accessibility__reflow-demo">
            <h3>Responsive content</h3>

            <p>
              This preview is constrained to the documented minimum content
              width and allows long words and links to wrap safely.
            </p>
          </div>

          <code class="storybook-accessibility__token">
            var(--accessibility-content-minimum)
          </code>
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Images and media
        </h2>

        <p class="storybook-accessibility__section-description">
          Meaningful images require appropriate text alternatives. Recorded
          media should provide captions, transcripts or audio description
          according to its content and purpose.
        </p>

        <div class="storybook-accessibility__media-example">
          <div class="storybook-accessibility__media-placeholder">
            Video or media preview
          </div>

          <div class="storybook-accessibility__captions">
            Captions communicate spoken dialogue and relevant sounds.
          </div>
        </div>
      </section>

      <section class="storybook-accessibility__section">
        <h2 class="storybook-accessibility__section-heading">
          Assistive technology support
        </h2>

        <p class="storybook-accessibility__section-description">
          Accessible names, roles, states and status messages must be exposed
          programmatically. Visible text should usually form part of the
          accessible name.
        </p>

        <div class="storybook-accessibility__example">
          <button
            class="storybook-accessibility__touch-target"
            type="button"
          >
            <span aria-hidden="true">↓</span>

            <span class="storybook-accessibility__visually-hidden">
              Download document
            </span>
          </button>

          <p>
            This icon-only control has a programmatically available name while
            keeping the visual presentation compact.
          </p>
        </div>
      </section>

      <section
        class="storybook-accessibility__section"
        id="accessibility-checklist"
      >
        <h2 class="storybook-accessibility__section-heading">
          Component checklist
        </h2>

        <p class="storybook-accessibility__section-description">
          Complete these checks for every component before it is considered
          ready for reuse.
        </p>

        <div class="storybook-accessibility__checklist">
          ${checklistGroups.map(createChecklist).join('')}
        </div>
      </section>

      <section class="storybook-accessibility__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Treat accessibility as a requirement throughout the component
            lifecycle.
          </li>

          <li>
            Prefer native semantic HTML before adding ARIA roles or custom
            keyboard behaviour.
          </li>

          <li>
            Ensure every interaction can be completed using a keyboard.
          </li>

          <li>
            Do not remove browser focus indicators without providing a clear
            replacement.
          </li>

          <li>
            Do not use colour, shape, position or movement as the only way to
            communicate meaning.
          </li>

          <li>
            Provide visible labels and clear error descriptions for form
            controls.
          </li>

          <li>
            Allow text to resize and layouts to reflow without losing content
            or functionality.
          </li>

          <li>
            Respect reduced-motion, forced-colour and other user preferences.
          </li>

          <li>
            Automated testing supports accessibility review but does not
            replace keyboard, screen-reader and manual testing.
          </li>

          <li>
            Document component-specific accessibility requirements within each
            component story.
          </li>
        </ul>
      </section>
    </main>
  `,
};
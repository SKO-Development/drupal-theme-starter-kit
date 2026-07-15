import './foundation.css';

export default {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Default typography styles and heading hierarchy supplied by the starter theme.',
      },
    },
  },
};

export const TypeScale = {
  render: () => `
    <main class="foundation-page">
      <div class="foundation-page__intro">
        <h1>Typography</h1>
        <p>
          The starter theme uses a deliberately neutral system-font stack.
          Project themes can replace the font tokens while preserving the same
          component architecture.
        </p>
      </div>

      <section class="foundation-section">
        <div class="type-example">
          <span class="type-example__label">Heading level 1</span>
          <h1>The quick brown fox jumps over the lazy dog</h1>
        </div>

        <div class="type-example">
          <span class="type-example__label">Heading level 2</span>
          <h2>The quick brown fox jumps over the lazy dog</h2>
        </div>

        <div class="type-example">
          <span class="type-example__label">Heading level 3</span>
          <h3>The quick brown fox jumps over the lazy dog</h3>
        </div>

        <div class="type-example">
          <span class="type-example__label">Heading level 4</span>
          <h4>The quick brown fox jumps over the lazy dog</h4>
        </div>

        <div class="type-example">
          <span class="type-example__label">Paragraph</span>
          <p>
            Good typography supports readability, comprehension and a clear
            visual hierarchy. Body text should remain comfortable to read
            across desktop and mobile layouts.
          </p>
        </div>

        <div class="type-example">
          <span class="type-example__label">Inline link</span>
          <p>
            This paragraph contains an
            <a href="#">example inline link</a>
            using the shared link and focus styles.
          </p>
        </div>

        <div class="type-example">
          <span class="type-example__label">Small text</span>
          <small>
            Small supporting text should still maintain sufficient contrast
            and readable line spacing.
          </small>
        </div>
      </section>
    </main>
  `,
};
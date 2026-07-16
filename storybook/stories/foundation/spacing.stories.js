import './foundation.css';

const spacingTokens = [
  '--spacing-1',
  '--spacing-2',
  '--spacing-3',
  '--spacing-4',
  '--spacing-5',
  '--spacing-6',
  '--spacing-7',
  '--spacing-8',
];

const getCssVariableValue = variable =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

export default {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A shared spacing scale for consistent component padding, margins and layout gaps.',
      },
    },
  },
};

export const Scale = {
  render: () => {
    const tokens = spacingTokens
      .map(variable => {
        const value = getCssVariableValue(variable);

        return `
          <div class="spacing-token">
            <span class="spacing-token__name">${variable}</span>

            <div
              class="spacing-token__preview"
              style="width: var(${variable});"
              aria-label="${variable}: ${value}"
            ></div>

            <span class="spacing-token__value">
              ${value || 'Not defined'}
            </span>
          </div>
        `;
      })
      .join('');

    return `
      <main class="foundation-page">
        <div class="foundation-page__intro">
          <h1>Spacing</h1>
          <p>
            Components should use these shared values instead of introducing
            arbitrary spacing. This creates a more consistent rhythm throughout
            the interface.
          </p>
        </div>

        <section class="foundation-section">
          <div class="spacing-list">
            ${tokens}
          </div>
        </section>
      </main>
    `;
  },
};
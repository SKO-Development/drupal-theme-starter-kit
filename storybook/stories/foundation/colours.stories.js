import './foundation.css';

const colours = [
  {
    name: 'Primary',
    variable: '--colour-primary',
  },
  {
    name: 'Primary dark',
    variable: '--colour-primary-dark',
  },
  {
    name: 'Secondary',
    variable: '--colour-secondary',
  },
  {
    name: 'Text',
    variable: '--colour-text',
  },
  {
    name: 'Background',
    variable: '--colour-background',
  },
  {
    name: 'Border',
    variable: '--colour-border',
  },
  {
    name: 'Focus',
    variable: '--colour-focus',
  },
  {
    name: 'Link',
    variable: '--colour-link',
  },
  {
    name: 'Link hover',
    variable: '--colour-link-hover',
  },
  {
    name: 'Error',
    variable: '--colour-error',
  },
  {
    name: 'Success',
    variable: '--colour-success',
  },
  {
    name: 'Warning',
    variable: '--colour-warning',
  },
  {
  name: 'White',
  variable: '--colour-white',
},
{
  name: 'Grey 100',
  variable: '--colour-grey-100',
},
{
  name: 'Grey 200',
  variable: '--colour-grey-200',
},
{
  name: 'Grey 500',
  variable: '--colour-grey-500',
},
{
  name: 'Grey 800',
  variable: '--colour-grey-800',
},
{
  name: 'Black',
  variable: '--colour-black',
},
];

const getCssVariableValue = variable =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

export default {
  title: 'Foundation/Colours',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Core colour tokens shared by Drupal components and Storybook.',
      },
    },
  },
};

export const Palette = {
  render: () => {
    const cards = colours
      .map(({ name, variable }) => {
        const value = getCssVariableValue(variable);

        return `
          <article class="token-card">
            <div
              class="token-card__preview"
              style="background: var(${variable});"
              aria-hidden="true"
            ></div>

            <div class="token-card__content">
              <h2 class="token-card__name">${name}</h2>
              <p class="token-card__value">${variable}</p>
              <p class="token-card__value">${value || 'Not defined'}</p>
            </div>
          </article>
        `;
      })
      .join('');

    return `
      <main class="foundation-page">
        <div class="foundation-page__intro">
          <h1>Colours</h1>
          <p>
            These tokens provide the default colour foundation for the starter
            theme. Project themes can override them without changing component
            markup.
          </p>
        </div>

        <section class="foundation-section">
          <div class="foundation-grid">
            ${cards}
          </div>
        </section>
      </main>
    `;
  },
};
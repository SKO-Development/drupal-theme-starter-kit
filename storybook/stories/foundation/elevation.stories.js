import '../../styles/foundation/elevation.css';

export default {
  title: 'Foundation/Elevation and Shadows',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const elevationLevels = [
  {
    name: 'None',
    token: '--shadow-none',
    className: 'storybook-elevation__sample--none',
    usage: 'Flat elements and content separated with borders.',
  },
  {
    name: 'Small',
    token: '--shadow-small',
    className: 'storybook-elevation__sample--small',
    usage: 'Cards and subtly raised interface elements.',
  },
  {
    name: 'Medium',
    token: '--shadow-medium',
    className: 'storybook-elevation__sample--medium',
    usage: 'Dropdown menus, popovers and expanded panels.',
  },
  {
    name: 'Large',
    token: '--shadow-large',
    className: 'storybook-elevation__sample--large',
    usage: 'Floating panels, sticky elements and overlays.',
  },
  {
    name: 'Extra large',
    token: '--shadow-extra-large',
    className: 'storybook-elevation__sample--extra-large',
    usage: 'Dialogs, modal windows and prominent overlays.',
  },
];

const createElevationItem = level => `
  <article class="storybook-elevation__item">
    <div
      class="
        storybook-elevation__sample
        ${level.className}
      "
    >
      ${level.name}
    </div>

    <div class="storybook-elevation__details">
      <h2 class="storybook-elevation__name">
        ${level.name}
      </h2>

      <code class="storybook-elevation__token">
        var(${level.token})
      </code>

      <p class="storybook-elevation__usage">
        ${level.usage}
      </p>
    </div>
  </article>
`;

export const ElevationAndShadows = {
  name: 'Elevation and shadows',

  render: () => `
    <main class="storybook-elevation">
      <header class="storybook-elevation__intro">
        <h1>Elevation and shadows</h1>

        <p>
          Elevation communicates the visual relationship between interface
          elements. Shadows should be used consistently and only where they
          help users understand that an element is raised, floating or layered
          above another surface.
        </p>
      </header>

      <section
        class="storybook-elevation__grid"
        aria-label="Elevation levels"
      >
        ${elevationLevels.map(createElevationItem).join('')}
      </section>

      <section class="storybook-elevation__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Use the lowest elevation level that clearly communicates the
            relationship between elements.
          </li>
          <li>
            Do not rely on shadows alone to communicate focus, selection or
            interactivity.
          </li>
          <li>
            Use borders where a component still requires a visible boundary
            when shadows are difficult to perceive.
          </li>
          <li>
            Avoid stacking multiple shadow levels on nested components.
          </li>
          <li>
            Dialogs and overlays should use elevation alongside appropriate
            focus management and background treatment.
          </li>
        </ul>
      </section>
    </main>
  `,
};
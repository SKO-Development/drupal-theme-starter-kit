import './foundation.css';
import '../../styles/foundation/icons.css';

import arrowRightIcon from '../../../theme/components/atoms/icons/arrow-right/arrow-right.svg?raw';
import checkIcon from '../../../theme/components/atoms/icons/check/check.svg?raw';
import closeIcon from '../../../theme/components/atoms/icons/close/close.svg?raw';
import downloadIcon from '../../../theme/components/atoms/icons/download/download.svg?raw';
import externalLinkIcon from '../../../theme/components/atoms/icons/external-link/external-link.svg?raw';
import informationIcon from '../../../theme/components/atoms/icons/information/information.svg?raw';
import menuIcon from '../../../theme/components/atoms/icons/menu/menu.svg?raw';
import searchIcon from '../../../theme/components/atoms/icons/search/search.svg?raw';
import warningIcon from '../../../theme/components/atoms/icons/warning/warning.svg?raw';
import chevronUpIcon from '../../../theme/components/atoms/icons/chevron-up/chevron-up.svg?raw';
import chevronDownIcon from '../../../theme/components/atoms/icons/chevron-down/chevron-down.svg?raw';

const icons = [
  {
    name: 'Arrow right',
    filename: 'arrow-right',
    svg: arrowRightIcon,
  },
  {
    name: 'Check',
    filename: 'check',
    svg: checkIcon,
  },
  {
    name: 'Close',
    filename: 'close',
    svg: closeIcon,
  },
  {
    name: 'Download',
    filename: 'download',
    svg: downloadIcon,
  },
  {
    name: 'External link',
    filename: 'external-link',
    svg: externalLinkIcon,
  },
  {
    name: 'Information',
    filename: 'information',
    svg: informationIcon,
  },
  {
    name: 'Menu',
    filename: 'menu',
    svg: menuIcon,
  },
  {
    name: 'Search',
    filename: 'search',
    svg: searchIcon,
  },
  {
  name: 'Warning',
  filename: 'warning',
  svg: warningIcon,
},
{
  name: 'Chevron up',
  filename: 'chevron-up',
  svg: chevronUpIcon,
},
{
  name: 'Chevron down',
  filename: 'chevron-down',
  svg: chevronDownIcon,
},
];

const renderIcon = ({ name, filename, svg }) => `
  <article class="icon-foundation__item">
    <span
      class="icon-foundation__preview"
      aria-hidden="true"
    >
      ${svg}
    </span>

    <span class="icon-foundation__name">
      ${name}
    </span>

    <code class="icon-foundation__filename">
      ${filename}
    </code>
  </article>
`;

export default {
  title: 'Foundation/Icons',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

export const Library = {
  render: () => `
    <main class="icon-foundation">
      <div class="icon-foundation__intro">
        <h1>Icons</h1>

        <p>
          Icons provide visual support for actions, statuses and important
          information. They should not replace visible text unless the
          control has a clear accessible name.
        </p>
      </div>

      <div class="icon-foundation__grid">
        ${icons.map(renderIcon).join('')}
      </div>
    </main>
  `,
};

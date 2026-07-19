import '../../styles/foundation/content-writing-guidance.css';

export default {
  title: 'Foundation/Content and Writing Guidance',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

const principles = [
  {
    number: '1',
    name: 'Put users first',
    description:
      'Write for the person completing the task rather than the organisation delivering the service.',
  },
  {
    number: '2',
    name: 'Make content clear',
    description:
      'Use familiar words, direct sentences and enough context for users to understand what to do.',
  },
  {
    number: '3',
    name: 'Make content useful',
    description:
      'Include the information users need to complete their task and remove content that does not help them.',
  },
  {
    number: '4',
    name: 'Make content accessible',
    description:
      'Use meaningful structure, descriptive labels and language that works for users with different needs.',
  },
];

const checklistGroups = [
  {
    name: 'Purpose',
    items: [
      'The user need is clear.',
      'The expected action or outcome is clear.',
      'Unnecessary organisational detail has been removed.',
      'Important information appears early.',
    ],
  },
  {
    name: 'Language',
    items: [
      'Sentences use familiar and direct language.',
      'Technical terms are explained where required.',
      'Acronyms are expanded on first use.',
      'Instructions use active voice.',
    ],
  },
  {
    name: 'Structure',
    items: [
      'Headings describe the content that follows.',
      'Lists are used for genuinely related items.',
      'Paragraphs contain one main idea.',
      'Links make sense outside their surrounding sentence.',
    ],
  },
  {
    name: 'Accessibility',
    items: [
      'Images have appropriate alternative text.',
      'Meaning is not communicated through colour alone.',
      'Errors explain both the problem and the correction.',
      'Content remains understandable when read aloud.',
    ],
  },
];

const createPrinciple = principle => `
  <article class="storybook-content__principle">
    <div
      class="storybook-content__principle-number"
      aria-hidden="true"
    >
      ${principle.number}
    </div>

    <h3>${principle.name}</h3>

    <p>${principle.description}</p>
  </article>
`;

const createChecklist = group => `
  <article class="storybook-content__checklist-card">
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

export const ContentAndWritingGuidance = {
  name: 'Content and writing guidance',

  render: () => `
    <main class="storybook-content">
      <header class="storybook-content__intro">
        <h1>Content and writing guidance</h1>

        <p>
          Clear content helps people understand information, make decisions
          and complete tasks. Content should be written for users first and
          should remain consistent across pages, forms and components.
        </p>
      </header>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Content principles
        </h2>

        <p class="storybook-content__section-description">
          Use these principles when planning, writing, reviewing and
          maintaining content.
        </p>

        <div class="storybook-content__principles">
          ${principles.map(createPrinciple).join('')}
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Plain English
        </h2>

        <p class="storybook-content__section-description">
          Use familiar words and direct sentences. Explain technical or legal
          language when it cannot be avoided.
        </p>

        <div class="storybook-content__comparison-grid">
          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--preferred
            "
          >
            <span class="storybook-content__comparison-label">
              Preferred
            </span>

            <h3>Write directly</h3>

            <p>
              Send the completed form by 5 pm on Friday.
            </p>
          </article>

          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--avoid
            "
          >
            <span class="storybook-content__comparison-label">
              Avoid
            </span>

            <h3>Formal and indirect wording</h3>

            <p>
              It is requested that the completed documentation be submitted
              no later than the close of business on Friday.
            </p>
          </article>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Voice and tone
        </h2>

        <p class="storybook-content__section-description">
          The content voice should remain consistent. Adjust the tone to suit
          the user's situation without becoming unclear or overly informal.
        </p>

        <div class="storybook-content__sample">
          <h3>Our voice</h3>

          <p>
            Write in a way that is clear, respectful, calm and practical.
            Address the user as “you” and refer to the organisation as “we”
            where this makes responsibility easier to understand.
          </p>

          <p>
            Use a more supportive tone for difficult situations and a more
            direct tone for instructions, warnings and urgent actions.
          </p>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Headings
        </h2>

        <p class="storybook-content__section-description">
          Headings should describe the information that follows and create a
          logical structure that users can scan.
        </p>

        <div class="storybook-content__heading-example">
          <h3>Apply to become a registered provider</h3>

          <p>
            A page heading should describe the main task or subject.
          </p>

          <h4>Check whether you are eligible</h4>

          <p>
            Section headings should help users find specific information.
          </p>

          <h5>Information you need</h5>

          <p>
            Lower-level headings should remain within the current section.
          </p>
        </div>

        <div class="storybook-content__comparison-grid">
          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--preferred
            "
          >
            <span class="storybook-content__comparison-label">
              Preferred
            </span>

            <h3>Describe the content</h3>

            <ul>
              <li>Check your eligibility</li>
              <li>Documents you need</li>
              <li>Submit your application</li>
            </ul>
          </article>

          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--avoid
            "
          >
            <span class="storybook-content__comparison-label">
              Avoid
            </span>

            <h3>Generic headings</h3>

            <ul>
              <li>Important information</li>
              <li>More details</li>
              <li>Next steps</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Links
        </h2>

        <p class="storybook-content__section-description">
          Link text should describe the destination or action. Users should
          understand the link without relying on the surrounding paragraph.
        </p>

        <div class="storybook-content__example">
          <div class="storybook-content__link-example">
            <a
              class="storybook-content__link"
              href="#buttons-and-actions"
            >
              Check the provider registration requirements
            </a>

            <a
              class="storybook-content__link"
              href="#content-checklist"
            >
              Review the content checklist
            </a>
          </div>
        </div>

        <div class="storybook-content__comparison-grid">
          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--preferred
            "
          >
            <span class="storybook-content__comparison-label">
              Preferred
            </span>

            <h3>Descriptive link text</h3>

            <p>
              Download the provider application form.
            </p>
          </article>

          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--avoid
            "
          >
            <span class="storybook-content__comparison-label">
              Avoid
            </span>

            <h3>Ambiguous link text</h3>

            <p>
              Click here, read more or learn more.
            </p>
          </article>
        </div>
      </section>

      <section
        class="storybook-content__section"
        id="buttons-and-actions"
      >
        <h2 class="storybook-content__section-heading">
          Buttons and actions
        </h2>

        <p class="storybook-content__section-description">
          Button labels should start with a clear verb and describe what will
          happen when the button is activated.
        </p>

        <div class="storybook-content__example">
          <div class="storybook-content__button-example">
            <button
              class="storybook-content__button"
              type="button"
            >
              Save changes
            </button>

            <button
              class="storybook-content__button"
              type="button"
            >
              Submit application
            </button>

            <button
              class="storybook-content__button"
              type="button"
            >
              Download report
            </button>
          </div>
        </div>

        <div class="storybook-content__comparison-grid">
          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--preferred
            "
          >
            <span class="storybook-content__comparison-label">
              Preferred
            </span>

            <h3>Specific action labels</h3>

            <ul>
              <li>Save draft</li>
              <li>Confirm booking</li>
              <li>Remove document</li>
            </ul>
          </article>

          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--avoid
            "
          >
            <span class="storybook-content__comparison-label">
              Avoid
            </span>

            <h3>Generic action labels</h3>

            <ul>
              <li>Submit</li>
              <li>Continue</li>
              <li>Yes</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Instructions
        </h2>

        <p class="storybook-content__section-description">
          Put instructions before the action they relate to. Break complex
          processes into short, ordered steps.
        </p>

        <div class="storybook-content__example">
          <ol class="storybook-content__instruction-list">
            <li>
              Check that your contact details are current.
            </li>

            <li>
              Upload each required document in PDF format.
            </li>

            <li>
              Review the declaration before submitting the application.
            </li>

            <li>
              Select <strong>Submit application</strong>.
            </li>
          </ol>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Error messages
        </h2>

        <p class="storybook-content__section-description">
          Error messages should identify the problem, explain how to fix it
          and refer to the affected field or action.
        </p>

        <div class="storybook-content__error-summary">
          <h3>There is a problem</h3>

          <p>
            Correct the following information before submitting the form.
          </p>

          <ul>
            <li>
              <a
                class="storybook-content__error-link"
                href="#"
              >
                Enter your email address
              </a>
            </li>

            <li>
              <a
                class="storybook-content__error-link"
                href="#"
              >
                Select your organisation type
              </a>
            </li>
          </ul>
        </div>

        <div class="storybook-content__comparison-grid">
          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--preferred
            "
          >
            <span class="storybook-content__comparison-label">
              Preferred
            </span>

            <h3>Explain how to correct the problem</h3>

            <p>
              Enter an email address in the format name@example.com.
            </p>
          </article>

          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--avoid
            "
          >
            <span class="storybook-content__comparison-label">
              Avoid
            </span>

            <h3>Generic or technical errors</h3>

            <p>
              Invalid value. Error code 422.
            </p>
          </article>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Dates and times
        </h2>

        <p class="storybook-content__section-description">
          Write dates and times in an unambiguous format. Include the time
          zone where users may be in different locations.
        </p>

        <div class="storybook-content__date-grid">
          <article class="storybook-content__date-card">
            <h3>Dates</h3>

            <dl>
              <dt>Preferred</dt>
              <dd>17 July 2026</dd>

              <dt>Avoid</dt>
              <dd>17/07/26</dd>
            </dl>
          </article>

          <article class="storybook-content__date-card">
            <h3>Times</h3>

            <dl>
              <dt>Preferred</dt>
              <dd>3:30 pm</dd>

              <dt>With time zone</dt>
              <dd>3:30 pm AEST</dd>
            </dl>
          </article>

          <article class="storybook-content__date-card">
            <h3>Date ranges</h3>

            <dl>
              <dt>Preferred</dt>
              <dd>17 to 21 July 2026</dd>

              <dt>Across years</dt>
              <dd>20 December 2026 to 5 January 2027</dd>
            </dl>
          </article>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Numbers, abbreviations and acronyms
        </h2>

        <p class="storybook-content__section-description">
          Present numbers consistently and expand unfamiliar abbreviations
          when they first appear.
        </p>

        <div class="storybook-content__table-wrapper">
          <table class="storybook-content__table">
            <thead>
              <tr>
                <th scope="col">Content type</th>
                <th scope="col">Preferred</th>
                <th scope="col">Guidance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">Large numbers</th>
                <td>12,500</td>
                <td>Use separators to make large numbers easier to read.</td>
              </tr>

              <tr>
                <th scope="row">Money</th>
                <td>$1,250</td>
                <td>Include the currency where it may not be obvious.</td>
              </tr>

              <tr>
                <th scope="row">Percentages</th>
                <td>25%</td>
                <td>Use the percentage symbol with a numeric value.</td>
              </tr>

              <tr>
                <th scope="row">Acronyms</th>
                <td>National Disability Insurance Scheme (NDIS)</td>
                <td>Write the full name on first use.</td>
              </tr>

              <tr>
                <th scope="row">Measurements</th>
                <td>20 MB</td>
                <td>Include a space between the number and unit.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Capitalisation and punctuation
        </h2>

        <p class="storybook-content__section-description">
          Use sentence case for headings, buttons and labels. Avoid excessive
          capitalisation and punctuation.
        </p>

        <div class="storybook-content__comparison-grid">
          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--preferred
            "
          >
            <span class="storybook-content__comparison-label">
              Preferred
            </span>

            <h3>Sentence case</h3>

            <ul>
              <li>Submit your application</li>
              <li>Provider registration requirements</li>
              <li>Contact details</li>
            </ul>
          </article>

          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--avoid
            "
          >
            <span class="storybook-content__comparison-label">
              Avoid
            </span>

            <h3>Title case and emphasis</h3>

            <ul>
              <li>Submit Your Application</li>
              <li>PROVIDER REGISTRATION REQUIREMENTS</li>
              <li>Contact Details!!!</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Inclusive language
        </h2>

        <p class="storybook-content__section-description">
          Use respectful, person-centred language and avoid assumptions about
          identity, circumstances, ability or access to technology.
        </p>

        <div class="storybook-content__comparison-grid">
          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--preferred
            "
          >
            <span class="storybook-content__comparison-label">
              Preferred
            </span>

            <h3>Respectful and specific</h3>

            <ul>
              <li>People with disability</li>
              <li>Parent, guardian or carer</li>
              <li>Enter your postal address</li>
            </ul>
          </article>

          <article
            class="
              storybook-content__comparison
              storybook-content__comparison--avoid
            "
          >
            <span class="storybook-content__comparison-label">
              Avoid
            </span>

            <h3>Assumptions and outdated terms</h3>

            <ul>
              <li>The disabled</li>
              <li>Mother or father</li>
              <li>Simply upload the document</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="storybook-content__section">
        <h2 class="storybook-content__section-heading">
          Alternative text
        </h2>

        <p class="storybook-content__section-description">
          Alternative text should communicate the meaning or purpose of an
          image. Decorative images should not add unnecessary information for
          screen-reader users.
        </p>

        <div class="storybook-content__alt-text-grid">
          <article class="storybook-content__alt-text-card">
            <h3>Informative image</h3>

            <p>
              Describe the information the image communicates in the current
              context.
            </p>
          </article>

          <article class="storybook-content__alt-text-card">
            <h3>Functional image</h3>

            <p>
              Describe the action or destination, such as “Search” or
              “Download the annual report”.
            </p>
          </article>

          <article class="storybook-content__alt-text-card">
            <h3>Decorative image</h3>

            <p>
              Use an empty alternative text value when the image adds no
              information and is purely decorative.
            </p>
          </article>
        </div>

        <div class="storybook-content__code">
          <pre><code>&lt;img
  src="service-centre.jpg"
  alt="Customer speaking with a staff member at a service counter"
/&gt;

&lt;img
  src="decorative-pattern.svg"
  alt=""
/&gt;</code></pre>
        </div>
      </section>

      <section
        class="storybook-content__section"
        id="content-checklist"
      >
        <h2 class="storybook-content__section-heading">
          Content review checklist
        </h2>

        <p class="storybook-content__section-description">
          Use this checklist before publishing new content or approving a
          reusable component.
        </p>

        <div class="storybook-content__checklist">
          ${checklistGroups.map(createChecklist).join('')}
        </div>
      </section>

      <section class="storybook-content__guidance">
        <h2>Usage guidance</h2>

        <ul>
          <li>
            Start with the user need and the task the content must support.
          </li>

          <li>
            Put the most important information first.
          </li>

          <li>
            Use familiar words, short sentences and active voice.
          </li>

          <li>
            Use headings that describe the content beneath them.
          </li>

          <li>
            Write links that make sense outside their surrounding paragraph.
          </li>

          <li>
            Begin button labels with a verb that describes the action.
          </li>

          <li>
            Place instructions before the field, control or task they relate
            to.
          </li>

          <li>
            Explain errors in plain language and tell users how to fix them.
          </li>

          <li>
            Expand unfamiliar acronyms on first use.
          </li>

          <li>
            Use sentence case for headings, labels and controls.
          </li>

          <li>
            Avoid language that assumes a user's ability, identity,
            circumstances or access to technology.
          </li>

          <li>
            Read content aloud during review to identify unclear wording and
            unnecessarily complex sentences.
          </li>
        </ul>
      </section>
    </main>
  `,
};
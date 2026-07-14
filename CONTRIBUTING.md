# Contributing

## Branches

- `main` contains stable releases
- `develop` contains integrated development work
- feature work uses `feature/<name>`

## Components

Each component must include:

- a valid `.component.yml` schema
- a Twig implementation
- a Storybook story
- accessible keyboard and focus behaviour where relevant

Component-specific CSS and JavaScript should remain inside the component directory.

## Pull requests

Pull requests should target `develop` unless preparing a release.

Include:

- a summary of the change
- testing performed
- accessibility considerations
- screenshots where visual changes are involved
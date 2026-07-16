# Callout

Highlights important information and optionally provides an action using the Button SDC.

## Variants

- Information
- Success
- Warning
- Error

## Composition

The Callout renders the Button component through:

```twig
{% include 'starter_theme:button' with {
  text: button.text,
  url: button.url,
  variant: button.variant,
  new_window: button.new_window
} only %}
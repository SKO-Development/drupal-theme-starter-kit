#!/usr/bin/env bash

set -euo pipefail

SOURCE_MACHINE_NAME="starter_theme"
SOURCE_DISPLAY_NAME="Starter Theme"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/theme"

usage() {
  cat <<'EOF'
Create a project-specific Drupal theme from the starter template.

Usage:
  ./scripts/create-theme.sh <machine_name> "<Display Name>" <destination>

Example:
  ./scripts/create-theme.sh commission_theme "Commission Theme" \
    ~/Sites/civic-drupal-poc/web/themes/custom/commission_theme

Rules:
  - Machine names must contain only lowercase letters, numbers and underscores.
  - The destination directory must not already exist.
EOF
}

if [[ $# -ne 3 ]]; then
  usage
  exit 1
fi

TARGET_MACHINE_NAME="$1"
TARGET_DISPLAY_NAME="$2"
DESTINATION="$3"

if [[ ! "$TARGET_MACHINE_NAME" =~ ^[a-z][a-z0-9_]*$ ]]; then
  echo "Error: Invalid machine name '$TARGET_MACHINE_NAME'."
  echo "Use lowercase letters, numbers and underscores, beginning with a letter."
  exit 1
fi

if [[ -z "$TARGET_DISPLAY_NAME" ]]; then
  echo "Error: Display name cannot be empty."
  exit 1
fi

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Error: Source theme directory was not found:"
  echo "$SOURCE_DIR"
  exit 1
fi

DESTINATION="$(realpath -m "$DESTINATION")"

if [[ -e "$DESTINATION" ]]; then
  echo "Error: Destination already exists:"
  echo "$DESTINATION"
  exit 1
fi

echo "Creating Drupal theme..."
echo "Source:      $SOURCE_DIR"
echo "Destination: $DESTINATION"
echo "Machine name: $TARGET_MACHINE_NAME"
echo "Display name: $TARGET_DISPLAY_NAME"

mkdir -p "$(dirname "$DESTINATION")"
cp -a "$SOURCE_DIR" "$DESTINATION"

find "$DESTINATION" -depth -name "*${SOURCE_MACHINE_NAME}*" -print0 |
  while IFS= read -r -d '' path; do
    directory="$(dirname "$path")"
    filename="$(basename "$path")"
    renamed="${filename//$SOURCE_MACHINE_NAME/$TARGET_MACHINE_NAME}"

    if [[ "$filename" != "$renamed" ]]; then
      mv "$path" "$directory/$renamed"
    fi
  done

while IFS= read -r -d '' file; do
  sed -i \
    -e "s/${SOURCE_MACHINE_NAME}/${TARGET_MACHINE_NAME}/g" \
    -e "s/${SOURCE_DISPLAY_NAME}/${TARGET_DISPLAY_NAME}/g" \
    "$file"
done < <(
  grep -rlZ \
    --exclude-dir=node_modules \
    --exclude-dir=.git \
    --exclude='*.png' \
    --exclude='*.jpg' \
    --exclude='*.jpeg' \
    --exclude='*.gif' \
    --exclude='*.webp' \
    --exclude='*.woff' \
    --exclude='*.woff2' \
    --exclude='*.ttf' \
    "$SOURCE_MACHINE_NAME\|$SOURCE_DISPLAY_NAME" \
    "$DESTINATION" || true
)

echo
echo "Theme created successfully:"
echo "$DESTINATION"
echo
echo "Next steps:"
echo "  1. Confirm the generated files."
echo "  2. Clear Drupal caches."
echo "  3. Enable the base theme and generated theme."
echo
echo "Example:"
echo "  ddev drush cr"
echo "  ddev drush theme:enable bootstrap5 $TARGET_MACHINE_NAME -y"
echo "  ddev drush config:set system.theme default $TARGET_MACHINE_NAME -y"
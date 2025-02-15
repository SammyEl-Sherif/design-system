#!/usr/bin/env bash

set -eup pipefail

cd ..
npm run build
package_filename=$(npm pack | grep -o 'workpace-design-system-.*.tgz')

echo "Installing package: $package_filename"

cd consumer

# Destroy .next and node_modules directories
rm -rf .next
rm -rf node_modules

npm install -S false ../$package_filename

# TEP website

This repository contains the website [tep.shiftcrypto.ch](https://tep.shiftcrypto.ch), which is built with [Jekyll](https://jekyllrb.com) and published with [GitHub Pages](https://pages.github.com/).

## Logic

All requests except the index are handled by the `404.html` page.
You can add new packages by adding a JPG image with the identifier as its name to the `packages` folder.
If you enter an alphanumeric path (without a trailing `/`) and no such image exists,
then you are automatically redirected to the start page with an input field.

## Setup

1. Install (or upgrade) [Ruby](https://www.ruby-lang.org) (`brew install ruby` with [Homebrew](https://brew.sh) on macOS).
2. Extend the `PATH` to include the gems directory (like `export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/2.6.0/bin:$PATH"` in your [bash initialization script](https://en.wikipedia.org/wiki/Unix_shell#Configuration_files)).
3. Install [Bundler](https://bundler.io) and replace a potentially existing installation: `gem install bundler`.
4. Install all Ruby dependencies in the root directory of this repository: `bundle install --path vendor/bundle`.
5. Serve the website from the root directory of this repository: `bundle exec jekyll serve --livereload`.
6. In case you just want to build the site to the `_site` folder (to check for errors): `bundle exec jekyll build`.

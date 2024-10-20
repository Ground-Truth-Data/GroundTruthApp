<<<<<<< HEAD
# Ruby

A multi-column [Ghost](https://github.com/TryGhost/Ghost) theme with a unique card layout. Make your publication more organized with cards and widgets.

**Demo: https://ruby.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Ruby/archive/main.zip)
=======
# Journal

A minimal, typography-heavy newsletter theme for [Ghost](https://github.com/TryGhost/Ghost).

**Demo: https://journal.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Journal/archive/main.zip)
>>>>>>> 2bc59eb627774df7f8194e9f737adcdf905cff29
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

<<<<<<< HEAD
Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:
=======
Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:
>>>>>>> 2bc59eb627774df7f8194e9f737adcdf905cff29

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

<<<<<<< HEAD
The `zip` Gulp task packages the theme files into `dist/ruby.zip`, which you can then upload to your site.
=======
The `zip` Gulp task packages the theme files into `dist/journal.zip`, which you can then upload to your site.
>>>>>>> 2bc59eb627774df7f8194e9f737adcdf905cff29

```bash
yarn zip
```

# Contribution

This repo is synced automatically with [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

# Copyright & License

Copyright (c) 2024 Ground Truth Data Inc. - Released under the [Apache License 2.0](LICENSE).

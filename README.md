# storybook-addon-run-script

This storybook addon can be helpful to run a script inside your preview window by appending a script tag with your script content.

## Addon Support Table

|React|React Native|Vue|Angular|Polymer|Mithril|[HTML](src/html.ts)|Marko|Svelte|Riot|Ember|Preact|
|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| | | | | | |+| | | | | | |

## Getting started

First, install the addon.

```sh
> npm i storybook-addon-run-script -D
OR
> yarn add storybook-addon-run-script --dev
```

## Usage

example for HTML with component:

```ts
import { storiesOf } from '@storybook/html';
import { withRunScript } from 'storybook-addon-run-script/html';

import Component from './component.html';

const runScript = `console.log('Hello World');`;

storiesOf('MyComponent', module)
  .addDecorator(withRunScript(runScript))
  .add('default', () => Component);

```

## Tips

You may find it helpful to import a js file as a string to allow you to write JS code with IDE support.
You can configure the Webpack config, read more in the [docs](https://storybook.js.org/docs/configurations/custom-webpack-config/).

Sample `webpack.config.js` config:

```ts
module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.runscript.js$/i,
    use: 'raw-loader',
  });

  // Return the altered config
  return config;
};
```

You may need to install [`raw-loader`](https://www.npmjs.com/package/raw-loader)

```sh
> npm i raw-loader -D
OR
> yarn add raw-loader --dev
```

You may then use it as so:

```ts
import { storiesOf } from '@storybook/html';
import { withRunScript } from 'storybook-addon-run-script/html';

import Component from './component.html';
// The following imported file will be imported as a string
import runScript from './component.runscript.js';

storiesOf('MyComponent', module)
  .addDecorator(withRunScript(runScript))
  .add('default', () => Component);

```

## Roadmap

- Support more libraries
- Add Tests
- Add CI

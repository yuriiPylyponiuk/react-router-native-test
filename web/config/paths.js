'use strict';

const path = require('path');
const fs = require('fs');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL,
);

const buildPath = process.env.BUILD_PATH || 'build';

const moduleFileExtensions = [
  'android.mjs',
  'ios.mjs',
  'web.mjs',
  'mjs',
  'android.js',
  'ios.js',
  'web.js',
  'js',
  'android.ts',
  'ios.ts',
  'web.ts',
  'ts',
  'android.tsx',
  'ios.tsx',
  'web.tsx',
  'tsx',
  'json',
  'android.jsx',
  'ios.jsx',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`)),
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('web/' + buildPath),
  appPublic: resolveApp('web/public'),
  appHtml: resolveApp('web/public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'web/src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('.'),
  appTsConfig: resolveApp('web/tsconfig.json'),
  appJsConfig: resolveApp('web/jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'web/src/setupTests'),
  proxySetup: resolveApp('web/src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  appWebpackCache: resolveApp('node_modules/.cache'),
  appTsBuildInfoFile: resolveApp('node_modules/.cache/tsconfig.tsbuildinfo'),
  swSrc: resolveModule(resolveApp, 'web/src/service-worker'),
  publicUrlOrPath,
};

module.exports.moduleFileExtensions = moduleFileExtensions;

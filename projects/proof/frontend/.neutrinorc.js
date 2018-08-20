module.exports = {
  use: [
    ['@neutrinojs/airbnb', {
      eslint:{
        rules:{
          "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
        }
      }
    }],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'some',
          links:[
            {
              href:'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
              rel:'stylesheet'
            },
            {
              href:'https://fonts.googleapis.com/icon?family=Material+Icons',
              rel:'stylesheet'
            },
            {
              href:'https://fonts.googleapis.com/css?family=Varela+Round',
              rel:'stylesheet'
            }
          ]
        }
      }
    ],
    ['@neutrinojs/jest', {
      // As mentioned here https://github.com/mozilla-neutrino/neutrino-dev/issues/363
      "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
    }],
    'neutrino-preset-flow'
  ]
};

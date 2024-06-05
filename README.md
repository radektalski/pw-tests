## Prerequisites

Before you can run the tests locally, you must ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)

- [nvm](https://github.com/nvm-sh/nvm)

- [yarn](https://yarnpkg.com/)

### Installation Steps

1\. [Node.js](https://nodejs.org/) .

2\. [nvm](https://github.com/nvm-sh/nvm)

3\. $ nvm use

4\.

$ yarn install

$ yarn playwright install

## Configuration

### Config.ts

The `config.ts` file contains the configuration settings for the tests. The following environment variables can be used to override the default values:

- `ENV` - the name of the environment, acceptet keys :"PROD" only prod for now.

- `LOCALE` - the name of the locale. Default is `en` - English Translations.

- `SHOP` - the name of the shop. Could be `suacedemo`

## Running Tests

### Running Simple Tests

To run a simple test, execute the following command in your terminal:

`yarn test:smoke:chrome`

### Running Tests with Different Browsers

`yarn test:smoke:{browser}` like yarn test:smoke:chrome

### Running Tests with Different Configuration

You can also run tests with different configurations. To do this, set 

ENV=PROD, LOCALE=en, SHOP=saucedemo  yarn test:e2e:spain


### SIDETASK PROJECTS

## Framework and configuration setup 

Done! Every good framework should have clear and handy configuration setup. Also POM / Component model that i proposed might look like
overkill for this simple project, but i wanted to show you how do i setup more complex projects, where scalable framework is crucial to mantain testing repo

## Custom functionality and browser config

Partially done! UI assertions and interactions are core of each e2e framework

## Negative and Field Validation tests

Done! Those tests are quick and  explores how the system behaves when it encounters unexpected or invalid inputs or conditions,
always good to have in the testing arsenal

## Cross-browser testing

Very important especially in B2C world, where we know clients use different browsers. Playwright makes cross browser very easy so it is important to run tests
on multiple browsers.


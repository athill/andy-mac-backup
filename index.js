const refresh = require('@athill/computer-refresh');
const { readFileSync } = require('fs');
const yaml = require('js-yaml');

const configfile = 'config.yml';

let config;
try {
  config = yaml.safeLoad(readFileSync(configfile, 'utf8'));
} catch (error) {
  console.log('ERROR: Cannot load config file', error);
  process.exit(1);
}

refresh(config);
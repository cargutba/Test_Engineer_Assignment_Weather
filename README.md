# Quick Start

## Pre requisites
Having NodeJS (version 6 and up), JDK 8 and Chrome installed

## Applicaton

1. install required packages (which will also update webdriver)
`npm install`

Alternative installation (if the above install step did not work)

1. Run in cmd: npm install -g protractor
2. Run in cmd: webdriver-manager update

To start test:
1. Run in cmd: webdriver-manager start
- Run in cmd: cd folder_with_tests
- Run in cmd: protractor protractor.config.js

Alternative test start (if the above steps did not work):

2. Using two tabs:
- start selenium (first tab): `npm run protractor:start-webdriver`
- start tests (second tab): `npm run protractor:run`

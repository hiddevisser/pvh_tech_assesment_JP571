## pvh-tech-challenge

#### status: done

### Introduction

This project is part of the tech challenge for PVH. This project aims to demonstrate the use of WebdriverIO with Cucumber, TypeScript, and Allure.

The test cases executed for this project are for the following:

- Account Creation
- Add Address

These are aimed towards a specific clothing brand website.

### Requirements

1. NodeJS (Tested using version: v14.16.0) [https://nodejs.org/en/]
2. Java SDK (Minimum version: 1.8) [https://www.oracle.com/java/technologies/javase-downloads.html#JDK8]

### Installation

1. Clone this project
2. CD into the directory

```
cd pvh-tech-challenge
```

3. Run the following command to install the dependencies

```
npm install
```

### How to run the tests

Run the following command to run the tests

```
npm run test
```

### How to generate and open the report

The following command generates the report, and creates a local web server which serves the Allure report.
That which is immediately opened in your default web browser.

```
npm run allure-report
```

### How to format all files

The following command uses Prettier[https://prettier.io] to format the files. The formatting configuration is found in the `.prettierrc` file

To automatically format the files:

```
npm run prettier:format
```

To check which files do not follow the formatting guidelines:

```
npm run prettier:check
```

### Troubleshooting

1. If you have problems with the installation, delete the `package-lock.json` and `node_modules` folder, and re-run command:

```
npm install
```

### Known Issues

1. There is still currently an issue with the `Add address to address book` feature file, where it is flaky due to a pop-up modal that sometimes covers a specific element upon logging in
2. This has been tested with headless, however that is not currently recommended, there were issues where it was not able to detect various elements
3. ~~Some of the steps in the allure report may show question marks/unknown status for the failed/passed steps. Need to investigate with the allure reporting plugin to figure out how to fix this~~

### Further Improvements

In the interest of time, the following improvements were not implemented:

1. [ ] Improvements to work seamlessly with headless
2. [ ] Improvements to work with mobile view
3. [ ] Improvements to work with actual mobile using appium
4. [ ] Improvements to run using docker and selenium standalone
5. [x] Improvements to figure out why allure reports generate incorrect step status sometimes
6. [x] Add Prettier to promote and force better formatting

### Useful Links

1. WebdriverIO [https://webdriver.io]
2. Allure Reports [https://github.com/allure-framework]

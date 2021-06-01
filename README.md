# pvh tech assessment jp571
The technical assignment for PVH

```diff 
Project health:
+ working
```

<!-- ```diff 
- broken - text in red
+ working - text in green
! in progress - text in orange
# out of support - text in gray
@@ text in purple (and bold)@@
```-->

## INTRO
This assignment is developed in Typescript with BDD (Cucumber) and WebdriverIO.

## TECHNOLOGIES:
* Typescript
* Cucumber
* WebdriverIO
* Docker
* Allure reporting

## INSTALLATION
1. NodeJS (Tested with v14.17.0 LTS) [https://nodejs.org/en/]
2. Java JDK (version: 1.8) [https://www.oracle.com/java/technologies/javase-downloads.html#JDK8]

### PRE-REQUISITES
1. Clone the project by: <br> `git clone https://github.com/hiddevisser/pvh_tech_assesment_jp571.git`
2. Change directory into project directory: <br> `cd ./pvh_tech_assesment_jp571`
3. Install project dependencies: <br> `npm install`

### TEST EXECUTION
For executing the tests, you will have to run the command:<br>
`npm run test` 

### REPORTING
The project uses the allure reporting capabilities, after the test execution you can view the HTML report by executing the allure command:<br>
`npm run allure-report`

## IMPROVEMENTS
For future development, I would like to add the following functionality:<br>
* [X] Docker implementation
* [ ] Docker implementation using Selenium Grid
* [ ] Support on running headless
* [ ] Add screenshot on failure for allure reporting
* [ ] Video recording of the test execution
* [ ] Performance metrics (using tick stack)
* [ ] Configuring the pipeline (un-attended test execution)

## KNOWN ISSUES
* ~~Accepting the cookies seems to work only for the first test~~
* Headless is not supported, seems to have issues with accepting the cookies
* Docker is currently out of support due to the tests failing on accepting the cookies

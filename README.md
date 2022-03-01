# Nightwatch.js
Nightwatch.js - open source automated testing framework 

## Installation and Setup
- Install Node.js Add in System variables path for Node.js (it is probably C:\ProgramFiles\nodejs\).
- Create a new folder Create a new folder for example newTestFramework.
- Create a file called **nightwatch.js** input this line **require(“./node_modules/nightwatch/bin/runner.js”)**;
- In the terminal run the command **npm init** this will create a **package.json** file.
  <br>Press Enter for all questions.
- Now install nightwatch using npm
  <br>Run command in terminal **npm install nightwatch --save**
- Make new folders pages, tests, lib. In folder lib create another folder drivers.
- Download the latest version of **Selenium server standalone** - <br>
  https://selenium-release.storage.googleapis.com/index.html?path=3.141/.
- Download the latest version of Chrome Driver For windows. 
  <br>Make sure to download **chromedriver.exe**
  based on your OS and browser version - <br>https://chromedriver.storage.googleapis.com/index.html.
- From downloaded folder, move both files - Selenium Standalone 3.x.x. jar and chromedriver to /lib directory on your project.
- Create and Copy following **nightwatch.json** and paste into your project.
- Set path for selenium and chrome driver in **nightwatch.json**.
- Change the **start_process:true** in **nightwatch.json** configuration file.
- In the terminal run **node nightwatch e-chrome tag tagname**.
- **e-chrome** stands for which browser environment you want to run your tests (Chrome,Firefox, IE etc).
- **tag tagname** flag is to tell nightwatch which test to run.
- Command **node nightwatch tests/filename.js -e chrome** can also be used.
- **tests** is the directory where the javascript testing files are stored.

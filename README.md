# Pure typescript boilerplate webapp for browser
A boilerplate web-application in pure TypeScript for browser

### Pre-requisites
Required [node.js](https://nodejs.org/en/) to be installed on your system.

### Setup for development
Run these commands on terminal
1. ```git clone https://github.com/isurfer21/pure-typescript-boilerplate-webapp-for-browser.git```
2. ```cd pure-typescript-boilerplate-webapp-for-browser```
3. ```npm install -g typescript```
4. ```tsc --build```

### Debugging: ON
1. In tsconfig.json file, set the property ```"sourceMap": true``` of ```"compilerOptions"```
2. Run a local server (e.g., [Suxm](https://github.com/isurfer21/Suxm)) at repository
3. Open the serving URL in browser, e.g., Chrome
4. Open the *Developer Tools* to *Inspect* in Chrome
5. Go to *Sources* tab, open sidebar navigator, select *Page* section
6. Find the *typescript* files to debug

**Warning**: If you open ```index.html``` directly on browser, then mapped typescript files won't get listed.

### Debugging: OFF
1. In tsconfig.json file, set the property ```"sourceMap": false``` of ```"compilerOptions"```
2. Either open ```index.html``` directly on browser, or serve it via local server
3. Open the *Developer Tools* to *Inspect* in Chrome
4. Go to *Sources* tab, open sidebar navigator, select *Page* section
5. Find the *javascript* files to debug, because *typescript* files won't get listed

<p align="center" <img src="https://www.typescriptlang.org/images/branding/two-colors.svg" width="400"/></p>

# typescript Basic

### Typescript Download
- First install Node js
- For install typescript  globally write this command in your cmd `npm install -g typescript` or TypeScript in Your Project write this command `npm install typescript --save-dev`
- Know more about Typescript(https://www.typescriptlang.org/download)

### Run typescript project
- add one index.html file
- create one file ex: analytics.ts
- add script file with src ` <script src="analytics.js" defer></script> `
- write `tsc analytics.ts` in the terminal (this will generate analytics.js)

### Generating pakage.json and working with console
- npm init
- npm install --save-dev lite-server
- add ` "start":"lite-server" ` in pakage.json file
- npm start

### Typescript compiler and configuration
- If we want typescript to watch our desired file then write `tsc app.ts --w` or `tsc app.ts --watch` in the terminal
- If we want typescript to watch our whole projects file,write `tsc --init` this will generate one "tsconfig.json" file
- then for running the project we can simply write `tsc` and for watch mode `tsc --w `
- If we want any file don't need to run , then add ` "exclude":[ "app.ts"] ` in tsconfig.json file.

# Loom Pedals AdaCAD

Last updated: `December 1, 2023`

A fork of [AdaCAD](https://github.com/UnstableDesign/AdaCAD/) that allows the web app to interface directly with a computer-controlled loom.
Must be used with its counterpart: [https://github.com/LoomPedals/Loom-Pedals-Distribution](https://github.com/LoomPedals/Loom-Pedals-Distribution)

## Prerequisite Knowledge
- Intermediate JavasScript/TypeScript – if you know JavaScript but not TypeScript, it should be fairly easy to pick up TypeScript basics.
- Basic HTML/CSS – enough to understand how these file types are structured and interact with scripts

## Dependencies
- [Node.JS](https://nodejs.org/en) `v20.10.0`
- Node Package Manager (npm) 
- [Angular CLI](https://angular.io/cli) - requires a minimum Node.js version of either v12.20, v14.15, or v16.10.

To install dependencies:
1. [Install latest stable version of Node.JS and npm.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install Angular with `npm install -g @angular/cli`.

## Installation
1. Clone this repository onto your local hard drive.
3. Open your terminal on the local root directory and run `npm install` to download the requirements. This can take a while.
4. Once installed, run `ng serve` in the terminal. If your system doesn't recognize `ng serve`, make sure that you're in the app and run `node_modules/.bin/ng serve`.  Wait for Angular to compile the app, and it should tell you once it's ready.
5. Navigate to `http://localhost:4200/` in a web browser and you should see AdaCAD!

# Roadmap
- Eventually, this repository will be integrated with the hardware control into one repository (and one Node.JS process).

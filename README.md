This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
## Table of Contents
- [introduction](#introduction)
- [todo](#todo)
- [how to start](#how-to-start)
- [available commands](#available-commands)
- [npm packages used](#npm-packages-used)

## Introduction
A deployed version of this app can be acessed on [demo](https://mnunes01.github.io/reactcontact/)

This is a one page aplication created using [react facebok app bundle](https://github.com/facebookincubator/create-react-app)
The app uses localStorage to store a array of contacts information.
The collection is persistent on the browser and have a maximum size of 5mb (defined by localStorage)
The app was based on the flux pattern to handle external [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) data operations.

Navigating to the home page user is presented either with a list of the stored records or a message informing that the contact list is empty.
In case theres already stored contacts on the localStorage of the browser the user is using to access the app, a list is presented containing rows of contatcs.
The user can then click over the contact 'chip' to access the view/edit view or click the 'X' to remove the contact of the localStorage.

Add contact presents the user with a new contact view where the user can register a new contact, filling the fields with correct values and clicking on save.

Settings, provide the user with some utils funcionalities:
* Create Dummy Data - creates a dummy static record on the localStorage collection
* Console log stored collection - outputs the localStorage content on the browser console
* Clear collection - removes all contents of the localStorage and cleaning up the contact list

The fields validation is done in two stages
* before submitAction, using 'require' param on html input field
* after submit using npm [validator](https://www.npmjs.com/package/validator) package and testing against empty and email format.


The View / Edit / New is shared by the Component contactform

The file structure is organized by the following folders:
* Actions -> stores the dispacther actions to interact with the store.
* Pages -> stores the used modules and views
** <components_folder> ->
* index.jsx -> main component file, controller, deals with logic and renders the view
*** "__tests__" -> JEST tests
*** "components" -> main component folder
**** "view<component name>" -> stores the view
* stores
Holds the store that handles the [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) data from local storage to the aplication and the emit messages.

## Todo
* Split the store class and the methods to access local storage
* Implement Bootstrap and improve the UI (really poor atm)
* Implement data validation on store class
* add export/import methods to the settings
* validate against duplicate records
* ...

## How To Start
To run the project on development enviroment simple run
- npm install
- npm start

navigate to http://localhost:3000 on your favourite browser and enjoy.


## Available commands
Package.json contains several scrips that can be run with npm

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Will run the predeploy command that will run the build command and after a successfull build will deploy the build to the github pages specified on homepage package.json property

### `npm run cleanup`

Removes the .cache dir and its contents after a failed github pages deploy.

### `npm run analyze`

Analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

### `npm test`

Runs the tests specified on <component>.text.js or under '__tests__' folder

### `npm run standard`

Execute the linter and fix any not compliant code.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Npm packages used
Besides the pre includede with [react facebok app bundle](https://github.com/facebookincubator/create-react-app) ,several packages have been used on the development of this project:

react-virtualized-select [more info](https://www.npmjs.com/package/react-virtualized-select)
source-map-explorer - [more info](https://www.npmjs.com/package/source-map-explorer)
country-list - [more info](https://www.npmjs.com/package/country-list)
lodash - [more info](https://www.npmjs.com/package/lodash)
material-ui - [more info](https://www.npmjs.com/package/material-ui)
material-ui-icons - [more info](https://www.npmjs.com/package/material-ui-icons)
validator - [more info](https://www.npmjs.com/package/validator)

The use of this packages and its components was based on the need of a fast development and the DRY pattern.
All of the included packages are maintened used across a significant number of projects




* Made with love at the sound of:
<<<<<<< HEAD
* [RadioHead - TKOL RMX 123467](https://open.spotify.com/album/47xaqCsJcYFWqD1gwujl1T)
* [minilogue](https://www.youtube.com/watch?v=qgiL7lsIATA)
* [Adam Beyer b2b Joseph Capriati](https://www.youtube.com/watch?v=0QLmIL7ffcQ)
* [DJVadim](https://www.youtube.com/watch?v=alJTygi_A9k)


@Mnunes 2017 hello:[Mnunes01@hotmail.com](mailto:mnunes01@hotmail.com)
=======
** [RadioHead - TKOL RMX 123467](https://open.spotify.com/album/47xaqCsJcYFWqD1gwujl1T) **
** [minilogue](https://www.youtube.com/watch?v=qgiL7lsIATA) **
** [Adam Beyer b2b Joseph Capriati](https://www.youtube.com/watch?v=0QLmIL7ffcQ) **
** [DJVadim](https://www.youtube.com/watch?v=alJTygi_A9k) **


* @Mnunes 2017 hello:[Mnunes01@hotmail.com](mailto:mnunes01@hotmail.com)
>>>>>>> e926f8d0bef41bc94903bd5b49236a6cde6d9c8d

# zookillsoccer
---------------------

A basic game designed to teach concepts in OOP programming. Derived from es6-boilerplate on this same site.

## Setup and installation (Make sure NodeJS is installed)
1. Open TWO terminal windows
1. Navigate into the default directory (both Terminal windows)
2. In Terminal Window #1:
   - Run "npm install" in Terminal Window #1
   - Go sudo su and type password.
   - Run "npm install grunt -g"
   - Type "exit" (takes you out of sudo)
   - After the install is complete, run "grunt" in that window. The Terminal 
     will watch for file changes, and automaticall re-compile your JavaScript 
     written in ES6 down to ES5, which most browsers need.
3. In Terminal Window #2:
   - Run "npm start" in Terminal window #2. 
   - The web server should start up.

## Using the boilerplate
1. Make a copy so you have it for future projects
2. Edit the JavaScript in the /modules folder
3. Each time you save index.js, you should see some action in Terminal Window #1 as 
   your JavaScript is "transpiled" and copied to the /dist folder
4. If you use the 'import' command in index.js, the file specified will be "bundled"
   and added to the app.js file.

## Adding a Git Repository, and uploading
1. Log into Github.com
2. Create an empty repository with the same name as your project
3. Navigate into the default directory of the project
4. "git init"
5. "git remote add origin https://github.com/your_username/your_projectname.git"
6. "git add *" (add all changed files to upload)
7. "git status" (check that changed files were added)
8. "git commit -m 'first upload'" (commit to upload with this "snapshot")
9. "git push origin master" (you'll be prompted for username and pwd)

## Adding new ES6 classes
1. Create a new file, whose name is same as the class (e.g. Something.js for an ES6 class "Animal.js")
2. Create the ES6 classes in the file. 
3. It may be useful to create inheritance classes in one files
     class Animal {...}
     class Mammal extends Mammal {...}
   However, it is a common practice to have one class per file
4. If you are subclassing, remember to put the Import at the top
   import Animal from './Animal.js'
   class Mammal extends Animal {...}
3. Remember to add super() to the subclasses
4. Export the ES6 class 
     export {Animal, Mammal}
5. In the main file (index.js) do an ES6 class import
     import {Animal, Mammal} from './Animal.js'


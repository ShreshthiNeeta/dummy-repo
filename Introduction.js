//npm(node package manager)calls a reausable code a package.(A package is essentially a folder that contains javaScript code)
//sharing javaScript code-(npm/modules/dependencies)

/*
->npm- global command,comes with node
  npm -- version
* There are two flavours
->local dependency - use it only in this particlar project
  npm i <packageName>
->global dependecy -use it in any project
  npm install -g <packageName>


  package.json - manifest file (stores important info about our project/package)
->manual approach(create package.json in the root, create properties etc)
->auto approach 
  npm init (step by step, press enter to skip)
  npm init -y (everything default)

  npm i lodash (lodash dependency)
  npm i bootsrap
*/
const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
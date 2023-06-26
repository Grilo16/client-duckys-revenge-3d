const { generateTemplateFiles } = require('generate-template-files');
const { toCamelCase } = require("./helpers/caseHelpers")
const { updateIndexHelper } = require("./helpers/updateIndexHelper");
const {componentsPath, pagesPath} = require("../appSetup.json");
const { getDirectories } = require('./helpers/dirHelpers');

const startGenerator = () => {
const generateChildrenObjects = getDirectories(`./src/${componentsPath}`).map(parentName => ({
    option: `${parentName} <--- New child component`,
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/tools/templates/componentTemplates/newComponentTemplateChild/',
    },
    stringReplacers: [{ question: 'Insert child component name', slot: '__componentName__' }],
    dynamicReplacers: [
      {slot: '__parentName__', slotValue: parentName},
    ],
    output: {
      path: `./src/${componentsPath}__parentName__CamelCase__/__componentName__CamelCase__/`,
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      startGenerator()
    },
}))

generateTemplateFiles([
  {
    option: 'Start new parent component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/tools/templates/componentTemplates/newComponentTemplateParent/',
    },
    stringReplacers: [{ question: 'Insert component name', slot: '__componentName__' }],
    output: {
      path: `./src/${componentsPath}__componentName__CamelCase__/`,
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
    onComplete: (results) => {
        const [{slotValue: componentName}] = [...results.stringReplacers]
        updateIndexHelper(toCamelCase(componentName), componentsPath)
        startGenerator()
      },
  },
 ...generateChildrenObjects
]);

}

startGenerator()
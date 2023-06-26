const { generateTemplateFiles } = require('generate-template-files');
const { toCamelCase } = require("./helpers/caseHelpers")
const { updateIndexHelper } = require("./helpers/updateIndexHelper");
const {componentsPath, pagesPath} = require("../appSetup.json");
const { getDirectories } = require('./helpers/dirHelpers');

const startGenerator = () => {
const generateChildrenObjects = getDirectories(`./src/${pagesPath}`).map(parentName => ({
    option: `${parentName} <--- New sub page`,
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/tools/templates/pageTemplates/newSubPageTemplate/',
    },
    stringReplacers: [{ question: 'Insert new sub page name', slot: '__pageName__' }],
    dynamicReplacers: [
      {slot: '__parentName__', slotValue: parentName},
    ],
    output: {
      path: `./src/${pagesPath}__parentName__CamelCase__/__pageName__CamelCase__/`,
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      const [{slotValue: pageName}] = [...results.stringReplacers]
      updateIndexHelper(toCamelCase(pageName), `${pagesPath}/${toCamelCase(parentName)}/`)
      startGenerator()
    },
}))

generateTemplateFiles([
  {
    option: 'Start new page',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/tools/templates/pageTemplates/newPageTemplate/',
    },
    stringReplacers: [{ question: 'Insert page name', slot: '__pageName__' }],
    output: {
      path: `./src/${pagesPath}__pageName__CamelCase__/`,
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
    onComplete: (results) => {
        const [{slotValue: pageName}] = [...results.stringReplacers]
        updateIndexHelper(toCamelCase(pageName), pagesPath)
        startGenerator()
      },
  },
 ...generateChildrenObjects
]);

}

startGenerator()
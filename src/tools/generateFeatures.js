const { generateTemplateFiles } = require('generate-template-files');
const { toCamelCase } = require("./helpers/caseHelpers")
const { updateIndexHelper } = require("./helpers/updateIndexHelper");
const { featuresPath } = require("../appSetup.json")

generateTemplateFiles([
  {
    option: 'Create new state reducer',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './src/tools/templates/featureTemplates/__reducerName__Reducer.js',
    },
    stringReplacers: [{ question: 'Insert new state reducer name', slot: '__reducerName__' }],
    output: {
      path: `./src/${featuresPath}reducers/__reducerName__Reducer.js`,
      pathAndFileNameDefaultCase: '(camelCase)',
      overwrite: true,
    },
    onComplete: (results) => {
        const [{slotValue: reducerName}] = [...results.stringReplacers]
        updateIndexHelper(`${toCamelCase(reducerName)}Reducer`, `${featuresPath}reducers/`)
      },
  },

]);
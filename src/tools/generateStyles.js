const { generateTemplateFiles } = require('generate-template-files');
const { toPascalCase } = require("./helpers/caseHelpers")
const { updateIndexHelper } = require("./helpers/updateIndexHelper");
const { stylesPath } = require("../appSetup.json")

generateTemplateFiles([
  {
    option: 'Start new common styled component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/tools/templates/styleTemplates/newStyledComponentTemplate/',
    },
    stringReplacers: [{ question: 'Insert new styled component name', slot: '__elementName__' }, { question: 'Insert styled component type', slot: '__elementType__' }],
    output: {
      path: `./src/${stylesPath}commonStyledComponents/`,
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
    onComplete: (results) => {
        const [{slotValue: elementName},{slotValue: elementType}] = [...results.stringReplacers]
        updateIndexHelper(toPascalCase(elementName)+toPascalCase(elementType), `${stylesPath}commonStyledComponents/`)
      },
  },

]);
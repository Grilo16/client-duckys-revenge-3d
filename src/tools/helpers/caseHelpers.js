const toTitleCase = (string) => {
    const output = string.replaceAll(/\w+/g, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    return output
}

const toPascalCase = (string) => {
    const output = toTitleCase(string).replaceAll(" ", "")
    return output
}


const toCamelCase = (string) => {
    const output = toPascalCase(string)
    return output[0].toLowerCase() + output.slice(1)
}

const toKebabCase = (string) => {
    const output = string.toLowerCase().replaceAll(" ", "-")
    return output
}


exports.toTitleCase = toTitleCase
exports.toPascalCase = toPascalCase
exports.toCamelCase = toCamelCase
exports.toKebabCase = toKebabCase

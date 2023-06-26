
const { readdirSync } = require("fs")

const getDirectories = (source) => {
    return readdirSync(source, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name.split(/(?=[A-Z])/).join(" "))
}


const getCurrentDirName = (path) => {
    return path.slice(path.lastIndexOf('/') + 1).split(".")[0]
}

exports.getDirectories = getDirectories
exports.getCurrentDirName = getCurrentDirName

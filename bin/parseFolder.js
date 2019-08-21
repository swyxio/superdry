const path = require('path')
const fs = require('fs')
const { niceError } = require('./niceError')

const Tantrum = Error
// this is the meat of superdry
function parseFolder(pathToParse) {
  let strArr = [] // to store results to be later concatenated
  let strRegistry = new Map()
  const fileOrFolderNames = fs.readdirSync(pathToParse)
  fileOrFolderNames.forEach((fileOrFolderName) => {
    if (fileOrFolderName.toLowerCase() === 'readme.md') return // allow people to write Readme's because i'm not evil
    let charNumbers = fileOrFolderName.split(',').map(Number)
    let char // we will read from file or folder into this variable
    const fileOrFolderPath = path.join(pathToParse, fileOrFolderName)
    if (fs.lstatSync(fileOrFolderPath).isDirectory()) {
      char = parseFolder(fileOrFolderPath) // recursive
    } else {
      char = fs.readFileSync(fileOrFolderPath).toString()

      // validate 1 character
      if (char.length !== 1)
        throw new Tantrum(`
Fatal Error: file ${fileOrFolderPath} has more than one character! 

Please be more DRY. Your code should embrace the single responsibility principle.

`)
      // validate no repeated character
      if (strRegistry.has(char)) {
        throw new Tantrum(`
Fatal Error: ${fileOrFolderPath} contains "${char}" 
This character "${char}" was already set by ${strRegistry.get(char)}.

Please be more DRY. Your files should embrace the single responsibility principle.
        `)
      } else {
        strRegistry.set(char, fileOrFolderPath)
      }
    }
    charNumbers.forEach((num) => {
      if (typeof strArr[num] !== 'undefined')
        console.warn(
          `Warning: slot ${num}  in ${pathToParse} is already occupied by ${strArr[num]}, we will override it #YOLO`,
        )
      strArr[num] = char
    })
  })
  // everything has been read, now concat all
  return strArr.join('')
}

module.exports = { parseFolder } // done like this so we can recurse

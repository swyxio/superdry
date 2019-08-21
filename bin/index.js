#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const vm = require('vm')
const { parseFolder } = require('./parseFolder')

const { niceError } = require('./niceError')

/**
 *
 * STEP 1: parse args!
 *
 *  */
const [
  command, // only "watch" or "build" or "run"
  sourcePath, // valid source path
  outputPath = 'output/bundle.js', // optional output file
  ...rest
] = process.argv.slice(2)

// // todo: flag parsing
// let runFlag = false // optional, --run
// let executionCtx = null // reserved for future use
// let _inParseFlagMode = false
// // crappy inline fix for the optional outputPath
// if (outputPath === '--run') {
//   outputPath = 'output/bundle.js'
//   runFlag = true
// }
// rest.forEach((arg, i) => {
//   if (arg === '--run') {
//     if (_inParseFlagMode) {
//       niceError('did you pass --run flag twice?! naughty.')
//     } else {
//       _inParseFlagMode = true
//       runFlag = true
//     }
//   } else {
//     if (_inParseFlagMode && runFlag) {
//       if (executionCtx !== null) niceError('multiple run args detected. naughty.')
//       executionCtx = arg
//     }
//   }
// })

/**
 *
 * Validates CLI input
 *
 */
if (!['watch', 'build', 'run'].includes(command))
  niceError(
    `Unrecognized command passed: ${command}. You are only allowed to pass "watch" or "build" as the first argument to superdry.`,
  )
const mainPath = path.resolve(sourcePath)
if (!fs.existsSync(mainPath)) niceError(`Unrecognized path passed: ${mainPath}. This path must exist.`)
// // todo: flag validation in future
// if (typeof runFlag !== 'undefined') {
//   if (runFlag !== '--run')
//     niceError(
//       `Unrecognized flag passed: ${runFlag}. You are only allowed to pass "--run" as the third, optional, argument to superdry.`,
//     )
// }

/**
 *
 * STEP 2: actually parse folders!
 *
 */
const compiledCode = parseFolder(mainPath)

/**
 *
 * STEP 3: output or run
 *
 */

const finalOutputPath = path.resolve(outputPath)
// todo: just combine write and make folders along the way
// if (!fs.existsSync(finalOutputPath)) fs.mkdirSync(finalOutputPath)
if (command === 'build') {
  console.log('> writing to ' + finalOutputPath)
  fs.writeFileSync(finalOutputPath, compiledCode)
} else if (command === 'watch') {
  // Todo: make this actually watch
  console.log('> writing to ' + finalOutputPath)
  console.log('note: watching not yet implemented')
  fs.writeFileSync(finalOutputPath, compiledCode)
} else if (command === 'run') {
  // const sandbox = {}
  // vm.createContext(sandbox) // weird contextifying api
  // vm.runInContext(compiledCode, sandbox)
  vm.runInThisContext(compiledCode, { filename: mainPath })
} else {
  throw new Error('unanticipated command: ' + command)
}

import {
  src, dest, watch, series, lastRun
} from "gulp"
// https://www.npmjs.com/package/gulp-typescript-formatter
import typescriptFormatter from "gulp-typescript-formatter"
// https://www.npmjs.com/package/gulp-tslint
import tslint from "gulp-tslint"
// https://www.npmjs.com/package/gulp-typescript
import ts from "gulp-typescript"
// https://www.npmjs.com/package/gulp-typedoc
const typedoc = require("gulp-typedoc")
// https://www.npmjs.com/package/gulp-typescript#using-tsconfigjson
const tsProject = ts.createProject("tsconfig.json")
const _path = {
  source: "./src/**/*.ts",
  destination: "./build",
  baseDir: ".",
}

/**
 * *****************************************
 */

function _lint({ source }) {
  return src(source, { since: lastRun(_lint) })
    .pipe(
      tslint({
        configuration: "./tslint.json",
        fix: true,
      })
    )
    .pipe(tslint.report({
      emitError: false
    }))
    .on("error", err => {
    })
}

function _typescript({ source, destination }) {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(dest(destination))
}

function _watch({ source }) {
  return watch(source, series("lint", "typescript"));
}

function _typedoc({ source }) {
  return src("./src/index.ts")
    .pipe(typedoc({
      module: "commonjs",
      mode: "modules",
      target: "es5",
      out: "docs/",
      name: "kjs",
      exclude: "__tests__/*",
      // includeDeclarations: true,
    }))
}

exports.watch = () => _watch(_path)
exports.lint = () => _lint(_path)
exports.typescript = () => _typescript(_path)
exports.typedoc = () => _typedoc(_path)
exports.default = () => _watch(_path)

/* Lint used in place
function _format({ source, baseDir }){
  return src(source, { since: lastRun(_format) }).pipe(
    typescriptFormatter({
      // Options: https://github.com/vvakame/typescript-formatter/blob/master/lib/cli.ts#L25-L35
      replace: true,
      tsconfig: true,
      tslint: true,
      tsfmt: false,
      baseDir,
      //verify: boolean;
      //stdin: boolean;
      // editorconfig: boolean,
      //vscode: boolean;
      //useTsconfig: string[];
      //useTslint: string[];
      //useTsfmt: string[];
      //useVscode: string[];
      //verbose: boolean;
      //version: boolean;
    })
  )
}

exports.format = () => _format(_path)

*/

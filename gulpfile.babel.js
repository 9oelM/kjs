import { src, dest, watch, series, lastRun } from 'gulp'
// https://www.npmjs.com/package/gulp-typescript-formatter
import typescriptFormatter from 'gulp-typescript-formatter'
// https://www.npmjs.com/package/gulp-tslint
import tslint from 'gulp-tslint'
// https://www.npmjs.com/package/gulp-typescript
import ts from 'gulp-typescript'
// https://www.npmjs.com/package/gulp-typescript#using-tsconfigjson
const tsProject = ts.createProject('tsconfig.json')

const _path = {
  source: './src/*.ts',
  destination: './build',
  baseDir: '.',
}

const doNothing = a => a

/**
 * *****************************************
 */

const _lint = ({ source }) =>
  src(source, { since: lastRun(_lint) })
    .pipe(
      tslint({
        configuration: './tslint.json',
        fix: true,
      })
    )
    .pipe(tslint.report())
    .on('error', err => {
      doNothing(err)
    })

const _format = ({ source, baseDir }) =>
  src(source, { since: lastRun(_format) }).pipe(
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

const _typescript = ({ source, destination }) =>
  src(source, { since: lastRun(_typescript) })
    .pipe(tsProject(ts.reporter.nullReporter()))
    .on('error', err => {
      console.log(err)
    })
    .pipe(ts())
    .on('error', err => {
      console.log(err)
    })
    .pipe(dest(destination))

const watcher = watch(_path.src)

const _watch = _path => {
  return watcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed`)
    return series(
      // 1. format
      () => _format(_path),
      // 2. tslint
      () => _lint(_path),
      // 3. typescript compile
      () => _typescript(_path)
    )
  })
}

exports.watch = _watch
exports.format = () => _format(_path)
exports.lint = () => _lint(_path)
exports.typescript = () => _typescript(_path)
exports.default = () => console.log('test')

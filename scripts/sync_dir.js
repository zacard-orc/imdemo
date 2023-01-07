const copydir = require('copy-dir')
const { resolve } = require('path')

const bp = __dirname
const srcp = resolve(bp, '../', 'src/mds')
const dstp = resolve(bp, '../', 'dist/mds')

copydir.sync(srcp, dstp, {
  utimes: true,
  mode: true,
  cover: true,
})

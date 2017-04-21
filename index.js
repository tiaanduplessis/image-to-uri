'use strict'

const fs = require('fs')
const path = require('path')

const extTypeMap = {
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.bm': 'image/bmp',
  '.bmp': 'image/bmp',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
}

module.exports = function (file) {
  const image = fs.readFileSync(file)
  const contentType = extTypeMap[path.extname(file)] || 'image/jpeg'
  return `data:${contentType};base64,${image.toString('base64')}`
}

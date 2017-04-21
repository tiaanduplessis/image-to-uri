#!/usr/bin/env node
'use strict'

const file = process.argv[2]
const imageToUri = require('./')
console.log(imageToUri(file))

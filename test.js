/* eslint-env jest */
'use strict'

const imageToUri = require('./')

test('image-to-uri', () => {
  const result = imageToUri('./example.jpg')

  expect(imageToUri).toBeDefined()
  expect(typeof result).toBe('string')
})

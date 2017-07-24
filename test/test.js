const assert = require('assert')
const getRandomly = require('../')
const str = 'foo';
const arr = [function () {}, 'bar', {}]
const obj = { foo: true, bar: false }

describe('Main test', function () {
  it('Test get char randomly from an string', function () {
    assert(str.indexOf(getRandomly(str)) !== -1)
  })

  it('Test get item randomly from an array', function () {
    assert(arr.indexOf(getRandomly(arr)) !== -1)
  })

  it('Test get value randomly from an object', function () {
    assert(typeof getRandomly(obj) !== 'undefined')
  })

  it('Test error', function () {
    try {
      getRandomly(undefined)
    } catch (err) {
      assert(err.message === 'The parameter is not a iterator.')
    }
  })
})
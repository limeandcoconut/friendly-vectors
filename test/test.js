/* eslint-disable no-new */

const test = require('ava')
// require('../wip/_go')

// const {Vector2D, Vector3D} = require('../dist/index.js')

// test('Vector2D doesn\'t throw when passed nothing.', (assert) => {
//     assert.notThrows(() => {
//         new Vector2D()
//     }, TypeError)
// })

// test('Vector2D defaults to zero vector.', (assert) => {
//     let vector = new Vector2D()
//     assert.true(vector.x === 0)
//     assert.true(vector.y === 0)
// })

// test('Vector2D accepts x and y properly.', (assert) => {
//     let vector = new Vector2D(2, 7)
//     assert.true(vector.x === 2)
//     assert.true(vector.y === 7)
// })

// test('Vector2D doesn\'t when passed an object without x and y.', (assert) => {
//     assert.notThrows(() => {
//         new Vector2D({})
//     }, TypeError)
// })

// test('Vector2D returns zero vector when passed empty object.', (assert) => {
//     let vector = new Vector2D({})
//     assert.true(vector.x === 0)
//     assert.true(vector.y === 0)
// })

// test('Vector2D throws when passed an object with non numbers', (assert) => {
//     assert.throws(() => {
//         new Vector2D({
//             x: 'a',
//             y: new RegExp(),
//         })
//     }, TypeError)
// })

// test('Vector2D accepts x and y from an object.', (assert) => {
//     let vector = new Vector2D({x: 5, y: 3})
//     assert.true(vector.x === 5)
//     assert.true(vector.y === 3)
// })

// test('Vector2D doesn\'t throw when passed an empty array.', (assert) => {
//     assert.notThrows(() => {
//         new Vector2D([])
//     }, TypeError)
// })

// test('Vector2D returns zero vector when passed empty array.', (assert) => {
//     let vector = new Vector2D([])
//     assert.true(vector.x === 0)
//     assert.true(vector.y === 0)
// })

// test('Vector2D throws when passed an array with non numbers', (assert) => {
//     assert.throws(() => {
//         new Vector2D(['a', new RegExp()])
//     }, TypeError)
// })

// test('Vector2D accepts x and y from an array.', (assert) => {
//     let vector = new Vector2D([4, 6])
//     assert.true(vector.x === 4)
//     assert.true(vector.y === 6)
// })

// test('Vector2D accepts x and y from another Vector2D.', (assert) => {
//     let vector = new Vector2D(4, 6)
//     let vector2 = new Vector2D(vector)
//     assert.true(vector2.x === 4)
//     assert.true(vector2.y === 6)
// })

// test('Vector2D computes magnitude properly.', (assert) => {
//     let x = Math.random() * 10
//     let y = Math.random() * 100
//     let vector = new Vector2D(x, y)
//     let magnitude = Math.sqrt((x * x) + (y * y))
//     assert.true(vector.magnitude() === magnitude)
// })


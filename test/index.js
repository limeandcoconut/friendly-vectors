/* eslint-disable no-new */
const test = require('ava')

const {Vector2D} = require('../dist/index.js')

test('Vector2D doesn\'t throw when passed nothing.', (t) => {
    t.notThrows(() => {
        new Vector2D()
    }, TypeError)
})

test('Vector2D defaults to zero vector.', (t) => {
    let vector = new Vector2D()
    t.true(vector.x === 0)
    t.true(vector.y === 0)
})

test('Vector2D accepts x and y properly.', (t) => {
    let vector = new Vector2D(2, 7)
    t.true(vector.x === 2)
    t.true(vector.y === 7)
})

test('Vector2D doesn\'t when passed an object without x and y.', (t) => {
    t.notThrows(() => {
        new Vector2D({})
    }, TypeError)
})

test('Vector2D returns zero vector when passed empty object.', (t) => {
    let vector = new Vector2D({})
    t.true(vector.x === 0)
    t.true(vector.y === 0)
})

test('Vector2D throws when passed an object with non numbers', (t) => {
    t.throws(() => {
        new Vector2D({
            x: 'a',
            y: new RegExp(),
        })
    }, TypeError)
})

test('Vector2D accepts x and y from an object.', (t) => {
    let vector = new Vector2D({x: 5, y: 3})
    t.true(vector.x === 5)
    t.true(vector.y === 3)
})

test('Vector2D doesn\'t throw when passed an empty array.', (t) => {
    t.notThrows(() => {
        new Vector2D([])
    }, TypeError)
})

test('Vector2D returns zero vector when passed empty array.', (t) => {
    let vector = new Vector2D([])
    t.true(vector.x === 0)
    t.true(vector.y === 0)
})

test('Vector2D throws when passed an array with non numbers', (t) => {
    t.throws(() => {
        new Vector2D(['a', new RegExp()])
    }, TypeError)
})

test('Vector2D accepts x and y from an array.', (t) => {
    let vector = new Vector2D([4, 6])
    t.true(vector.x === 4)
    t.true(vector.y === 6)
})

test('Vector2D accepts x and y from another Vector2D.', (t) => {
    let vector = new Vector2D(4, 6)
    let vector2 = new Vector2D(vector)
    t.true(vector2.x === 4)
    t.true(vector2.y === 6)
})

test('Vector2D computes magnitude properly.', (t) => {
    let x = Math.random() * 10
    let y = Math.random() * 100
    let vector = new Vector2D(x, y)
    let magnitude = Math.sqrt((x * x) + (y * y))
    t.true(vector.magnitude() === magnitude)
})

// test('Vector2D returns a vector of magnitude 1 when normalizing.', (t) => {
//     let x = (Math.random() * 10) + 1
//     let y = (Math.random() * 100) + 1
//     let vector = new Vector2D(x, y)
//     t.true(vector.normalize().magnitude() === 1)
// })

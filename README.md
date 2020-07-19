# Friendly Vectors
A package for doing 2D and 3D vector math. It provides `Vector2D` and `Vector3D` classes with simple human readable methods.


## Usage

```js
const {Vector2D} = require('friendly-vectors')

let v = new Vector2D(1, 0)

let w = new Vector2D(1, 1)

let u = Vector2D.tripleCross(v, w, v)

console.log(u) // Vector2D { x: 0, y: 1 }
```

## Testing
Coming soon.

## TODO:

- [ ] Better Description
- [ ] Full tests
- [ ] Switch to Jest?
- [ ] Usage stats
- [ ] Clean up Vector3D


## Feedback ✉️

[Website 🌐](https://jacobsmith.tech)

[js@jacobsmith.tech 📧](mailto:js@jacobsmith.tech)

[https://github.com/limeandcoconut 🐙😸](https://github.com/limeandcoconut)

[@limeandcoconut 🐦](https://twitter.com/limeandcoconut)

Cheers!

## License

ISC, see [license](/license) for details.

## License

ISC, see [LICENSE.md](http://github.com/limeandcoconut/friendly-vectors/blob/master/LICENSE.md) for details.

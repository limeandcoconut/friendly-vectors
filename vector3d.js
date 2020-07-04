/**
 * A module for working with 3 dimentional vectors.
 * @module
 * @todo Probably nix getOrthogonal as it's not very useful in 3d.
 * @todo Method for projecting vector onto a plane.
 * @todo Bring up to feature parity with Vector2D.
 */

// TODO: Probably nix getOrthogonal as it's not very useful in 3d.
// TODO: Method for projecting vector onto a plane.
// TODO: Bring up to feature parity with Vector2D.

/**
 * Class for representing 3D vectors.
 */
// * @class Vector3D
class Vector3D {
  /**
     * @constructor
     * @param   {number|Vector3D|object}    [x=0]   The x component of this vector or an object with properties x, y, and z
     *                                              representing all the components of this vector.
     * @param   {number}                    [y=0]   The y component of this vector.
     * @param   {number}                    [z=0]   The z component of this vector.
     * @throws  {TypeError}                         Throws if vector components are not numbers.
     */
  constructor(x = 0, y = 0, z = 0) {

    if (typeof x === 'object') {
      ({ x = 0, y = 0, z = 0 } = x)
    }

    if (typeof x !== 'number' ||
            typeof y !== 'number' ||
            typeof z !== 'number') {
      throw new TypeError('Vector componenents must be numbers.')
    }

    this.x = x
    this.y = y
    this.z = z
  }

  /**
     * Returns the scalar magnitude of this vector.
     * @method magnitude
     * @return  {Number}        A number representing the magnitud of this vector.
     */
  magnitude() {
    let { x, y, z } = this
    return Math.sqrt((x * x) + (y * y) + (z * z))
  }

  /**
     * Mutates this vector so that it's magnitude is 1 unless magnitude is already 0.
     * @method normalize
     * @return      {Vector3D}          Returns this.
     */
  normalize() {
    let magnitude = this.magnitude()

    if (magnitude !== 0) {
      this.x /= magnitude
      this.y /= magnitude
      this.z /= magnitude
    }
    return this
  }

  /**
     * Returns a new Vector3D which is the normalized version of this vector. This is non mutative.
     * @method getNormal
     * @return      {Vector3D}          Returns a new Vector3D representing the normalized version of this vector.
     */
  getNormal() {
    return new Vector3D(this).normalize()
  }

  /**
     * Inverse this vector. (mutative)
     * @method Inverse
     * @return  {Vector3D}              Returns this.
     */
  invert() {
    this.x *= -1
    this.y *= -1
    this.z *= -1

    return this
  }

  /**
     * Get a new vector that is the inverse of this one. (non-mutative)
     * @method getInverse
     * @return  {Vector3D}              Returns a new Vector3D that is the inverse of this vector.
     */
  getInverse() {
    return new Vector3D(this.x * -1, this.y * -1, this.z * -1)
  }

  /**
     * Mutates this vector by scaling it.
     * @method scale
     * @param   {Number}    scalar      A number to scale this vector by.
     * @throws  {TypeError}             Throws if argument is not a Number.
     * @return  {Vector3D}              Returns this.
     */
  scale(scalar) {
    if (typeof scalar !== 'number') {
      throw new TypeError('Argument must be a Number.')
    }
    this.x *= scalar
    this.y *= scalar
    this.z *= scalar
    return this
  }

  /**
     * Returns true if x, y, and z componenents match passed vector2d.js
     * @method equals
     * @param   {Vector3D}  other       A Vector to check component equality with.
     * @return  {Boolean}               Returns true if x, y, and z components are ===.
     */
  equals(other) {
    return other instanceof Vector3D &&
            this.x === other.x &&
            this.y === other.y &&
            this.z === other.z
  }

  /**
     * Returns a vector orthogonal to this one.
     * @method getOrthogonal
     * @return  {Vector3D}              Returns a new Vector3D Orthogonal to this one.
     */
  getOrthogonal() {
    return new Vector3D(-this.y, this.x, 0)
  }

  /**
     * Return an Array containing the components of this vector.
     * @method toArray
     * @return  {Array}                 Return an Array containing the components of this vector.
     */
  toArray() {
    return [this.x, this.y, this.z]
  }

  /**
     * Add two vectors.
     * @method add
     * @static
     * @param   {Vector3D}  a       A vector to add.
     * @param   {Vector3D}  b       A vector to add.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector3D.
     * @return  {Vector3D}          Returns a new Vector3D which is the vector sum of the two arguments.
     */
  static add(a, b) {
    this.assertVectors(a, b)
    return new Vector3D(b.x + a.x, b.y + a.y, b.z + a.z)
  }

  /**
     * Subtract two vectors. (Second argument is subtracted from first)
     * @method subtract
     * @static
     * @param   {Vector3D}  a       A vector to subtract from. (menuend)
     * @param   {Vector3D}  b       A vector to subtract. (subtrahend)
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector3D.
     * @return  {Vector3D}          Returns a new Vector3D which is the vector difference of the two arguments.
     */
  static subtract(a, b) {
    // if (typeof a === 'undefined') {
    //     return {
    //         from(a) {
    //             return Vector3D.subtract(b, a)
    //         },
    //     }
    // }

    this.assertVectors(a, b)
    return new Vector3D(a.x - b.x, a.y - b.y, a.z - b.z)
  }

  /**
     * Get the dot product of two vectors.
     * @method dotProduct
     * @static
     * @param   {Vector3D}  a       A vector.
     * @param   {Vector3D}  b       A vector.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector3D.
     * @return  {Number}            Returns the dot product or scalar product of these vectors.
     */
  static dotProduct(a, b) {
    this.assertVectors(a, b)
    return (a.x * b.x) + (a.y * b.y) + (a.z * b.z)
  }

  /**
     * Get the cross product of two vectors.
     * @method cross
     * @static
     * @param   {Vector3D}  a       A vector.
     * @param   {Vector3D}  b       A vector.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector3D.
     * @return  {Vector3D}          Returns the cross product of these vectors.
     */
  static cross(a, b) {
    this.assertVectors(a, b)
    return new Vector3D(
      (a.y * b.z) - (a.z * b.y),
      (a.z * b.x) - (a.x * b.z),
      (a.x * b.y) - (a.y * b.x),
    )
  }

  /**
     * Get the vector triple product of three vectors.
     * @method tripleCross
     * @static
     * @param   {Vector3D}  a       A vector.
     * @param   {Vector3D}  b       A vector.
     * @param   {Vector3D}  c       A vector.
     * @return  {Vector3D}          Returns the vector triple product of the vectors.
     */
  static tripleCross(a, b, c) {
    let axb = Vector3D.cross(a, b)
    return Vector3D.cross(axb, c)
  }

  /**
     * Get the cosine of the angle (theta) between two vectors.
     * @method cosineTheta
     * @static
     * @param   {Vector3D}  a       A vector.
     * @param   {Vector3D}  b       A vector.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector3D.
     * @return  {Number}            Returns the cosine of the angle (theta) between two vectors.
     */
  static cosineTheta(a, b) {
    this.assertVectors(a, b)
    var numerator = Vector3D.dotProduct(a, b)

    var denominator = a.magnitude() * b.magnitude()
    return numerator / denominator
  }

  /**
     * Throws if any argument is not an instance of Vector3D.
     * @method assertVectors
     * @static
     * @param   {*}         vectors         A rest parameter to check all values of.
     * @throws  {TypeError}                 Throws if any argument is not an instance of Vector3D.
     * @return  {Boolean}                   Returns true if all arguments are instances of Vector3D.
     */
  static assertVectors(...vectors) {
    if (Array.isArray(vectors[0])) {
      vectors = vectors[0]
    }

    vectors.forEach((vector, index) => {
      if (!(vector instanceof Vector3D)) {
        throw new TypeError(`Argument ${index} is not an instance of Vector3D.`)
      }
    })

    return true
  }
}

Vector3D.zero = new Vector3D()

module.exports = Vector3D

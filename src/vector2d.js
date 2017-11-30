/**
 * A module for working with 2 dimentional vectors.
 * @module
 * @todo Find out result of projecting zero vectors.
 */

// TODO:  Find out result of projecting zero vectors.

const Vector3D = require('./vector3d.js')

/**
 * Class for representing 2D vectors.
 */
// * @class Vector2D
class Vector2D {
    /**
     * @constructor
     * @param   {number|Vector2D|object}    [x=0]   The x component of this vector or an object with properties x and y
     *                                              representing both components of this vector.
     * @param   {number}                    [y=0]   The y component of this vector.
     * @throws  {TypeError}                         Throws if vector components are not numbers.
     */
    constructor(x = 0, y = 0) {

        if (typeof x === 'object') {
            if (Array.isArray(x)) {
                [x = 0, y = 0] = x
            } else {
                ({x = 0, y = 0} = x)
            }
        }

        if (typeof x !== 'number' ||
            typeof y !== 'number') {
            throw new TypeError('Vector componenents must be numbers.')
        }

        this.x = x
        this.y = y
    }

    /**
     * Returns the scalar magnitude of this vector.
     * @method magnitude
     * @return  {Number}        A number representing the magnitud of this vector.
     */
    magnitude() {
        let x = this.x
        let y = this.y
        return Math.sqrt((x * x) + (y * y))
    }

    /**
     * Mutates this vector so that it's magnitude is 1 unless magnitude is already 0.
     * @method normalize
     * @return  {Vector2D}              Returns this.
     */
    normalize() {
        let magnitude = this.magnitude()

        if (magnitude !== 0) {
            this.x /= magnitude
            this.y /= magnitude
        }
        return this
    }

    /**
     * Returns a new Vector2D which is the normalized version of this vector. This is non mutative to this vector.
     * @method getNormal
     * @return      {Vector2D}          Returns a new Vector2D representing the normalized version of this vector.
     */
    getNormal() {
        return new Vector2D(this).normalize()
    }

    /**
     * Inverse this vector. (mutative)
     * @method Inverse
     * @return  {Vector2D}              Returns this.
     */
    invert() {
        this.x *= -1
        this.y *= -1

        return this
    }

    /**
     * Get a new vector that is the inverse of this one. (non-mutative)
     * @method getInverse
     * @return  {Vector2D}              Returns a new Vector2D that is the inverse of this vector.
     */
    getInverse() {
        return new Vector2D(this.x * -1, this.y * -1)
    }

    /**
     * Mutates this vector by scaling it.
     * @method scale
     * @param   {Number}    scalar      A number to scale this vector by.
     * @throws  {TypeError}             Throws if argument is not a Number.
     * @return  {Vector2D}              Returns this.
     */
    scale(scalar) {
        if (typeof scalar !== 'number') {
            throw new TypeError('Argument must be a Number.')
        }
        this.x *= scalar
        this.y *= scalar
        return this
    }

    /**
     * Returns true if x and y componenents match passed vector2d.js
     * @method equals
     * @param   {Vector2D}  other       A Vector to check component equality with.
     * @return  {Boolean}               Returns true if x and y components are ===.
     */
    equals(other) {
        return other instanceof Vector2D && this.x === other.x && this.y === other.y
    }

    /**
     * Returns a vector orthogonal to this one.
     * @method getOrthogonal
     * @return  {Vector2D}              Returns a new Vector2D Orthogonal to this one.
     */
    getOrthogonal() {
        return new Vector2D(-this.y, this.x)
    }

    /**
     * Return an Array containing the components of this vector.
     * @method toArray
     * @return  {Array}                 Return an Array containing the components of this vector.
     */
    toArray() {
        return [this.x, this.y]
    }

    /**
     * Return a string representation of this Vector2D.
     * @method toString
     * @return {String}                 Return a string representation of this Vector2D.
     */
    toString() {
        return `Vector2D: {x: ${this.x}, y: ${this.y}}`
    }

    /**
     * Add two vectors.
     * @method add
     * @static
     * @param   {Vector2D}  a       A vector to add.
     * @param   {Vector2D}  b       A vector to add.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector2D.
     * @return  {Vector2D}          Returns a new Vector2D which is the vector sum of the two arguments.
     */
    static add(a, b) {
        this.assertVectors(a, b)
        return new Vector2D(b.x + a.x, b.y + a.y)
    }

    /**
     * Subtract two vectors. (Second argument is subtracted from first)
     * @method subtract
     * @static
     * @param   {Vector2D}  a       A vector to subtract from. (menuend)
     * @param   {Vector2D}  b       A vector to subtract. (subtrahend)
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector2D.
     * @return  {Vector2D}          Returns a new Vector2D which is the vector difference of the two arguments.
     */
    static subtract(a, b) {
        this.assertVectors(a, b)
        return new Vector2D(a.x - b.x, a.y - b.y)
    }

    /**
     * Get the dot product of two vectors.
     * @method dotProduct
     * @static
     * @param   {Vector2D}  a       A vector.
     * @param   {Vector2D}  b       A vector.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector2D.
     * @return  {Number}            Returns the dot product or scalar product of these vectors.
     */
    static dotProduct(a, b) {
        this.assertVectors(a, b)
        return (a.x * b.x) + (a.y * b.y)
    }

    /**
     * Get the perpendicular dot product of two vectors.
     * @method perpDot
     * @static
     * @param   {Vector2D}  a       A vector.
     * @param   {Vector2D}  b       A vector.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector2D.
     * @return  {Number}            Returns the perpendicular dot product (like a scalar cross product) of these vectors.
     */
    static perpDot(a, b) {
        this.assertVectors(a, b)
        return (a.x * b.y) - (a.y * b.x)
        // Same as:
        // return a.getOrthogonal().dot(b)
    }

    /**
     * Get the vector triple product of three vectors. This will use the third dimension but necessarily result in a
     * 2D vector in the same plane as the arguments.
     * @method tripleCross
     * @static
     * @param   {Vector2D}  a       A vector.
     * @param   {Vector2D}  b       A vector.
     * @param   {Vector2D}  c       A vector.
     * @throws  {TypeError}         Throws if any argument is not an instance of Vector2D.
     * @return  {Vector2D}          Returns the vector triple product of the vectors.
     */
    static tripleCross(a, b, c) {
        this.assertVectors(a, b, c)
        let tripleCross3D = Vector3D.tripleCross(
            new Vector3D(a),
            new Vector3D(b),
            new Vector3D(c),
        )
        // Convert back to a Vector2D.
        return new Vector2D(tripleCross3D)
    }

    /**
     * Project one vector onto another.
     * @method projectVector
     * @static
     * @param   {Vector2D}  a       The vector to project.
     * @param   {Vector2D}  b       The vector to project onto.
     * @param   {Boolean}   clamp   Flag to indicate that the projection should be clamped onto the second vector.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector2D.
     * @return  {Number}            Returns a new vector which is the result of projecting one of these vectors onto
     *                              the other.
     */
    static projectVector(a, b, clamp = false) {
        this.assertVectors(a, b)
        let bMagnitude = b.magnitude()
        // Hacky fix, not sure if it's right at this point.
        if (a.magnitude() === 0 || bMagnitude === 0) {
            return new Vector2D(0, 0)
        }
        let projection = new Vector2D(b).normalize()

        let scalar = (Vector2D.dotProduct(a, b) / bMagnitude)

        // This is useful for projecting onto a line segment
        if (clamp) {
            scalar = Math.max(0, Math.min(bMagnitude, scalar))
        }

        projection.scale(scalar)

        return projection
    }

    /**
     * Get the cosine of the angle (theta) between two vectors.
     * @method cosineTheta
     * @static
     * @param   {Vector2D}  a       A vector.
     * @param   {Vector2D}  b       A vector.
     * @throws  {TypeError}         Throws if either argument is not an instance of Vector2D.
     * @return  {Number}            Returns the cosine of the angle (theta) between two vectors.
     */
    static cosineTheta(a, b) {
        this.assertVectors(a, b)
        let numerator = Vector2D.dotProduct(a, b)

        let denominator = a.magnitude() * b.magnitude()
        return numerator / denominator
    }

    /**
     * Throws if any argument is not an instance of Vector2D.
     * @method assertVectors
     * @static
     * @param   {*}         vectors         A rest parameter to check all values of.
     * @throws  {TypeError}                 Throws if any argument is not an instance of Vector2D.
     * @return  {Boolean}                   Returns true if all arguments are instances of Vector2D.
     */
    static assertVectors(...vectors) {
        if (Array.isArray(vectors[0])) {
            vectors = vectors[0]
        }

        vectors.forEach((vector, index) => {
            if (!(vector instanceof Vector2D)) {
                throw new TypeError(`Argument ${index} is not an instance of Vector2D.`)
            }
        })

        return true
    }
}

Vector2D.zero = new Vector2D()

module.exports = Vector2D


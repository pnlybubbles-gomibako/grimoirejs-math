/// <reference path="../src/gl-matrix.d.ts" />
import MatrixBase from "./MatrixBase";
import Vector3 from "./Vector3";
import Vector4 from "./Vector4";
import Quaternion from "./Quaternion";
import { GLM } from "gl-matrix";
/**
 * Represents 4x4 matrix.
 */
declare class Matrix extends MatrixBase {
    /**
     * Instanciate zero matrix.
     */
    static zero(): Matrix;
    /**
     * Instanciate identity matrix.
     */
    static identity(): Matrix;
    /**
     * Instanciate matrix in row major.
     * @return {Matrix}     [description]
     */
    static fromElements(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Matrix;
    /**
     * Instanciate matrix by generator.
     * @param  {(w: number, h: number) => number} generator function returning number from index of column and row.
     * @return {[type]}   A matrix instance.
     */
    static fromFunc(f: (w: number, h: number) => number): Matrix;
    /**
     * Compare given matrices.
     * @param  {Matrix}  m1 matrix to compare
     * @param  {Matrix}  m2 matrix to compare
     * @return {boolean}    the result
     */
    static equals(m1: Matrix, m2: Matrix): boolean;
    /**
     * Add each component of matrix.
     * @param  {Matrix} m1 A matrix to add.
     * @param  {Matrix} m2 A matrix to add.
     * @return {Matrix}    The result of calculation.
     */
    static add(m1: Matrix, m2: Matrix): Matrix;
    /**
     * Subtract each component of matrix.
     * @param  {Matrix} m1 A matrix to subtract.
     * @param  {Matrix} m2 A matrix to subtract.
     * @return {Matrix}    The result of calculation.
     */
    static subtract(m1: Matrix, m2: Matrix): Matrix;
    /**
     * Multiply a given scalar value to each components of matrix..
     * @param  {number} s A scalar to multiply
     * @param  {Matrix} m A matrix to be multiplied
     * @return {Matrix}  The result of calculation
     */
    static scalarMultiply(s: number, m: Matrix): Matrix;
    /**
     * Multiply 2 matrices
     * @param  {Matrix} m1 A matrix to multiply
     * @param  {Matrix} m2 A matrix to multiply
     * @return {Matrix}    The result of calculation
     */
    static multiply(m1: Matrix, m2: Matrix): Matrix;
    /**
     * Generate Translate-Scale-Rotation matrix from given value.
     * @param  {Vector3}    t   A translation value
     * @param  {Quaternion} rot A rotation value
     * @param  {Vector3}    s   A scale value
     * @return {Matrix}         TRS matrix
     */
    static trs(t: Vector3, rot: Quaternion, s: Vector3): Matrix;
    /**
     * Negate all components of matrix.
     */
    static negate(m: Matrix): Matrix;
    /**
     * Calculate transposed matrix
     */
    static transpose(m: Matrix): Matrix;
    /**
     * Transform a vector representing coordinate by given matrix.
     * @param  {Matrix}  m A matrix representing a transform.
     * @param  {Vector3} t A vector representing coordinate.
     * @return {Vector3}   Transformed coordinate
     */
    static transformPoint(m: Matrix, t: Vector3): Vector3;
    /**
     * Transform a vector representing direction by given matrix.
     * @param  {Matrix}  m A matrix representing a transform.
     * @param  {Vector3} t A vector representing direction.
     * @return {Vector3}   Transformed direction
     */
    static transformNormal(m: Matrix, t: Vector3): Vector3;
    /**
     * Transform a Vector4 by given matrix.
     * @param  {Matrix}  m A matrix representing a transform.
     * @param  {Vector4} t A vector to transform
     * @return {Vector4}   Transformed vector
     */
    static transform(m: Matrix, t: Vector4): Vector4;
    /**
     * Retrieve determinant of passed matrix
     */
    static determinant(m: Matrix): number;
    /**
     * Compute inverted passed matrix.
     */
    static inverse(m: Matrix): Matrix;
    /**
     * Generate linear translation transform matrix.
     */
    static translate(v: Vector3): Matrix;
    /**
     * Generate linear scaling transform matrix.
     */
    static scale(v: Vector3): Matrix;
    /**
     * Instanciate a matrix representing X-axis rotation.
     * @param  {number} angle Angle of rotation in radians.
     * @return {Matrix}       Rotation matrix
     */
    static rotateX(angle: number): Matrix;
    /**
     * Instanciate a matrix representing Y-axis rotation.
     * @param  {number} angle Angle of rotation in radians.
     * @return {Matrix}       Rotation matrix
     */
    static rotateY(angle: number): Matrix;
    /**
     * Instanciate a matrix representing Z-axis rotation.
     * @param  {number} angle Angle of rotation in radians.
     * @return {Matrix}       Rotation matrix
     */
    static rotateZ(angle: number): Matrix;
    /**
     * Instanciate a matrix representing rotation converted from a given quaternion.
     * @param  {Quaternion} A quaternion to represent a rotation.
     * @return {Matrix}       Rotation matrix
     */
    static rotationQuaternion(quat_: Quaternion): Matrix;
    /**
     * Generate frustum matrix.
     * @param  {number} left   Left clip coordinate
     * @param  {number} right  Right clip coordinate
     * @param  {number} bottom Bottom clip coordinate
     * @param  {number} top    Top clip coordinate
     * @param  {number} near   Near clip coordinate
     * @param  {number} far    Far clip coordinate
     * @return {Matrix}        Frustum matrix
     */
    static frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix;
    /**
     * Generate orthogonal matrix.
     * @param  {number} left   Left clip coordinate
     * @param  {number} right  Right clip coordinate
     * @param  {number} bottom Bottom clip coordinate
     * @param  {number} top    Top clip coordinate
     * @param  {number} near   Near clip coordinate
     * @param  {number} far    Far clip coordinate
     * @return {Matrix}        Orthogonal matrix
     */
    static ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix;
    /**
     * Generate perspective matrix.
     * @param  {number} fovy   fovy angle of perspective in radians
     * @param  {number} aspect aspect ratio
     * @param  {number} near   Near clip disntance
     * @param  {number} far    Far clip disntance
     * @return {Matrix}        perspective matrix
     */
    static perspective(fovy: number, aspect: number, near: number, far: number): Matrix;
    /**
     * Generate view matrix
     * @param  {Vector3} eye    eye position
     * @param  {Vector3} lookAt the position to stare at
     * @param  {Vector3} up     up direction
     * @return {Matrix}         view matrix
     */
    static lookAt(eye: Vector3, lookAt: Vector3, up: Vector3): Matrix;
    /**
     * Constructor to generate an instance
     * @param  {GLM.IArray} arr Array of components
     */
    constructor(arr?: GLM.IArray);
    /**
     * Obtain a component of matrix at the spcecific index calculated from row index and column index
     * @param  {number} row    row index 0 to 3
     * @param  {number} colmun column index 0 to 3
     * @return {number}        the component
     */
    getAt(row: number, colmun: number): number;
    /**
     * Mutate a component of matrix at the specific index calculated from row index and column index
     * @param {number} row    row index 0 to 3
     * @param {number} colmun column index 0 to 3
     * @param {number} val    the value to set
     */
    setAt(row: number, colmun: number, val: number): void;
    /**
     * Obtain a component of matrix at the index
     * @param  {number} index index in column order
     * @return {number}       the value at the index
     */
    getBySingleIndex(index: number): number;
    /**
     * Get column Vector at the column
     * @param  {number}  col column index 0 to 3
     * @return {Vector4}     Column vector
     */
    getColmun(col: number): Vector4;
    /**
     * Get row vector at the row
     * @param  {number}  row row index 0 to 3
     * @return {Vector4}     Row vector
     */
    getRow(row: number): Vector4;
    /**
     * Multiply this matrix with the other instance.
     * @param  {Matrix} m the other matrix to multiply
     * @return {Matrix}   Calculated matrix
     */
    multiplyWith(m: Matrix): Matrix;
    /**
     * Compare this matrix with the other instance
     * @param  {Matrix}  m the other matrix to compare
     * @return {boolean}   The result of comparation
     */
    equalWith(m: Matrix): boolean;
    /**
     * Get translation vector from this matrix.
     * @return {Vector3} Translation represented in vector
     */
    getTranslation(): Vector3;
    /**
     * Get scaling vector from this matrix.
     * @return {Vector3} Scaling represented in vector
     */
    getScaling(): Vector3;
    /**
     * Get rotation quaternion from this matrix.
     * @return {Quaternion} Rotation represented in quaternion
     */
    getRotation(): Quaternion;
    /**
     * Get expression as string of this matrix
     */
    toString(): string;
    /**
     * Element count of this matrix. Must be 16.
     * @return {number} [description]
     */
    readonly ElementCount: number;
    /**
     * Row count of this matrix. Must be 4.
     */
    readonly RowCount: number;
    /**
     * Column count of this matrix. Must be 4.
     */
    readonly ColmunCount: number;
}
export default Matrix;

/// <reference path="../src/gl-matrix.d.ts" />
import Vector3 from "./Vector3";
import { GLM } from "gl-matrix";
/**
* The class to maniplate quaternion.
* Basically,you don't need to operate raw element.
* You consider to use some of useful methods without editing raw element forcelly.
* Each element will be represented as (w;x,y,z)
* (1,i,j,k) is base axis for quaternion. (i,j,k is pure imaginary number)
* (w;x,y,z) means w*1+x*i+y*j+z*k
*
*/
declare class Quaternion {
    rawElements: GLM.IArray;
    static equals(q1: Quaternion, q2: Quaternion): boolean;
    /**
     * Parse angle string in 3D.
     * "p" means Pi. Ex) 3/4 p
     * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
     * "eular(x,y,z)" means rotation in eular. This means Z-X-Y rotation like Unity.
     * "axis(angle,x,y,z)" means rotation around specified axis. This means angle radians will be rotated around the axis (x,y,z).
     * This angle can be specified with the character "p" or "d".
     * "x(angle)","y(angle)" or "z(angle)" means rotation around unit axis.
     * This angle can be specified with the character "p" or "d".
     * @param input the string to be parsed as angle in 3D.
     * @returns {Quaternion} parsed rotation in Quaternion.
     */
    static parse(input: string): Quaternion;
    /**
    * Calculate add result of two quaternion
    */
    static add(q1: Quaternion, q2: Quaternion): Quaternion;
    /**
    * Calculate multiply result of two quaternion
    */
    static multiply(q1: Quaternion, q2: Quaternion): Quaternion;
    /**
    * Calculate the rotation quaternion represented as pair of angle and axis.
    */
    static angleAxis(angle: number, axis: Vector3): Quaternion;
    static euler(x: number, y: number, z: number): Quaternion;
    static eulerXYZ(x: number, y: number, z: number): Quaternion;
    static slerp(q1: Quaternion, q2: Quaternion, t: number): Quaternion;
    /**
     * Returns the angle in degrees between two rotations q1 and q2.
     * @param q1 the quaternion represents begin angle.
     * @param q2 the quaternion represents end angle.
     * @returns {number} angle represented in radians.
     */
    static angle(q1: Quaternion, q2: Quaternion): number;
    /**
     * Returns a quaternion that transform provided 'from' vector into 'to' vector.
     * If 'from' cross 'to' is closer to 0 vector, axisHint is used as axis.
     * This may only used for the situation when from vector and to vector is in relations these are negating the other.
     * @param from
     * @param to
     * @param axisHint if no vector specified to this argument, [0,1,0] will be used for default
     */
    static fromToRotation(from: Vector3, to: Vector3, axisHint?: Vector3): Quaternion;
    static lookRotation(forward: Vector3, upVec?: Vector3): Quaternion;
    static readonly Identity: Quaternion;
    /**
    * Constructor by specifing each elements.
    */
    constructor(rawElements: GLM.IArray);
    eularAngles: Vector3;
    /**
    * Getter for X.
    */
    readonly X: number;
    /**
    * Getter for Y.
    */
    readonly Y: number;
    /**
    * Getter for Z.
    */
    readonly Z: number;
    /**
    * Getter for W.
    */
    readonly W: number;
    /**
    * Getter for imaginary part vector.
    * It returns the vector (x,y,z)
    */
    readonly ImaginaryPart: Vector3;
    /**
    * Get the conjugate of this quaternion
    */
    readonly Conjugate: Quaternion;
    /**
    * Get the length
    */
    readonly Length: number;
    equalWith(q: Quaternion): boolean;
    /**
    * Get normalized quaternion
    */
    normalize(): Quaternion;
    inverse(): Quaternion;
    toAngleAxisString(): string;
    toString(): string;
    factoringQuaternionZXY(): {
        x: number;
        y: number;
        z: number;
    };
    factoringQuaternionXYZ(): {
        x: number;
        y: number;
        z: number;
    };
}
export default Quaternion;

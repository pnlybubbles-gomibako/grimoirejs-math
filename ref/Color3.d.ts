/// <reference path="../src/gl-matrix.d.ts" />
import VectorBase from "./VectorBase";
import Vector3 from "./Vector3";
import Color4 from "./Color4";
import Vector4 from "./Vector4";
/**
 * Represents 3-component color without alpha.
 */
declare class Color3 extends VectorBase {
    /**
     * Convert Color4 to Color3.
     * Alpha component of given value is ignored.
     */
    static fromColor4(col: Color4): Color3;
    /**
     * Convert string to Color3 instance.
     * @param  {string}  color    A string value expressing color3.
     * @param  {boolean} tryParse Internal use. Please use undefined always.
     * @return {Color3}           Converted Color3 value
     */
    static parse(color: string, tryParse?: boolean): Color3;
    /**
     * Internal use. Do not call directry.
     *
     * @param  {string}  color    [description]
     * @param  {boolean} isFirst  [description]
     * @param  {boolean} tryParse [description]
     * @return {Color3}           [description]
     */
    static internalParse(color: string, isFirst: boolean, tryParse?: boolean): Color3;
    /**
     * Returns whether the given 2 values are equal or not.
     * @param  {Color3}  col1 1st value to compare
     * @param  {Color3}  col2 2nd value to compare
     * @return {boolean}      The result
     */
    static equals(col1: Color3, col2: Color3): boolean;
    /**
     * constructor for Color3.
     * @param  {number} r Red value clamped in [0,1]
     * @param  {number} g Green value clamped in [0,1]
     * @param  {number} b Blue value clamped in [0,1]
     */
    constructor(r: number, g: number, b: number);
    /**
     * Convert as Vector3 instance.
     * @return {Vector3} Converted vector3
     */
    toVector(): Vector3;
    /**
     * Convert as Vector4 with given alpha value.
     * @param  {number}  An alpha value.
     * @return {Vector4}   Converted vector4
     */
    toVector4(a?: number): Vector4;
    /**
     * Red component clamped in [0,1]
     */
    readonly R: number;
    /**
     * Green component clamped in [0,1]
     */
    readonly G: number;
    /**
     * Blue component clamped in [0,1]
     */
    readonly B: number;
    /**
     * Count of element. Always 3.
     */
    readonly ElementCount: number;
    /**
     * Compare equality of this instance to the other instance.
     * @param  {Color3}  col the other instance to compare
     * @return {boolean}     The result
     */
    equalWith(col: Color3): boolean;
    /**
     * Expression as string.
     */
    toString(): string;
    /**
     * Expression as string. This will be more human readable format than toString().
     * May be useful for debugging.
     */
    toDisplayString(): string;
}
export default Color3;

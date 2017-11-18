/// <reference path="../src/gl-matrix.d.ts" />
import { GLM } from "gl-matrix";
import IVectorParseDescription from "./IVectorParseDescription";
/**
 * Base class of vector.
 */
declare class VectorBase {
    /**
     * Actual array represents components of this instance.
     */
    rawElements: GLM.IArray;
    private _magnitudeSquaredCache;
    private _magnitudeCache;
    /**
     * Length of this vector.
     */
    readonly magnitude: number;
    /**
     * Element count of this instance.
     * This is for override.
     * @return {number} [description]
     */
    readonly ElementCount: number;
    /**
     * Get squred length of this elements.
     */
    readonly sqrMagnitude: number;
    protected static __elementEquals(v1: VectorBase, v2: VectorBase): boolean;
    protected static __nearlyElementEquals(v1: VectorBase, v2: VectorBase): boolean;
    protected static __fromGenerationFunction<T extends VectorBase>(v1: T, v2: T, gen: (i: number, v1: T, v2: T) => number): GLM.IArray;
    protected static __parse(str: string): IVectorParseDescription;
    private static _parseRawVector(str);
}
export default VectorBase;

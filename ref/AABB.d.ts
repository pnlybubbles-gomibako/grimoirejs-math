/// <reference path="../src/gl-matrix.d.ts" />
import Vector3 from "./Vector3";
/**
 * Axis-Aligned Bounding Box implementation
 */
declare class AABB {
    constructor(initialPoints?: Vector3[]);
    /**
     * AABB's vertex in most left,most bottom,most far.
     * @type {Vector3}
     */
    pointLBF: Vector3;
    /**
    * AABB's vertex in most right,most top,most near.
    * @type {Vector3}
    */
    pointRTN: Vector3;
    /**
     * Center of this AABB
     * @type {Vector3}
     */
    private _center;
    /**
     * Width of this AABB
     */
    readonly Width: number;
    /**
     * Height of this AABB
     */
    readonly Height: number;
    /**
     * Distance of this AABB
     */
    readonly Distance: number;
    readonly Center: Vector3;
    /**
     * Calculate new bounding box with considering the new point is included.
     * @param  {Vector3} newPoint the point that will be considered that it should be in this bounding box.
     */
    expand(newPoint: Vector3): this;
    /**
     * Clean up this AABB with initial value.
     */
    clear(): void;
}
export default AABB;

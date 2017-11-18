import Vector2 from "./Vector2";
declare class Rectangle {
    private _left;
    private _bottom;
    private _width;
    private _height;
    static equals(r1: Rectangle, r2: Rectangle): boolean;
    static edgeSizeEquals(r1: Rectangle, r2: Rectangle): boolean;
    constructor(left: number, bottom: number, width: number, height: number);
    readonly Left: number;
    readonly Right: number;
    readonly Top: number;
    readonly Bottom: number;
    readonly Width: number;
    readonly Height: number;
    contains(point: Vector2): boolean;
    contains(x: number, y: number): boolean;
    /**
     * Convert absolute coodinate to local coordinate
     * @param  {Vector2} x [description]
     * @return {Vector2}   [description]
     */
    toLocal(x: Vector2): Vector2;
    toLocal(x: number, y: number): number[];
    /**
     * Convert relative ratio of position in the rectangle from absolute coordinate
     * @param  {Vector2} x [description]
     * @return {Vector2}   [description]
     */
    toLocalNormalized(x: Vector2): Vector2;
    toLocalNormalized(x: number, y: number): number[];
    /**
     * Convert local coordinate to absolute coordinate
     * @param  {Vector2} x [description]
     * @return {Vector2}   [description]
     */
    toAbsolute(x: Vector2): Vector2;
    toAbsolute(x: number, y: number): number[];
    toString(): string;
}
export default Rectangle;

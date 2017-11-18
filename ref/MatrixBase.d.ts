/// <reference path="../src/gl-matrix.d.ts" />
import { GLM } from "gl-matrix";
declare class MatrixBase {
    rawElements: GLM.IArray;
    protected static __elementEquals(m1: MatrixBase, m2: MatrixBase): boolean;
    readonly RowCount: number;
    readonly ColmunCount: number;
    getAt(row: number, colmun: number): number;
    getBySingleIndex(index: number): number;
}
export default MatrixBase;

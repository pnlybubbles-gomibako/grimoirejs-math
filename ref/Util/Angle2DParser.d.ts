/**
 * Utility class to parse the arguments of attributes.
 */
export default class Angle2DParser {
    /**
     * Parse angle strings.
     * "p" means Pi. Ex) 3/4 p
     * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
     * @param input the string to parse.
     * @returns {number} parsed angle in radians.
     */
    static parseAngle(input: string): number;
}

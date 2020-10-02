/* Write a Function named totalArea that takes an Array of rectangles as an
 * argument. The Function should return the total area covered by all the
 * rectangles.
 */

function totalArea(array) {
  let areas = array.map(sides => sides[0] * sides[1]);
  return areas.reduce((accumulator, area) => accumulator + area, 0); 
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141

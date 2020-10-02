/* Now, write a second Function named totalSquareArea. This Function should
 * calculate the total area of a set of rectangles, just like totalArea.
 * However, it should only include squares in its calculations: it should
 * ignore rectangles that aren't square.
 */

function totalSquareArea(array) {
  let squares = array.filter(sides => sides[0] === sides[1]);
  let areas = squares.map(sides => sides[0] * sides[1]);
  return areas.reduce((accumulator, area) => accumulator + area, 0); 
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles);    // 121

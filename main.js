import { knight } from "./chess/pieces/pieces.js";
import { pathFinder } from "./chess/path-finder.js";
import { Vector2 } from "./utils/vector2.js";

const size = 8;
const from = new Vector2(0, 0);
const target = new Vector2(3,3);


function knightMoves(start, to){
    const from = new Vector2(start[0], start[1]);
    const target = new Vector2(to[0],to[1]);

    let path = pathFinder.findPath(size, knight, from, target);


    return path.map(vector => vector.toArray());
}

console.log("Move 1", knightMoves([0,0],[3,3]));
console.log("Move 2", knightMoves([3,3],[0,0]));
console.log("Move 3", knightMoves([0,0],[7,7]));
console.log("Move 4", knightMoves([3,3],[4,3]));
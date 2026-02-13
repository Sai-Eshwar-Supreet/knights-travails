import { Vector2 } from "../../utils/vector2.js";

function createPiece(type, getPossiblePositions){
    if(typeof getPossiblePositions !== 'function'){
        throw TypeError("Expected getPossiblePositions to be a function");
    }

    return { type, getPossiblePositions }
}

const knight = createPiece("Knight", (point) => {
    let arr = [
        new Vector2(point.x + 2, point.y + 1),
        new Vector2(point.x - 2, point.y + 1),
        new Vector2(point.x - 2, point.y - 1),
        new Vector2(point.x + 2, point.y - 1),
        new Vector2(point.x + 1, point.y + 2),
        new Vector2(point.x - 1, point.y + 2),
        new Vector2(point.x - 1, point.y - 2),
        new Vector2(point.x + 1, point.y - 2),
    ];

    return arr;
});


export { knight }
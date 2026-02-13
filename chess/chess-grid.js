import { Vector2 } from "../utils/vector2.js";
import { Node } from "./node.js";

class ChessGrid{
    #size;
    #grid;
    
    
    constructor(size = 8){
        this.#size = size;
        this.initialize();
    }
    
    get size(){
        return this.#size;
    }
    
    initialize(){
        this.#grid = [];
        const size = this.#size;
        for(let x = 0; x < size; x ++){
            const col = [];
            for(let y = 0; y < size; y++){
                const node = new Node(new Vector2(x, y));
                col.push(node);
            }
            this.#grid.push(col);
        }
    }

    getNodeAt(pos){
        return this.#grid[pos.x][pos.y];
    }

    getValidMoveNodes(piece, from){
        const neighbors = [];
        const possiblePositions = piece.getPossiblePositions(from).filter(point => 
            (point.x >= 0) && (point.x < this.#size) && (point.y >= 0) && (point.y < this.#size));

        for(let pos of possiblePositions){
            neighbors.push(this.#grid[pos.x][pos.y]);
        }

        return neighbors;
    }
}

export { ChessGrid }
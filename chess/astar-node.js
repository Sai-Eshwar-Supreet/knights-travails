import { Node } from "./node.js";

class AStarNode extends Node{
    hCost;
    gCost;

    get fCost(){
        return this.hCost + this.gCost;
    }

    constructor(position){
        super(position);
        this.hCost = 0;
        this.gCost = 0;
    }
}

export { AStarNode }
class Node{
    fromNode;
    isVisited;
    position;
    hCost;
    gCost;

    get fCost(){
        return this.hCost + this.gCost;
    }

    constructor(position){
        this.position = position;
        this.fromNode = null;
        this.isVisited = false;
        this.hCost = 0;
        this.gCost = 0;
    }
}

export { Node }
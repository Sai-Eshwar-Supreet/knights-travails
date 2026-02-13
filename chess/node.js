class Node{
    fromNode;
    isVisited;
    position;

    constructor(position){
        this.position = position;
        this.fromNode = null;
        this.isVisited = false;
    }
}

export { Node }
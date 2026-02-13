class Vector2{
    x;
    y;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `{ x: ${this.x}, y: ${this.y} }`;
    }

    toArray(){
        return [this.x, this.y];
    }

    toEqual(vector){
        return (this.x === vector.x) && (this.y === vector.y);
    }

    static getManhattanDistance(pointA, pointB){
        return Math.abs(pointA.x - pointB.x) + Math.abs(pointA.y - pointB.y);
    }

    static getDistance(pointA, pointB){
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;

        const distance = Math.sqrt(dx*dx + dy*dy);
        return distance;
    }
}

export { Vector2 }
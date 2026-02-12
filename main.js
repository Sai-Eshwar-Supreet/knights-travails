function getPossiblePositions(x, y){
    let arr = [
        { x: x + 1, y: y + 2},
        { x: x + 2, y: y + 1},
        { x: x - 1, y: y + 2},
        { x: x - 2, y: y + 1},
        { x: x - 1, y: y - 2},
        { x: x - 2, y: y - 1},
        { x: x + 1, y: y - 2},
        { x: x + 2, y: y - 1}
    ]

    return arr.filter(item => {
        let x = item.x;
        let y = item.y;

        return (x < 8) && ( x >= 0) && (y < 8) && (y >= 0);
    });
}

console.log(getPossiblePositions(0, 0));
function isInsideBoard([x, y]) {
    return x >= 0 && x < 8 && y >=0 && y < 8;
}

const moves = [
    [1, 2], [2, 1], [-1, 2], [-2, 1],
    [1, -2], [2, -1], [-1, -2], [-2, -1]
];

function knightMoves([x, y]) {
    return moves
        .map(([dx, dy]) => [x + dx, y + dy])
        .filter(isInsideBoard);
}

console.log(knightMoves([4, 4]))
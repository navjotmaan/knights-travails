function isInsideBoard([x, y]) {
    return x >= 0 && x < 8 && y >=0 && y < 8;
}

const moves = [
    [1, 2], [2, 1], [-1, 2], [-2, 1],
    [1, -2], [2, -1], [-1, -2], [-2, -1]
];

function getKnightMoves([x, y]) {
    return moves
        .map(([dx, dy]) => [x + dx, y + dy])
        .filter(isInsideBoard);
}

function knightMoves(start, target) {
    const queue = [start];
    const visited = new Set();
    visited.add(start.toString());

    const parent = {};

    while(queue.length > 0) {
        const current = queue.shift();

        if (current[0] === target[0] && current[1] === target[1]) {
            break;
        }

        for (const next of getKnightMoves(current)) {
            const key = next.toString();
            if(!visited.has(key)) {
                visited.add(key);
                parent[key] = current;
                queue.push(next);
            }
        }
    }

    const path = [];
    let current = target;

    while (current) {
        path.push(current);
        const key = current.toString();
        current = parent[key];
    }

    path.reverse();
    return `You made it in ${path.length - 1} moves! Here's your path:\n` +
            path.map(pos => `[${pos[0]}, ${pos[1]}]`).join(" -> ");
}

console.log(knightMoves([3, 3], [4, 3]));
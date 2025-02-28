# Alice in Tiny Maze


![Tiny Maze](https://images.weserv.nl/?url=https://ih1.redbubble.net/image.2038436096.2542/flat,750x,075,f-pad,750x1000,f8f8f8.jpg&w=300)

Alice found herself very tiny and wandering around Wonderland.  
Even the grass around her seemed like a maze.

## The Maze

```typescript
const maze3x3 = [
  ['B', 'O', 'I'],
  ['I', 'O', 'I'],
  ['I', 'O', 'E'],
];
```

A maze is represented by a matrix of characters.
- `B` (Begin) is the entry point of the maze, on the top-left corner of the matrix (always here).
- `E` (End) is the exit point of the maze, on the bottom-right corner of the matrix (always here).
- `O` (Open) is an open path.
- `I` (Represents an obstacle) is an unpassable wall.
  
There is ALWAYS at least a valid path from `B` to `E`, composed of orthogonally adjacent `O` (open) cells.

## Your Goal

Your goal is to find the a path from `B` to `E`.
- You CANNOT move through `I` (walls).
- You CANNOT move diagonally.
- You CANNOT move through the same `O` (open) cell twice.


You have to fill the shortest path from `B` to `E` with `X`, without altering the original maze.  

If there is more than one valid path, the shortest path is preferred, but not mandatory.  
You output a tuple of the original maze, the filled maze, and the size of the path.  


```typescript
const maze2x2 = [
  ['B', 'O'],
  ['I', 'E'],
];
const solution2x2 = [
  ['X', 'X'],
  ['I', 'X'],
];
const pathSize2x2 = 3;
const validResult2x2 = [maze2x2, solution2x2, pathSize2x2];

// -------------------------

const maze3x3 = [
  ['B', 'O', 'I'],
  ['I', 'O', 'I'],
  ['I', 'O', 'E'],
];
const solution3x3 = [
  ['X', 'X', 'I'],
  ['I', 'X', 'I'],
  ['I', 'X', 'X'],
];
const pathSize3x3 = 5;
const validResult3x3 = [maze3x3, solution3x3, pathSize3x3];

// -------------------------

const maze4x4 = [
  ['B', 'O', 'O', 'I'],
  ['I', 'O', 'O', 'I'],
  ['I', 'I', 'O', 'O'],
  ['I', 'O', 'O', 'E'],
];
const solution4x4 = [
  ['X', 'X', 'O', 'I'],
  ['I', 'X', 'X', 'I'],
  ['I', 'I', 'X', 'X'],
  ['I', 'O', 'O', 'X'],
];
const pathSize4x4 = 7;
const validResult4x4 = [maze4x4, solution4x4, pathSize4x4];
// -------------------------


const maze10x10 = [
  ['B', 'O', 'O', 'O', 'I', 'I', 'I', 'I', 'I', 'I'],
  ['I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'I'],
  ['I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'O', 'I'],
  ['I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'I'],
  ['I', 'O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I'],
  ['I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'I'],
  ['I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'O', 'I'],
  ['I', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'I'],
  ['I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'O', 'I'],
  ['I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'E'],
];
const solution10x10 = [
  ['X', 'X', 'O', 'O', 'I', 'I', 'I', 'I', 'I', 'I'],
  ['I', 'X', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'I'],
  ['I', 'X', 'I', 'O', 'I', 'O', 'I', 'I', 'O', 'I'],
  ['I', 'X', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'I'],
  ['I', 'X', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I'],
  ['I', 'X', 'X', 'X', 'X', 'X', 'I', 'O', 'O', 'I'],
  ['I', 'I', 'I', 'I', 'I', 'X', 'I', 'I', 'O', 'I'],
  ['I', 'O', 'O', 'O', 'I', 'X', 'X', 'X', 'X', 'I'],
  ['I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'X', 'I'],
  ['I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
];
const pathSize10x10 = 19;
const validResult10x10 = [maze10x10, solution10x10, pathSize10x10];
```

## Additional challenges

- Find the shortest path

## Credits

This puzzle is a variation of [Wonderland Clojure Tiny Maze](https://github.com/gigasquid/wonderland-clojure-katas/tree/master/tiny-maze)

## License

This project is licensed under the Creative Commons Zero v1.0 Universal license. This means you can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See the [LICENSE](LICENSE) file for more details.


# Alice in Tiny Maze - A TypeScript Code Kata


![Tiny Maze](https://images.weserv.nl/?url=https://ih1.redbubble.net/image.2038436096.2542/flat,750x,075,f-pad,750x1000,f8f8f8.jpg&w=300)

Alice found herself very tiny and wandering around Wonderland.  
Even the grass around her seemed like a maze.  


Help her find her way out of the maze!

## Prerequisites

- node.js 22.x, https://nodejs.org/en
- pnpm 10.x, `npm i -g pnpm`

## Installation & Usage
Then
```bash
pnpm install
pnpm start
```

## The Maze

```typescript
const maze3x3 = [
  ['⛩️', '⭕', '🌳'],
  ['🌳', '⭕', '🌳'],
  ['🌳', '⭕', '⛩️'],
];
```

A maze is represented by a matrix of emojis.
- `⛩️` is the entry point of the maze, on the top-left corner of the matrix (always here).
- `⛩️` is the exit point of the maze, on the bottom-right corner of the matrix (always here).
- `⭕` is an open path.
- `🌳` is an unpassable tree, just like a wall.
  
There is **always at least a valid path** from Nord-West `⛩️` to South-East `⛩️`, composed of orthogonally adjacent `⭕` cells.

## Your Goal

Your goal is to find the a path from Nord-West `⛩️` to South-East `⛩️`.
- You CANNOT move through `🌳`.
- You CANNOT move diagonally.
- You CANNOT go back on the same `⭕` cell already visited.


You have to fill the shortest path from `⛩️` to `⛩️` with `👣`, including those starting and ending points.  


If there is more than one valid path, the shortest path is preferred, but **not mandatory**.  


### Examples

```typescript
const maze2x2 = [
  ['⛩️', '⭕'],
  ['🌳', '⛩️'],
];
const solution2x2 = [
  ['👣', '👣'],
  ['🌳', '👣'],
];

// -------------------------

const maze3x3 = [
  ['⛩️', '⭕', '🌳'],
  ['🌳', '⭕', '🌳'],
  ['🌳', '⭕', '⛩️'],
];
const solution3x3 = [
  ['👣', '👣', '🌳'],
  ['🌳', '👣', '🌳'],
  ['🌳', '👣', '👣'],
];
];

// -------------------------

const maze4x4 = [
  ['⛩️', '⭕', '⭕', '🌳'],
  ['🌳', '⭕', '⭕', '🌳'],
  ['🌳', '🌳', '⭕', '⭕'],
  ['🌳', '⭕', '⭕', '⛩️'],
];
const solution4x4 = [
  ['👣', '👣', '👣', '🌳'],
  ['🌳', '⭕', '👣', '🌳'],
  ['🌳', '🌳', '👣', '👣'],
  ['🌳', '⭕', '⭕', '👣'],
];
const solution4x4Bis = [
  ['👣', '👣', '⭕', '🌳'],
  ['🌳', '👣', '👣', '🌳'],
  ['🌳', '🌳', '👣', '⭕'],
  ['🌳', '⭕', '👣', '👣'],
];

// -------------------------

const maze10x10 = [
  ['⛩️', '⭕', '⭕', '⭕', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳'],
  ['🌳', '⭕', '🌳', '⭕', '🌳', '⭕', '⭕', '⭕', '⭕', '🌳'],
  ['🌳', '⭕', '🌳', '⭕', '🌳', '⭕', '🌳', '🌳', '⭕', '🌳'],
  ['🌳', '⭕', '🌳', '⭕', '⭕', '⭕', '🌳', '⭕', '⭕', '🌳'],
  ['🌳', '⭕', '🌳', '🌳', '🌳', '🌳', '🌳', '⭕', '🌳', '🌳'],
  ['🌳', '⭕', '⭕', '⭕', '⭕', '⭕', '🌳', '⭕', '⭕', '🌳'],
  ['🌳', '🌳', '🌳', '🌳', '🌳', '⭕', '🌳', '🌳', '⭕', '🌳'],
  ['🌳', '⭕', '⭕', '⭕', '🌳', '⭕', '⭕', '⭕', '⭕', '🌳'],
  ['🌳', '⭕', '🌳', '⭕', '🌳', '🌳', '🌳', '🌳', '⭕', '🌳'],
  ['🌳', '⭕', '🌳', '⭕', '⭕', '⭕', '⭕', '⭕', '⭕', '⛩️'],
];
const solution10x10 = [
  ['👣', '👣', '⭕', '⭕', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳'],
  ['🌳', '👣', '🌳', '⭕', '🌳', '⭕', '⭕', '⭕', '⭕', '🌳'],
  ['🌳', '👣', '🌳', '⭕', '🌳', '⭕', '🌳', '🌳', '⭕', '🌳'],
  ['🌳', '👣', '🌳', '⭕', '⭕', '⭕', '🌳', '⭕', '⭕', '🌳'],
  ['🌳', '👣', '🌳', '🌳', '🌳', '🌳', '🌳', '⭕', '🌳', '🌳'],
  ['🌳', '👣', '👣', '👣', '👣', '👣', '🌳', '⭕', '⭕', '🌳'],
  ['🌳', '🌳', '🌳', '🌳', '🌳', '👣', '🌳', '🌳', '⭕', '🌳'],
  ['🌳', '⭕', '⭕', '⭕', '🌳', '👣', '👣', '👣', '👣', '🌳'],
  ['🌳', '⭕', '🌳', '⭕', '🌳', '🌳', '🌳', '🌳', '👣', '🌳'],
  ['🌳', '⭕', '🌳', '⭕', '⭕', '⭕', '⭕', '⭕', '👣', '👣'],
];
```

## Additional challenges

- Find the shortest path

## Credits

This puzzle is a variation of [Wonderland Clojure Tiny Maze](https://github.com/gigasquid/wonderland-clojure-katas/tree/master/tiny-maze)

## License

This project is licensed under the Creative Commons Zero v1.0 Universal license. This means you can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See the [LICENSE](LICENSE) file for more details.


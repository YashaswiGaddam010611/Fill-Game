export const EMPTY = 0;
export const FILLED = 1;
export const OBSTACLE = 2;

export const games = [
  //level - 1
  {
    grid: [[FILLED, EMPTY, EMPTY]],
    history: [{ row: 0, col: 0 }],
  },

  //level - 2
  {
    grid: [
      [EMPTY, EMPTY, OBSTACLE],
      [FILLED, EMPTY, EMPTY],
    ],
    history: [{row: 1, col: 0}]
  },

  //level - 3
  {
    grid: [
        [OBSTACLE, EMPTY, FILLED],
        [OBSTACLE, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ],
    history: [{row: 0, col: 2}]
  },

  //level - 4
  {
    grid: [
        [EMPTY, EMPTY, EMPTY, OBSTACLE],
        [FILLED, EMPTY, EMPTY, OBSTACLE],
        [OBSTACLE, EMPTY, EMPTY, EMPTY]
    ],
    history: [{row: 1, col: 0}]
  },

  //level - 5
  {
    grid: [
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, OBSTACLE, OBSTACLE, FILLED]
    ],
    history: [{row: 2, col: 3}]
  },

  //level - 6
  {
    grid: [
        [EMPTY, FILLED, OBSTACLE, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY]
    ],
    history: [{row: 0, col: 1}]
  },

  //level - 7
  {
    grid: [
        [OBSTACLE, EMPTY, OBSTACLE, OBSTACLE],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, FILLED, EMPTY],
        [OBSTACLE, EMPTY, EMPTY, EMPTY]
    ],
    history: [{row: 2, col: 2}]
  },

  //level - 8
  {
    grid: [
        [EMPTY, EMPTY, EMPTY, OBSTACLE],
        [OBSTACLE, EMPTY, EMPTY, OBSTACLE],
        [FILLED, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY]
    ],
    history: [{row: 2, col: 0}]
  },

  //level - 9
  {
    grid: [
        [EMPTY, EMPTY, EMPTY, FILLED],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [OBSTACLE, OBSTACLE, EMPTY, OBSTACLE]
    ],
    history: [{row: 0, col: 3}]
  },

  //level - 10
  {
    grid: [
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, OBSTACLE],
        [EMPTY, OBSTACLE, FILLED, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY]
    ],
    history: [{row: 2, col: 2}]
  },

  //level - 11
  {
    grid: [
        [FILLED, EMPTY, EMPTY, OBSTACLE],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [OBSTACLE, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY]
    ],
    history: [{row: 0, col: 0}]
  },

  //level - 12
  {
    grid: [
        [EMPTY, OBSTACLE, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, FILLED, EMPTY, EMPTY]
    ],
    history: [{row: 3, col: 1}]
  },

  //level - 13
  {
    grid: [
        [FILLED, EMPTY, EMPTY, EMPTY],
        [OBSTACLE, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, OBSTACLE],
        [EMPTY, OBSTACLE, OBSTACLE, OBSTACLE]
    ],
    history: [{row: 0, col: 0}]
  },

  //level - 14
  {
    grid: [
        [OBSTACLE, OBSTACLE, EMPTY, EMPTY],
        [EMPTY, EMPTY, FILLED, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY],
        [OBSTACLE, EMPTY, OBSTACLE, OBSTACLE]
    ],
    history: [{row: 1, col: 2}]
  }
];

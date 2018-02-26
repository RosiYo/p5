//I made this code taking this video as reference https://www.youtube.com/watch?v=HyK_Q5rrcr4&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=10
  //Thanks to the Coding Train and Daniel Shiffman

let rows
let cols
let w = 20
let grid = []
let current
let stack = []

function setup() {
  createCanvas(600, 600)
  cols = floor(height / w) //sets a number of columns
  rows = floor(width / w) //sets a number of rows

  for (let y = 0; y < rows; y++) { //for every row
    for (let x = 0; x < cols; x++) { //for every column
      let cell = new Cell(x, y) //makes a cell object in each cell of the grid
      grid.push(cell) //pus the cell object into the grid array
    }
  }
  frameRate(100)
  current = grid[0] //start point
}

function draw() {
  background(0)

  current.visited = true; //change the visited statement
  let next = current.checkNeighbors() //check the neighbors through the checkNeighbors function
  if (next) {
    next.visited = true
    stack.push(current) //push into the stack
    rvWalls(current, next) //runs the remove walls function
    current = next //makes the cell aproached the current cell
  } else if (stack.length > 0) {
    current = stack.pop() //pop the last object of the stack
  }

  for (let i = 0; i < grid.length; i++) {
    grid[i].show()
  }
  path_finder()
}

function rvWalls(a, b) { //removes the walls
  let cellsX = a.x - b.x //check the distance along the cells in the x axis
  if (cellsX === 1) {
    a.walls[3] = false
    b.walls[1] = false
  } else if (cellsX === -1) {
    a.walls[1] = false
    b.walls[3] = false
  }
  let cellsY = a.y - b.y //check the distance along the cells in the y axis
  if (cellsY === 1) {
    a.walls[0] = false
    b.walls[2] = false
  } else if (cellsY === -1) {
    a.walls[2] = false
    b.walls[0] = false
  }
}

function path_finder() {
  noStroke()
  fill(60, 40, 250, 200)
  rect(current.x * w, current.y * w, w, w)
}
  //made by Rosi

function Cell(x, y) { //cell object
  this.x = x
  this.y = y
  this.walls = [true, true, true, true] //setup of the statement of the walls
  this.visited = false; //setup of visited

  this.index = function(x, y) { //used in a 1 dimensional array
    if (x < 0 || y < 0 || x > cols - 1 || y > rows - 1) {
      return -1
    }
    return x + y * cols //specific formula of 1 dimensional arrays
  }

  this.checkNeighbors = function() { //checks the adjacents cells
    let neighbors = []

    let top = grid[this.index(x, y - 1)] //top neighbor
    let right = grid[this.index(x + 1, y)] //right neighbor
    let bottom = grid[this.index(x, y + 1)] //bottom neighbor
    let left = grid[this.index(x - 1, y)] //left neighbor

    let sides_array = [top, right, bottom, left]

    for (let i = 0; i < sides_array.length; i++) {
      if (sides_array[i] && !sides_array[i].visited) {
        neighbors.push(sides_array[i])
      }
    }

    if (neighbors.length > 0) {
      var pick = floor(random(0, neighbors.length)) //chose randomly one neighbord
      return neighbors[pick]
    } else {
      return undefined
    }
  }

  this.show = function() { //makes the walls and set the trail of visited
    let posX = this.x * w
    let posY = this.y * w

    stroke(200)
    strokeWeight(5)

    if (this.walls[0]) { //walls
      line(posX, posY, posX + w, posY)
    }

    if (this.walls[1]) {
      line(posX + w, posY, posX + w, posY + w)
    }

    if (this.walls[2]) {
      line(posX + w, posY + w, posX, posY + w)
    }

    if (this.walls[3]) {
      line(posX, posY + w, posX, posY)
    }

    if (this.visited) { //trail
      noStroke()
      fill(255, 0, 100, 150)
      rect(posX, posY, w, w)
    }
  }
}

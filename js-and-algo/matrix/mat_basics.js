class Matrix {
  constructor(dimensions) {
    this.Matrix = this.generateMatrix(dimensions);
  }

  generateMatrix(dimension) {
    let mat = [];
    let count = 1;
    for (let r = 0; r < dimension; r++) {
      const row = [];
      for (let c = 0; c < dimension; c++) {
        row.push(count++);
        mat[r] = row;
      }
    }
    return mat;
  }

  print_mat(mat) {
    for (let i = 0; i < mat.length; i++) {
      let print = "";
      for (let j = 0; j < mat[0].length; j++) {
        print = print + "\t" + mat[i][j];
      }
      console.log(print);
    }
  }
  get(rowNum, colNum) {
    return this.Matrix[rowNum][colNum];
  }
  print_row(rowNum) {
    let print = "";
    for (let c = 0; c < this.Matrix.length; c++)
      print = print + "\t" + this.Matrix[rowNum][c];
    console.log(print);
  }
  alter(rowNum, colNum, value) {
    this.Matrix[rowNum][colNum] = value;
  }
}

const mat4 = new Matrix(4);
console.log(mat4);
mat4.print_mat(mat4.Matrix);
console.log(mat4.get(1, 1));
mat4.alter(1, 1, "new");
mat4.print_row(1);

const printTree = require("./printTree");

class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  findNode(root, key) {
    if (!root) return false;

    if (root.value === key) {
      return true;
    } else if (key < root.value) {
      return this.findNode(root.leftChild, key);
    } else {
      return this.findNode(root.rightChild, key);
    }
  }
  findCommonParent(value1, value2) {
    let node = this;
    while (node) {
      if (value1 < node.value && value2 < node.value) {
        node = node.leftChild;
      } else if (value1 > node.value && value2 > node.value) {
        node = node.rightChild;
      } else {
        // כאן מצאנו את האב המשותף
        return node.value;
      }
    }
    return null;
  }
  removeNode(value, parent = null) {
    // אם הערך קטן מהערך הנוכחי, נמשיך בצד שמאל
    if (value < this.value && this.leftChild) {
      return this.leftChild.removeNode(value, this);
    }
    // אם הערך גדול מהערך הנוכחי, נמשיך בצד ימין
    else if (value > this.value && this.rightChild) {
      return this.rightChild.removeNode(value, this);
    }
    // מצאנו את הצומת שמכיל את הערך שצריך למחוק
    else if (value === this.value) {
      // מקרה עם שני ילדים – מחפשים את המינימום בתת-העץ הימני
      if (this.leftChild && this.rightChild) {
        let minLargerNode = this.rightChild;
        while (minLargerNode.leftChild) {
          minLargerNode = minLargerNode.leftChild;
        }
        // מחליפים את הערך בצומת הנוכחי בערך שנמצא
        this.value = minLargerNode.value;
        // מוחקים את הצומת שממנו לקחנו את הערך
        return this.rightChild.removeNode(minLargerNode.value, this);
      }

      // מקרה מיוחד – השורש (אין הורה)
      else if (parent === null) {
        // יש ילד שמאלי בלבד
        if (this.leftChild) {
          this.value = this.leftChild.value;
          this.rightChild = this.leftChild.rightChild;
          this.leftChild = this.leftChild.leftChild;
        }
        // יש ילד ימני בלבד
        else if (this.rightChild) {
          this.value = this.rightChild.value;
          this.leftChild = this.rightChild.leftChild;
          this.rightChild = this.rightChild.rightChild;
        }
        // אין ילדים בכלל – איפוס הערך
        else {
          this.value = null;
        }
        return true;
      }

      // אם הצומת הוא ילד שמאלי – מחברים את הילד שלו ישירות להורה
      else if (parent.leftChild === this) {
        parent.leftChild = this.leftChild ? this.leftChild : this.rightChild;
        return true;
      }

      // אם הצומת הוא ילד ימני – גם כאן מחברים את הילד שלו להורה
      else if (parent.rightChild === this) {
        parent.rightChild = this.leftChild ? this.leftChild : this.rightChild;
        return true;
      }
    }

    // לא מצאנו את הצומת
    return false;
  }
}

// const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
// let bSTree = new BSNode();
// letters.forEach((l) => bSTree.insertNode(l));
// printTree.printTreeByLevels(bSTree);

// // //Use the following to test
// // console.log(bSTree.findNode("H")); // should print true
// // console.log(bSTree.findNode(bSTree, "G")); // should print true
// // console.log(bSTree.findNode(bSTree, "Z")); // should print false
// // console.log(bSTree.findNode(bSTree, "F")); // should print false
// // console.log(bSTree.findNode(bSTree, "y")); // should print false - we didn't make the tree case sensitive!
// bSTree.findCommonParent("B", "I"); //should return "H"
// bSTree.findCommonParent("B", "G"); //should return "E"
// bSTree.findCommonParent("B", "L"); //should return "J"
// bSTree.findCommonParent("L", "Y"); //should return "R"
// console.log(bSTree.findCommonParent("B", "H")); // אמור להחזיר "J"
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
printTree.printTreeByLevels(nodeWithOneChild);

console.log(nodeWithOneChild.removeNode(9)); // will return tree like the first image (the 9 will be deletied)
printTree.printTreeByLevels(nodeWithOneChild);

// let nodeWithTwoChildren = new BSNode();
// numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
// console.log(nodeWithTwoChildren.removeNode(8)); // will return tree like the second image (the root will be 5)

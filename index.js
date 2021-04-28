// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let sum = 0
        for (let int of this.array) {
            sum += int
        }
        return sum
    }
}



class Triangle extends Polygon {
    get isValid() {
        if (this.array.length !== 3) return
        return ((this.array[0] + this.array[1] > this.array[2]) && (this.array[0] + this.array[2] > this.array[1]) && (this.array[1] + this.array[2] > this.array[0]))
    }
}

class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.array)) return;
        if (this.array.length !== 4) return;
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        let side4 = this.array[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {

        if (this.array.length !== 4) return;
        return this.array[0] * this.array[0]
    }
}
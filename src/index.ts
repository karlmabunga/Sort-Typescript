class Sorter {
  collection: number[];
  constructor(collection: number[]) {
    this.collection = collection;
  }

  bubbleSort(): void {
    const { length } = this.collection;


    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          [[this.collection[j]], [this.collection[j + 1]]] = [[this.collection[j + 1]], [this.collection[j]]]
        }
      }
    }
  }
}
// Above is the same as below
// class Sorter {
//   constructor(public collection: number[]) {}
// }

const sorter = new Sorter([10, 3, -5, 0]);
sorter.bubbleSort();
console.log(sorter.collection);
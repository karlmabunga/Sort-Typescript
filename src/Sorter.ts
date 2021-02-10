interface Sortable {
  length: number;
  compare(idx1: number, idx2: number): boolean;
  swap(idx1: number, idx2: number): void;
}

export class Sorter {
  constructor( public collection: Sortable) {}

  bubbleSort(): void {

    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }

  }
}
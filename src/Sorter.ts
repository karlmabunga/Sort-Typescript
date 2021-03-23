interface Sortable {
  length: number;
  compare(idx1: number, idx2: number): boolean;
  swap(idx1: number, idx2: number): void;
}

export abstract class Sorter {
  abstract compare(idx1: number, idx2: number): boolean;
  abstract swap(idx1: number, idx2: number): void;
  abstract length: number;

  bubbleSort(): void {

    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }

  }
}
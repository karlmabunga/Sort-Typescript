export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(idx1: number, idx2: number): boolean {
    return this.data[idx1] > this.data[idx2]
  }


  swap(idx1: number, idx2: number): void {
    [[this.data[idx1]], [this.data[idx2]]] = [[this.data[idx2]], [this.data[idx1]]]
  }
}
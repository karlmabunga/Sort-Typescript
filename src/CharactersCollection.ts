export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length
  }

  compare(idx1: number, idx2: number): boolean {
    return (
      this.data[idx1].toLowerCase() > this.data[idx2].toLowerCase()
    );
  }

  swap(idx1: number, idx2: number): void {
    const characters = this.data.split('');

    const left = characters[idx1];
    characters[idx1] = characters[idx2];
    characters[idx2] = left;

    this.data = characters.join('');
  }
}
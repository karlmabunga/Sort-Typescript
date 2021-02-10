import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3,-5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.bubbleSort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('GHIbcaEf');
const sorter = new Sorter(charactersCollection);
sorter.bubbleSort();
console.log(charactersCollection.data);
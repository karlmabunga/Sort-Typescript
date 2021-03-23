import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3,-5, 0]);
// numbersCollection.bubbleSort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('GHIbcaEf');
// charactersCollection.bubbleSort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-100);
linkedList.add(300);
linkedList.add(-10);

linkedList.bubbleSort();
linkedList.print()
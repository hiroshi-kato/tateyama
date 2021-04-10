import { atom } from 'recoil';

export type Eet = {
  id: string;
  price: number;
  text: string;
  like: boolean;
  date: string;
};

const initialRecords: Eet[] = [
  {
    id: '1',
    price: 100,
    text: '毎朝のコンビニコーヒー',
    like: false,
    date: '2021-04-09',
  },
  {
    id: '2',
    price: 100,
    text: '毎朝のコンビニコーヒー',
    like: false,
    date: '2021-04-09',
  },
  {
    id: '3',
    price: 100,
    text: '毎朝のコンビニコーヒー',
    like: false,
    date: '2021-04-09',
  },
  {
    id: '4',
    price: 100,
    text: '毎朝のコンビニコーヒー',
    like: false,
    date: '2021-04-09',
  },
  {
    id: '5',
    price: 100,
    text: '毎朝のコンビニコーヒー',
    like: false,
    date: '2021-04-09',
  },
];

export const recordsState = atom({
  key: 'records',
  default: initialRecords,
});

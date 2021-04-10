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
    price: 850,
    text: '毎週金曜、仕事終わりのスーパー銭湯',
    like: false,
    date: '2021-04-09',
  },
  {
    id: '3',
    price: 150,
    text: '3時のプリン（セブンイレブン）',
    like: false,
    date: '2021-04-09',
  },
  {
    id: '4',
    price: 0,
    text: '起き抜けの白湯',
    like: false,
    date: '2021-04-09',
  },
  {
    id: '5',
    price: 2000,
    text: '街をブラブラして偶然出会った雑貨屋で買った食器がいい感じ',
    like: false,
    date: '2021-04-09',
  },
];

export const recordsState = atom({
  key: 'records',
  default: initialRecords,
});

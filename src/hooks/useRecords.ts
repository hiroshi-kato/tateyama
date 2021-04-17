import { atom, useRecoilState } from 'recoil';

export type Eet = {
  id: string;
  price: number;
  text: string;
  like: boolean;
  date: string;
};

const recordsState = atom<Eet[]>({
  key: 'recordsState',
  default: [],
});

export const useRecords = () => {
  const [records, setRecords] = useRecoilState(recordsState);

  return {
    records,
    setRecords,
  };
};

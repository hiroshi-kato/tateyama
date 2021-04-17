import firebase from 'firebase/app';

import { Eet } from '../hooks/useRecords';

const getRecords = async () => {
  const res = await firebase.firestore().collection('records').get();
  const list = res.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      price: data.price,
      text: data.content,
      like: data.like,
      date: data.createdAt.seconds,
    } as Eet;
  });

  return list;
};

export default getRecords;

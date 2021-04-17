import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';

import Layout from '../Layout';
import Input from '../Input';
import { useRecords } from '../../hooks/useRecords';

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
});

const List: VFC = () => {
  const { records, setRecords } = useRecords();

  const addRecord = (price: number, text: string) => {
    const date = new Date();
    const yymmdd = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    const newEet = records.slice().concat({
      id: Date.now().toString(),
      price,
      text,
      like: false,
      date: yymmdd,
    });
    setRecords(newEet);
  };

  return (
    <Layout title="入力">
      <View style={styles.content}>
        <Input addRecord={addRecord} />
      </View>
    </Layout>
  );
};

export default List;

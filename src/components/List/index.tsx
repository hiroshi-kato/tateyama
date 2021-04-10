import React, { VFC } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useRecoilState } from 'recoil';

import EetBox from '../Eet';
import Layout from '../Layout';
import { recordsState } from '../../store/atoms/Records';

const styles = StyleSheet.create({
  content: {
    width: '100%',
    padding: 20,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50,
  },
});

const List: VFC = () => {
  const [records, setRecords] = useRecoilState(recordsState);

  const onLike = (index: number) => {
    const newEet = records.slice().map((elm, i) => {
      if (i === index) {
        return { ...elm, like: !elm.like };
      }

      return elm;
    });

    setRecords(newEet);
  };
  const onDelete = (index: number) => {
    const newEet = records.filter((_, i) => i !== index);
    setRecords(newEet);
  };
  const editEet = (id: string, text: string) => {
    const newEet = records.slice().map((elm) => {
      if (elm.id === id) {
        return { ...elm, text };
      }

      return elm;
    });

    setRecords(newEet);
  };

  return (
    <Layout title="一覧">
      <View style={styles.content}>
        <FlatList
          data={records}
          renderItem={({ item, index }) => (
            <EetBox
              id={item.id}
              price={item.price}
              text={item.text}
              like={item.like}
              date={item.date}
              onLike={() => {
                onLike(index);
              }}
              onDelete={() => {
                onDelete(index);
              }}
              editEet={editEet}
            />
          )}
          // keyExtractor={(item) => item.id.toString()} // もとから文字列
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </Layout>
  );
};

export default List;

import React, { VFC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Layout from '../Layout';
import Input from '../Input';

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  price: {
    fontSize: 48,
    fontWeight: '900',
    marginLeft: 'auto',
  },
});

const List: VFC = () => (
  <Layout title="入力">
    <View style={styles.content}>
      <Text style={styles.price}>￥0</Text>
      <Input addEet={() => ''} />
    </View>
  </Layout>
);

export default List;

import React, { VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
  },
  content: {
    width: '100%',
    padding: 20,
    flex: 1,
  },
  contentContainer: {
    // paddingBottom: 50,
  },
});

type Props = {
  title: string;
  children: React.ReactChild;
};

const Layout: VFC<Props> = ({ title, children }) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
      <StatusBar style="light" />
    </View>
  </SafeAreaView>
);

export default Layout;
